<template>
  <section class="first-bg">
    <slot></slot>
  </section>
</template>

<style scoped>
.first-bg {
  @apply flex flex-col items-center
  h-[30rem] w-full
  bg-blue
  text-2xl
  sm:h-[32rem]
  md:h-[34rem]
  lg:h-[36rem]
  xl:h-[38rem]
  2xl:h-[42rem]
  3xl:h-[50rem];
}
</style>
