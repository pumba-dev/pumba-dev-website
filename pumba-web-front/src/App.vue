<template>
  <main class="main">
    <Header class="header"></Header>
    <Home class="home"></Home>
    <BackgroundBlue class="first-bg-blue">
      <AboutMe class="about-me"></AboutMe>
    </BackgroundBlue>
    <LastRepos class="last-repos"></LastRepos>
    <MySkills class="my-skills section-margin">
      <SkillCards class="skill-cards"></SkillCards>
    </MySkills>
    <SendMail class="send-mail section-margin"></SendMail>
    <Footer class="footer section-margin"></Footer>
  </main>
</template>

<script>
import AboutMe from "./components/about-me/AboutMe.vue";
import BackgroundBlue from "./components/shared/BackgroundBlue.vue";
import Header from "./components/header/Header.vue";
import Home from "./components/home/Home.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";
import MySkills from "./components/my-skills/MySkills.vue";
import SkillCards from "./components/skill-cards/SkillCards.vue";
import SendMail from "./components/send-mail/SendMail.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  components: {
    AboutMe,
    Header,
    Home,
    BackgroundBlue,
    LastRepos,
    MySkills,
    SkillCards,
    SendMail,
    Footer,
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

.section-margin {
  @apply mt-24;
}

/* Global Styles */
.title {
  @apply text-dark-blue font-bold text-center tracking-wide
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  xl:text-5xl;
}
</style>