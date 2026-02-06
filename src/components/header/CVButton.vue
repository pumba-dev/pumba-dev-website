<template>
  <button class="btn-background">
    <a :href="url" target="_blank" class="btn-text">{{ label }}</a>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn-background {
  @apply flex justify-center items-center 
  max-w-max text-blue
  border-solid border-2 border-blue rounded-full
  py-1 px-3 md:py-2 md:px-5;
}

.btn-background:hover {
  @apply lg:text-white-gray lg:bg-blue;
}

.btn-text {
  @apply font-normal
  text-base md:text-lg lg:text-xl  xl:text-2xl 2xl:text-3xl;
}
</style>
