<template>
  <main class="main">
    <Home></Home>
    <BackgroundBlue class="first-bg-blue">
      <AboutMe class="about-me"></AboutMe>
    </BackgroundBlue>
    <LastRepos class="last-repos"></LastRepos>
    <MySkills class="my-skills section-margin"> </MySkills>
    <SkillCards class="skill-cards section-margin"></SkillCards>
    <SendMail class="send-mail section-margin"></SendMail>
    <Footer class="footer section-margin"></Footer>
  </main>
</template>

<script>
import Home from "./Views/Home.vue";
import AboutMe from "./components/about-me/AboutMe.vue";
import BackgroundBlue from "./components/shared/BackgroundBlue.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";
import MySkills from "./components/my-skills/MySkills.vue";
import SkillCards from "./components/skill-cards/SkillCards.vue";
import SendMail from "./components/send-mail/SendMail.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  components: {
    Home,
    AboutMe,
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
  @apply bg-white-gray font-body w-screen overflow-hidden
  flex flex-col
  box-border;
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

.skill-cards {
  @apply xl:mt-12 !important;
}

.section-margin {
  @apply mt-24;
}

/* Global Styles */
.title {
  @apply text-dark-blue font-bold text-center tracking-wide text-4xl;
}
</style>