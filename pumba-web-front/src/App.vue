<template>
  <main class="main">
    <Home></Home>
    <AboutMe class="about-me"></AboutMe>
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
  @apply bg-white-gray font-body w-full overflow-hidden
  flex flex-col
  box-border;
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
  @apply text-dark-blue font-bold text-center tracking-wide
  text-[1.5rem]
  xs:text-[1.75rem]
  sm:text-[2rem]
  md:text-[2.25rem];
}
</style>