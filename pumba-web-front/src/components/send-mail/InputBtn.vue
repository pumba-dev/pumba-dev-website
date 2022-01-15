<template>
  <button class="input-btn">Enviar</button>
</template>

<style scoped>
.input-btn {
  @apply w-48 h-12 m-auto
  text-blue text-2xl font-normal text-center
  border-solid border-2 border-blue rounded-full
  cursor-pointer;
}

.input-btn:hover {
  @apply text-white-gray bg-blue;
}
</style>