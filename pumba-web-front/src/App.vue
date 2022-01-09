<template>
  <main class="font-body">
    <Header></Header>
    <Home></Home>
  </main>
</template>

<script>
import Header from "./components/header/Header.vue";
import Home from "./components/home/Home.vue";

export default {
  components: { Header, Home },
};
</script>

<style>
</style>