<template>
  <section class="home-presentation">
    <h1 class="home-title">Design, Desenvolvedor Full-Stack & Estudante</h1>
    <h2 class="home-subtitle">
      Meu trabalho é codificar simples e belas coisas, e eu amo o que faço!
    </h2>
  </section>
</template>

<style scoped>
.home-presentation {
  @apply text-dark-blue flex flex-col justify-center items-center text-center;
}

.home-title {
  @apply font-bold 
  sm:text-xl
  md:text-2xl
  lg:text-3xl
  xl:text-4xl
  2xl:text-5xl;
}

.home-subtitle {
  @apply font-light
  sm:text-base
  md:text-lg
  lg:text-xl
  xl:text-2xl
  2xl:text-3xl;
}
</style>