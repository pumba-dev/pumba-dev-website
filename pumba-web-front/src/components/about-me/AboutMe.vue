<template>
  <div class="about-me-text">
    <h1 class="about-me-title">
      Oi, eu sou o Paulo, fico feliz em lhe conhecer!
    </h1>
    <h2 class="about-me-subtitle">
      Eu comecei na computação desde muito jovem, aos 16 anos já estava
      oferecendo meus primeiros serviços como design. Logo depois, fui para a
      universidade estudar ciência da computação, onde aprendi sobre o mundo da
      programação. Com minha curiosidade, comecei a estudar e desenvolver
      aplicações web completa como esta.
    </h2>
  </div>
</template>

<style scoped>
.about-me-text {
  @apply text-gray-blue 
  w-[18.75rem]
  2xs:w-[21.8rem]
  xs:w-[22.5rem]
  sm:w-[30rem]
  md:w-[40rem]
  lg:w-[55rem]
  xl:w-[70rem]
  2xl:w-[75rem];
}
.about-me-title {
  @apply text-center font-bold tracking-wide
  text-[0.8rem]
  2xs:text-[0.85rem]
  xs:text-[0.9rem]
  sm:text-[1rem]
  md:text-[1.3rem] md:tracking-wider
  lg:text-[1.5rem]
  xl:text-[2.0rem]
  2xl:text-[2rem];
}

.about-me-subtitle {
  @apply text-justify leading-snug tracking-normal 
  text-xs py-1
  2xs:text-[0.8rem]
  xs:text-[0.83rem]
  sm:text-[0.9rem]
  md:text-[1.2rem] md:py-2 md:tracking-wide
  lg:text-[1.4rem] lg:py-3
  xl:text-[1.7rem] xl:py-4 xl:tracking-wider
  2xl:text-[1.85rem] 2xl:py-6;
}
</style>