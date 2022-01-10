<template>
  <div class="about-me-text">
    <h1 class="about-me-title">
      Oi, eu sou Paulo, fico feliz em lhe conhecer!
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

<script>
export default {};
</script>

<style>
.about-me-text {
  @apply w-950 text-gray-blue;
}
.about-me-title {
  @apply text-center text-2xl font-bold tracking-wider;
}

.about-me-subtitle {
  @apply text-center pt-4 leading-relaxed tracking-wider;
}
</style>