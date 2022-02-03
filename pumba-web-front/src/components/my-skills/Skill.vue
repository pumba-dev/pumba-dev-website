<template>
  <div class="skill">
    <a class="skill-icon-box" :href="skill.docLink" target="_blank">
      <img class="skill-icon" :src="getImgUrl" :alt="skill.alt" />
    </a>
    <span class="skill-name">{{ skill.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getImgUrl() {
      return new URL(
        `../../assets/svg/my-skills/${this.skill.src}.svg`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style scoped>
.skill {
  @apply flex flex-col gap-3 justify-center h-max;
}

.skill-icon-box {
  /* Reponsivity */
  @apply w-28 h-28
  xl:w-32 xl:h-32
  2xl:w-36 2xl:h-36;
}

.skill-icon {
  @apply w-full h-full;
}

.skill-name {
  @apply text-dark-blue text-center font-medium text-2xl select-none;
}
</style>