<template>
  <BackgroundBlue class="first-bg-blue">
    <div class="about-me-text">
      <div class="titles-container">
        <h1 class="about-me-title">Olá! Sou Paulo Eduardo.</h1>
        <div class="about-me-title-2">
          <span>Cientista da Computação e Engenheiro de Software.</span>
        </div>
      </div>

      <h2 class="about-me-subtitle">
        Sou um entusiasta da computação desde muito cedo. Meu primeiro contato
        com um computador ocorreu aos 7 anos e, desde então, soube que esse
        seria o meu futuro. Foi durante a graduação em Ciência da Computação que
        mergulhei de forma intensa no fascinante mundo da programação, ampliando
        significativamente meus conhecimentos e habilidades. Hoje, meus dias são
        preenchidos com linhas de código e com a constante busca por
        conhecimento. Sou apaixonado por desenvolver aplicações e sistemas, que
        impactam positivamente a vida das pessoas e a eficiência dos negócios.
      </h2>
    </div>
  </BackgroundBlue>
</template>

<script>
import BackgroundBlue from "../shared/BackgroundBlue.vue";

export default {
  components: {
    BackgroundBlue,
  },
};
</script>

<style scoped>
.first-bg-blue {
  @apply mt-6;
}

.about-me-text {
  @apply text-gray-blue mt-8 flex flex-col
  gap-2
  sm:gap-3
  md:gap-4
  lg:gap-6
  w-[18.75rem]
  2xs:w-[21.8rem]
  xs:w-[22.5rem]
  sm:w-[30rem]
  md:w-[40rem]
  lg:w-[55rem]
  xl:w-[60rem]
  2xl:w-[70rem]
  3xl:w-[90rem];
}

.titles-container {
  @apply flex flex-col gap-1
  sm:gap-2
  md:gap-3;
}

.about-me-title {
  @apply text-center font-bold tracking-wide
  text-[0.8rem] leading-tight
  2xs:text-[0.85rem]
  xs:text-[0.9rem]
  sm:text-[1.1rem]
  md:text-[1.3rem] md:tracking-wider
  lg:text-[1.4rem]
  xl:text-[1.5rem] xl:tracking-widest
  2xl:text-[1.6rem];
}

.about-me-title-2 {
  @apply text-center font-bold tracking-wide
  text-[0.7rem] leading-tight
  2xs:text-[0.75rem]
  xs:text-[0.8rem]
  sm:text-[0.9rem]
  md:text-[1.1rem] md:tracking-wider
  lg:text-[1.2rem]
  xl:text-[1.3rem] xl:tracking-widest
  2xl:text-[1.4rem];
}

.about-me-subtitle {
  @apply text-justify leading-snug tracking-normal 
  text-xs py-1
  2xs:text-[0.8rem]
  xs:text-[0.83rem]
  sm:text-[0.9rem]
  md:text-[1.1rem] md:py-2 md:tracking-wider md:leading-normal
  lg:text-[1.2rem] lg:py-3
  xl:text-[1.3rem] xl:py-4 xl:tracking-wider xl:leading-relaxed
  2xl:text-[1.4rem] 2xl:py-5 2xl:tracking-widest 2xl:leading-loose;
}
</style>
