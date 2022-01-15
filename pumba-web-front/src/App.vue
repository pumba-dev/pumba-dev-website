<template>
  <main class="main">
    <Header class="header"></Header>
    <Home class="home"></Home>
    <BackgroungBlue class="first-bg-blue">
      <AboutMe class="about-me"></AboutMe>
    </BackgroungBlue>
    <LastRepos class="last-repos"></LastRepos>
    <MySkills class="my-skills">
      <SkillCards class="skill-cards"></SkillCards>
    </MySkills>
    <SendMail class="send-mail"></SendMail>
  </main>
</template>

<script>
import AboutMe from "./components/about-me/AboutMe.vue";
import BackgroungBlue from "./components/shared/BackgroungBlue.vue";
import Header from "./components/header/Header.vue";
import Home from "./components/home/Home.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";
import MySkills from "./components/my-skills/MySkills.vue";
import SkillCards from "./components/skill-cards/SkillCards.vue";
import SendMail from "./components/send-mail/SendMail.vue";

export default {
  components: {
    AboutMe,
    Header,
    Home,
    BackgroungBlue,
    LastRepos,
    MySkills,
    SkillCards,
    SendMail,
  },
};
</script>

<style >
.main {
  @apply bg-white-gray font-body w-full
  flex flex-col
  box-border
  pb-48;
}

.header {
  @apply px-48 my-12;
}

.first-bg-blue {
  @apply mt-6;
}

.about-me {
  @apply mt-36;
}

.last-repos {
  @apply -mt-48 mx-auto;
}

.my-skills {
  @apply mt-24;
}

.send-mail {
  @apply mt-24;
}
/* Global Styles */
.title {
  @apply text-dark-blue font-bold text-5xl text-center;
}
</style>