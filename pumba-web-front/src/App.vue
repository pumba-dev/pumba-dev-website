<template>
  <main class="main">
    <Header></Header>
    <Home></Home>
    <FirstBg>
      <AboutMe></AboutMe>
      <LastRepos class="last-repos"></LastRepos>
    </FirstBg>
  </main>
</template>

<script>
import AboutMe from "./components/about-me/AboutMe.vue";
import FirstBg from "./components/first-bg/FirstBg.vue";
import Header from "./components/header/Header.vue";
import Home from "./components/home/Home.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";

export default {
  components: { AboutMe, Header, Home, FirstBg, LastRepos },
};
</script>

<style>
.main {
  @apply bg-white-gray font-body w-screen
  flex flex-col
  box-border relative;
}

.last-repos {
  @apply absolute mt-80;
}
</style>