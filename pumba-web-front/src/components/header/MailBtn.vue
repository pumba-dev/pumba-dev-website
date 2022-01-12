<template>
  <div class="btn-background">
    <p class="btn-text">Diga Olá!</p>
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