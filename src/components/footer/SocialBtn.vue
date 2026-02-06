<template>
  <a 
    class="social-btn" 
    :href="socialMedia.link" 
    target="_blank"
    :title="titleText"
  >
    <div class="icon-box">
      <img class="icon" :src="getImgUrl" :alt="altText" />
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
  computed: {
    getImgUrl() {
      return new URL(
        `../../assets/svg/social/${this.socialMedia.src}.svg`,
        import.meta.url,
      ).href;
    },
    altText() {
      const key = this.socialMedia.key || this.socialMedia.name.toLowerCase().replace(/\s+/g, '');
      return `${this.$t("alt.socialLink")} ${this.$t(`socialMedia.${key}`)}`;
    },
    titleText() {
      const key = this.socialMedia.key || this.socialMedia.name.toLowerCase().replace(/\s+/g, '');
      return this.$t(`socialMedia.${key}`);
    },
  },
};
</script>

<style scoped>
.social-btn {
  @apply flex justify-center items-center
  rounded-full
  border border-solid border-gray-blue dark:border-white-gray border-opacity-50
  w-[2rem] h-[2rem]
  2xs:w-[2.5rem] 2xs:h-[2.5rem]
  xs:w-[3rem] xs:h-[3rem]

  !important;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.social-btn:hover {
  @apply lg:bg-gray-blue dark:lg:bg-white-gray;
}

.social-btn:hover .icon {
  filter: brightness(0) saturate(100%) invert(30%) sepia(66%) saturate(1448%)
    hue-rotate(207deg) brightness(89%) contrast(84%);
}

.icon-box {
  @apply flex items-center justify-center
  h-[0.9rem] w-[0.9rem]
  2xs:h-[1rem] 2xs:w-[1rem]
  xs:h-[1.25rem] xs:w-[1.25rem]
  sm:h-[1.5rem] sm:w-[1.5rem];
}

.icon {
  @apply w-full h-full;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
}
</style>
