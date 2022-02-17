<template>
  <form id="mail-form" class="mail-form">
    <transition name="fade">
      <FormNotify v-if="hasNotify" :Notify="Notify"></FormNotify>
    </transition>
    <div class="userdata-box">
      <FormInput :inputName="'Nome'">
        <input
          class="input-area"
          type="text"
          placeholder="Insira aqui seu Nome"
          v-model="formInput.name"
          maxlength="30"
          required
        />
      </FormInput>
      <FormInput :inputName="'Email'">
        <input
          class="input-area"
          type="email"
          placeholder="Insira aqui seu Email"
          v-model="formInput.email"
          maxlength="45"
          required
        />
      </FormInput>
    </div>
    <FormInput :inputName="'Mensagem'">
      <textarea
        class="text-area"
        placeholder="Deixe seu recado..."
        v-model="formInput.message"
        cols="150"
        maxlength="650"
        required
      />
    </FormInput>
    <InputBtn @click.prevent="sendEmail()"></InputBtn>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

import FormInput from "./Input.vue";
import InputBtn from "./InputBtn.vue";
import FormNotify from "./Notify.vue";
export default {
  components: { FormInput, InputBtn, FormNotify },
  data() {
    return {
      formInput: {
        name: "",
        email: "",
        message: "",
      },
      hasNotify: false,
      Notify: {
        text: "O serviço de mensagens estará disponível em breve!",
        type: "normal",
      },
    };
  },
  methods: {
    sendEmail() {
      // Data
      const SERVICEID = "service_18xgfsm";
      const TEMPLATEID = "template_wdjv41l";
      const USERID = "user_fFjRZ4nh2baVVBbo9WDTb";
      const MAILFORM = {
        user_name: this.formInput.name,
        user_email: this.formInput.email,
        message: this.formInput.message,
      };

      // Verify if the form is filled
      if (this.formFilled(MAILFORM)) {
        // Send EMAIL
        emailjs
          .send(SERVICEID, TEMPLATEID, MAILFORM, USERID)
          .then((sendMailResult) => {
            if (sendMailResult.status === 200) {
              this.showNotify("Mensagem enviada com sucesso!", "sucess");
              this.resetInput();
            } else {
              this.showNotify("Erro ao enviar mensagem!", "error");
              this.resetInput();
            }
          });
      } else {
        this.showNotify("Preencha todos os campos!", "error");
      }
    },
    formFilled(form) {
      for (let key in form) {
        if (form[key] === "") {
          return false;
        }
      }
      return true;
    },
    showNotify(text, type) {
      this.Notify.text = text;
      this.Notify.type = type;
      window.scroll({
        left: 0,
        top: this.findPos(document.getElementById("mail-form")),
        behavior: "smooth",
      });
      this.hasNotify = true;
    },
    findPos(obj) {
      var curtop = 0;
      if (obj.offsetParent) {
        do {
          curtop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [curtop - 100];
      }
    },
    resetInput() {
      this.formInput.name = "";
      this.formInput.email = "";
      this.formInput.message = "";
    },
  },
  watch: {
    hasNotify() {
      setTimeout(() => {
        this.hasNotify = false;
      }, 3500);
    },
  },
};
</script>

<style>
.mail-form {
  @apply flex flex-col gap-6
  w-[90%]
  xs:w-[82%]
  sm:w-[75%]
  md:w-[70%]
  lg:w-[40rem]
  xl:w-[45rem]
  2xl:w-[47rem]
  relative;
}

.userdata-box {
  @apply flex flex-col justify-between gap-6 
  md:flex-row;
}

.input-area {
  @apply w-full h-12 px-2 text-xl sm:text-2xl 
  border border-gray border-opacity-30 rounded-lg
  2xl:w-[22.5rem];
}

.text-area {
  @apply w-full h-250 p-2
  resize-none text-xl sm:text-2xl 
  border border-gray border-opacity-30 rounded-lg;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>