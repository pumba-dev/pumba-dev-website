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
  max-w-max text-blue dark:text-white-gray
  transition-colors duration-300;
}

.btn-background:hover {
  @apply lg:text-disable-blue dark:lg:text-gray-blue;
}

.btn-background:hover .btn-text {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.btn-text {
  @apply font-normal
  text-base md:text-lg lg:text-xl  xl:text-2xl 2xl:text-3xl;
}
</style>
