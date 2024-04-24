<template>
  <section class="home-presentation">
    <h1 class="home-title">Desenvolvimento, Programação & Pesquisa</h1>
    <h2 class="home-subtitle">Transformando ideias em realidade</h2>
  </section>
</template>

<style scoped>
.home-presentation {
  @apply text-dark-blue flex flex-col items-center text-center
  gap-[1px] lg:gap-[2px] xl:gap-[3px];
}

.home-title {
  @apply text-sm font-black
  2xs:text-base
  xs:text-lg 
  sm:text-xl
  md:text-3xl
  lg:text-3xl
  xl:text-4xl
  2xl:text-5xl;
}

.home-subtitle {
  @apply /* after:content-['Meu_trabalho_é_codificar_belas_coisas_e_eu_amo_o_que_faço\!'] */
  text-sm font-light
  sm:text-base
  /* md:text-lg md:after:content-['Meu_trabalho_é_codificar_belas_coisas_e_eu_amo_o_que_faço\!'] */
  lg:text-xl
  xl:text-2xl
  2xl:text-3xl;
}
</style>
