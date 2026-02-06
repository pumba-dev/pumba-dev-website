<template>
  <form id="mail-form" class="mail-form">
    <transition name="fade">
      <FormNotify v-if="hasNotify" :Notify="Notify"></FormNotify>
    </transition>
    <div class="userdata-box">
      <FormInput :inputName="$t('contact.form.nameLabel')">
        <input
          class="input-area"
          type="text"
          :placeholder="$t('contact.form.namePlaceholder')"
          v-model="formInput.name"
          maxlength="30"
          required
        />
      </FormInput>
      <FormInput :inputName="$t('contact.form.emailLabel')">
        <input
          class="input-area"
          type="email"
          :placeholder="$t('contact.form.emailPlaceholder')"
          v-model="formInput.email"
          maxlength="45"
          required
        />
      </FormInput>
    </div>
    <FormInput :inputName="$t('contact.form.messageLabel')">
      <textarea
        class="text-area"
        :placeholder="$t('contact.form.messagePlaceholder')"
        v-model="formInput.message"
        cols="150"
        maxlength="50000"
        required
      />
    </FormInput>
    <InputBtn @click.prevent="sendEmail()" :isLoading="isLoading"></InputBtn>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import { useI18n } from "vue-i18n";

import FormInput from "./Input.vue";
import InputBtn from "./InputBtn.vue";
import FormNotify from "./Notify.vue";
export default {
  components: { FormInput, InputBtn, FormNotify },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      formInput: {
        name: "",
        email: "",
        message: "",
      },
      hasNotify: false,
      isLoading: false,
      Notify: {
        text: this.t("contact.notifications.info.serviceUnavailable"),
        type: "normal",
      },
    };
  },
  methods: {
    async sendEmail() {
      // Data
      const SERVICEID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATEID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const USERID = import.meta.env.VITE_EMAILJS_USER_ID;
      const MAILFORM = {
        user_name: this.formInput.name,
        user_email: this.formInput.email,
        message: this.formInput.message,
      };

      // Verify if the form is filled
      if (this.formFilled(MAILFORM)) {
        this.isLoading = true;
        try {
          // Send EMAIL
          const sendMailResult = await emailjs.send(
            SERVICEID,
            TEMPLATEID,
            MAILFORM,
            USERID,
          );
          if (sendMailResult.status === 200) {
            this.showNotify(
              this.t("contact.notifications.success.emailSent"),
              "sucess",
            );
            this.resetInput();
          } else {
            this.showNotify(
              this.t("contact.notifications.error.emailFailed"),
              "error",
            );
          }
        } catch (error) {
          this.showNotify(
            this.t("contact.notifications.error.emailFailed"),
            "error",
          );
        } finally {
          this.isLoading = false;
        }
      } else {
        this.showNotify(
          this.t("contact.notifications.error.fillFields"),
          "error",
        );
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

<style scoped>
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
  @apply flex flex-col justify-between gap-6;
}

.input-area {
  @apply w-full h-12 px-2 text-xl sm:text-2xl 
  border border-gray border-opacity-30 rounded-lg
  dark:bg-gray-blue dark:text-white-gray;
}

.text-area {
  @apply w-full h-250 p-2
  resize-none text-xl sm:text-2xl 
  border border-gray border-opacity-30 rounded-lg
  dark:bg-gray-blue dark:text-white-gray;
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
