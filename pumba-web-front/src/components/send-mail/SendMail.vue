<template>
  <section class="send-mail">
    <h1 class="title">Mande Uma Mensagem</h1>
    <MailForm class="mail-form"></MailForm>
  </section>
</template>

<script>
import MailForm from "./MailForm.vue";
export default {
  components: { MailForm },
};
</script>

<style>
.send-mail {
  @apply flex flex-col gap-12;
}

.mail-form {
  @apply w-min;
}
</style>