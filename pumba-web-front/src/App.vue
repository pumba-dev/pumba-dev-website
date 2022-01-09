<template>
  <main>
    <Logo :width="80" :height="80"></Logo>
    <CurriculumBtn></CurriculumBtn>
  </main>
</template>

<script>
import CurriculumBtn from "./components/header/curriculum-btn.vue";
import Logo from "./components/shared/logo.vue";
export default {
  components: { Logo, CurriculumBtn },
};
</script>

<style>
#App {
  font-family: "Baloo Bhai 2";
}
</style>