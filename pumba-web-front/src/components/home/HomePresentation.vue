<template>
  <section class="home-presentation">
    <h1 class="home-title">Design, Desenvolvedor Full-Stack & Estudante</h1>
    <h2 class="home-subtitle">
      Meu trabalho é codificar simples e belas coisas, e eu amo o que faço!
    </h2>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home-presentation {
  @apply text-dark-blue flex flex-col justify-center items-center;
}
.home-title {
  @apply text-4xl font-bold;
}

.home-subtitle {
  @apply text-2xl font-normal;
}
</style>