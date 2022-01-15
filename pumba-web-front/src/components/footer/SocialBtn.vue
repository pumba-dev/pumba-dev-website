<template>
  <a class="social-btn" :href="socialMedia.link" target="_blank">
    <div class="icon-box">
      <img
        class="icon"
        :src="socialMedia.iconSrc"
        :alt="'Link para o' + socialMedia.name"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.social-btn {
  @apply w-12 h-12
  flex justify-center items-center
  rounded-full
  border border-solid border-gray-blue border-opacity-50
  !important;
}

.social-btn:hover {
  @apply bg-gray-blue;
}

.social-btn:hover .icon {
  filter: brightness(0) saturate(100%) invert(30%) sepia(66%) saturate(1448%)
    hue-rotate(207deg) brightness(89%) contrast(84%);
}

.icon-box {
  @apply w-6;
}

.icon {
  @apply m-auto;
}
</style>