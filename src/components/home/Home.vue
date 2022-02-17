<template>
  <section class="home">
    <Header></Header>
    <Presentation></Presentation>
  </section>
</template>

<script>
import Header from "../header/Header.vue";
import Presentation from "../presentation/Presentation.vue";
export default {
  components: { Header, Presentation },
};
</script>

<style scoped>
.home {
  @apply flex flex-col justify-between items-center h-full;
}
</style>