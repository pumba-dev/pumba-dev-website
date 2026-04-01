import axiosInstance from "./axiosInstance";

const STREAM_CHAR_DELAY_MS = 12;

function resolveStreamUrl() {
  const baseURL = axiosInstance.defaults.baseURL || "";

  if (!baseURL) return "/openai/get-answer-stream";

  return `${baseURL.replace(/\/$/, "")}/openai/get-answer-stream`;
}

function parseSseBlock(block) {
  let event = "message";
  const dataLines = [];

  for (const line of block.split("\n")) {
    if (line.startsWith("event:")) {
      event = line.slice(6).trim();
    } else if (line.startsWith("data:")) {
      dataLines.push(line.slice(5).trim());
    }
  }

  const rawData = dataLines.join("\n");
  if (!rawData) return null;

  try {
    return { event, payload: JSON.parse(rawData) };
  } catch {
    return { event, payload: { text: rawData } };
  }
}

function createAbortError() {
  if (typeof DOMException === "function") {
    return new DOMException("The operation was aborted.", "AbortError");
  }

  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}

function waitForCharTick(ms, signal) {
  if (ms <= 0) return Promise.resolve();
  if (signal?.aborted) return Promise.reject(createAbortError());

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);

    const onAbort = () => {
      clearTimeout(timeoutId);
      signal?.removeEventListener("abort", onAbort);
      reject(createAbortError());
    };

    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export default {
  async generateResponse(prompt) {
    return axiosInstance.post("/openai/get-answer", { prompt });
  },

  async generateResponseStream(
    prompt,
    { onDelta, onDone, onError, signal } = {},
  ) {
    const response = await fetch(resolveStreamUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
      signal,
    });

    if (!response.ok) {
      throw new Error(`Stream request failed: ${response.status}`);
    }

    if (!response.body) {
      throw new Error("ReadableStream not supported in this browser.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let buffer = "";
    let finalText = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const blocks = buffer.split("\n\n");
      buffer = blocks.pop() || "";

      for (const block of blocks) {
        const parsed = parseSseBlock(block);
        if (!parsed) continue;

        const { event, payload } = parsed;

        if (event === "delta") {
          const chunk = payload?.text || "";
          if (chunk) {
            finalText += chunk;

            if (onDelta) {
              const chars = Array.from(chunk);

              for (let i = 0; i < chars.length; i += 1) {
                if (signal?.aborted) {
                  throw createAbortError();
                }

                onDelta(chars[i]);

                if (i < chars.length - 1) {
                  await waitForCharTick(STREAM_CHAR_DELAY_MS, signal);
                }
              }
            }
          }
        } else if (event === "done") {
          onDone?.(payload?.text || finalText);
          return payload?.text || finalText;
        } else if (event === "error") {
          const message = payload?.message || "Erro ao processar stream";
          onError?.(message);
          throw new Error(message);
        }
      }
    }

    onDone?.(finalText);
    return finalText;
  },
};
