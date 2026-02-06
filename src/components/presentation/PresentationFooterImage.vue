<template>
  <div class="image-container">
    <img
      class="home-img"
      src="/src/assets/svg/general/devices.svg"
      :alt="$t('alt.devicesBackground')"
    />
  </div>
</template>

<style scoped>
.image-container {
  @apply w-full px-4
  xs:px-6
  sm:px-8;
}

.home-img {
  @apply w-full
  xs:w-[18rem]
  sm:w-[25rem]
  md:w-[30rem]
  lg:w-[35rem]
  xl:w-[40rem]
  2xl:w-[45rem]
  mx-auto;
}
</style>
