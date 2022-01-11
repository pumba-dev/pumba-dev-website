<template>
  <img
    :style="{ width: width + 'px', height: height + 'px' }"
    src="../../assets/svg/general/logo.svg"
    alt="Pumba Developer Logo"
  />
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