<template>
  <button class="input-btn">Enviar</button>
</template>

<style scoped>
.input-btn {
  @apply h-12 m-auto
  text-blue  font-normal text-center
  border-solid border-2 border-blue rounded-full
  cursor-pointer
  w-[9rem] text-lg
  xs:w-[10rem]
  sm:w-[11rem] sm:text-xl
  md:w-[12rem] md:text-2xl;
}

.input-btn:hover {
  @apply lg:text-white-gray lg:bg-blue;
}
</style>