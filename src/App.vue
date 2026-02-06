<template>
  <main class="main">
    <Home></Home>
    <AboutMe class="about-me"></AboutMe>
    <LastRepos class="last-repos"></LastRepos>
    <MySkills class="my-skills section-margin"> </MySkills>
    <ProfessionalProfile
      class="skill-cards section-margin"
    ></ProfessionalProfile>
    <SendMail class="send-mail section-margin"></SendMail>
    <Footer class="footer section-margin"></Footer>
    <LanguageSwitcher></LanguageSwitcher>
  </main>
</template>

<script>
import Home from "./components/home/Home.vue";
import AboutMe from "./components/about-me/AboutMe.vue";
import BackgroundBlue from "./components/shared/BackgroundBlue.vue";
import LastRepos from "./components/last-repos/LastRepos.vue";
import MySkills from "./components/my-skills/MySkills.vue";
import ProfessionalProfile from "./components/professional-profile/ProfessionalProfile.vue";
import SendMail from "./components/send-mail/SendMail.vue";
import Footer from "./components/footer/Footer.vue";
import LanguageSwitcher from "./components/shared/LanguageSwitcher.vue";

export default {
  components: {
    Home,
    AboutMe,
    BackgroundBlue,
    LastRepos,
    MySkills,
    ProfessionalProfile,
    SendMail,
    Footer,
    LanguageSwitcher,
  },
};
</script>

<style>
.main {
  @apply bg-white-gray dark:bg-dark-blue font-body w-full overflow-hidden
  flex flex-col
  box-border;
}

.last-repos {
  @apply -mt-24 mx-auto
  sm:-mt-28
  md:-mt-32
  lg:-mt-36
  xl:-mt-40
  2xl:-mt-44
  3xl:-mt-52;
}

.skill-cards {
  @apply xl:mt-12 !important;
}

.section-margin {
  @apply mt-24;
}
</style>
