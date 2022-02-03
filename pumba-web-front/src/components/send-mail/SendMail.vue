<template>
  <section class="send-mail">
    <SectionTitle :titleText="'Mande Uma Mensagem'"></SectionTitle>
    <MailForm class="mail-form"></MailForm>
  </section>
</template>

<script>
import SectionTitle from "../shared/SectionTitle.vue";
import MailForm from "./MailForm.vue";
export default {
  components: { SectionTitle, MailForm },
};
</script>

<style scoped>
.send-mail {
  @apply flex flex-col gap-12 items-center;
}
</style>