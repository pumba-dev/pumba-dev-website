<template>
  <div
    class="bubble-nav"
    type="radio"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.bubble-nav {
  @apply bg-disable-blue border-gray-blue
  border-2 border-opacity-50 rounded-full
  hover:cursor-pointer;
}

.bubble-nav.active {
  @apply bg-blue;
}
</style>