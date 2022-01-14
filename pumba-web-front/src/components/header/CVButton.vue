<template>
  <div class="btn-background">
    <a
      href="src/assets/downloads/pumba-dev-curriculo.pdf"
      target="_blank"
      class="btn-text"
      >Baixar CV</a
    >
  </div>
</template>

<style scoped>
.btn-text {
  @apply text-2xl font-normal;
}

.btn-background {
  @apply flex justify-center items-center 
  w-36 h-12 text-blue
  border-solid border-2 border-blue rounded-full
  cursor-pointer;
}

.btn-background:hover {
  @apply text-white-gray bg-blue;
}
</style>