<template>
  <img
    :style="{ width: width + 'px', height: height + 'px' }"
    src="./src/assets/svg/general/logo.svg"
    alt="Pumba Developer Logo"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 80,
    },
    height: {
      type: Number,
      default: 80,
    },
  },
};
</script>