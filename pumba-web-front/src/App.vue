<template>
  <main class="main">
    <Header></Header>
    <Home></Home>
    <BackgroungBlue class="background-am-lr">
      <AboutMe></AboutMe>
      <LastRepos class="last-repos"></LastRepos>
    </BackgroungBlue>
  </main>
</template>

<script>
import AboutMe from "./components/about-me/AboutMe.vue";
import BackgroungBlue from "./components/shared/BackgroungBlue.vue";
import Header from "./components/header/Header.vue";
import Home from "./components/home/Home.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";

export default {
  components: { AboutMe, Header, Home, BackgroungBlue, LastRepos },
};
</script>

<style>
.main {
  @apply bg-white-gray font-body w-full h-min
  flex flex-col
  box-border;
}

.background-am-lr {
  @apply relative;
}

.last-repos {
  @apply absolute mt-80;
}
</style>