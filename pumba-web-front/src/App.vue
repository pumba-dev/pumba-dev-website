<template>
  <main class="main">
    <Header class="header"></Header>
    <Home class="home"></Home>
    <BackgroungBlue class="first-bg-blue">
      <AboutMe class="about-me"></AboutMe>
    </BackgroungBlue>
    <LastRepos class="last-repos"></LastRepos>
    <MySkills class="my-skills"></MySkills>
    <QualityAndExp class="quality-and-exp"></QualityAndExp>
  </main>
</template>

<script>
import AboutMe from "./components/about-me/AboutMe.vue";
import BackgroungBlue from "./components/shared/BackgroungBlue.vue";
import Header from "./components/header/Header.vue";
import Home from "./components/home/Home.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";
import MySkills from "./components/my-skills/MySkills.vue";
import QualityAndExp from "./components/quality-and-exp/QualityAndExp.vue";

export default {
  components: {
    AboutMe,
    Header,
    Home,
    BackgroungBlue,
    LastRepos,
    MySkills,
    QualityAndExp,
  },
};
</script>

<style >
.main {
  @apply bg-white-gray font-body w-full
  flex flex-col
  box-border;
}

.header {
  @apply px-48 py-12;
}

.first-bg-blue {
  @apply mt-6;
}

.about-me {
  @apply pt-36;
}

.last-repos {
  @apply -mt-48 mx-auto;
}

.my-skills {
  @apply pt-24;
}

.quality-and-exp {
  @apply p-24;
}
</style>