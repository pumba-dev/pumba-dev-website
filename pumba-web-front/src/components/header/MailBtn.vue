<template>
  <div class="btn-background">
    <p class="btn-text">Diga Olá!</p>
  </div>
</template>

<style scoped>
.btn-text {
  @apply text-blue text-2xl font-normal
  hover:text-white-gray;
}

.btn-background {
  @apply flex justify-center items-center 
  w-36 h-12 
  border-solid border-2 border-blue rounded-full
  hover:bg-blue
  cursor-pointer;
}
</style>