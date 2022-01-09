<template>
  <section class="head-nav-container">
    <Curriculum-Btn></Curriculum-Btn>
    <Mail-Btn></Mail-Btn>
  </section>
</template>

<script>
import CurriculumBtn from "./CurriculumBtn.vue";
import MailBtn from "./MailBtn.vue";
export default {
  components: { CurriculumBtn, MailBtn },
};
</script>

<style>
.head-nav-container {
  @apply flex items-center gap-4;
}
</style>