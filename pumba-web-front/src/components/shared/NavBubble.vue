<template>
  <div
    class="nav-bubble"
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
  border border-opacity-50 border-gray-blue;
}

.nav-bubble.activate {
  @apply bg-blue;
}
</style>