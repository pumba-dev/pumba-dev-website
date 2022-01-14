<template>
  <div
    class="nav-bubble"
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

<style>
.nav-bubble {
  @apply bg-disable-blue
  border-2 border-opacity-50 border-gray-blue
  rounded-full;
}

.nav-bubble.active {
  @apply bg-blue;
}
</style>