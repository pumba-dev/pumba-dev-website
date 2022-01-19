<template>
  <section class="home">
    <Header></Header>
    <Presentation></Presentation>
  </section>
</template>

<script>
import Header from "../components/header/Header.vue";
import Presentation from "../components/presentation/Presentation.vue";
export default {
  components: { Header, Presentation },
};
</script>

<style scoped>
.home {
  @apply flex flex-col justify-between items-center min-h-[400px] h-screen;
}
</style>