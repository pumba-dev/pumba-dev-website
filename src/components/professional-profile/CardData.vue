<template>
  <div class="card-data-box">
    <div class="img-container">
      <img class="card-data-icon" :src="getImgUrl" :alt="CardData.alt" />
    </div>
    <div class="card-data-text">
      <h1 class="card-data-title">{{ CardData.title }}</h1>
      <span class="card-data-desc">{{ CardData.desc }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  props: {
    CardData: {
      type: Object,
      required: true,
    },
    CardType: {
      type: String,
      required: true,
    },
  },
  computed: {
    getImgUrl() {
      return new URL(
        `../../assets/svg/${this.CardType}/${this.CardData.src}.svg`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style scoped>
.card-data-box {
  @apply flex flex-col items-center gap-2
  md:flex-row
  md:gap-4;
}

.img-container {
  @apply w-[4rem] h-[4rem]
  md:w-[5rem] md:h-[5rem];
}

.card-data-text {
  @apply text-dark-blue
  flex flex-col text-center gap-1
  md:text-left;
}

.card-data-title {
  @apply font-semibold text-xl;
}

.card-data-desc {
  @apply font-medium 
  text-base w-[15rem] h-[8rem]
  xs:w-[17.5rem] xs:h-[7rem]
  md:text-base md:w-[20rem] md:h-[6rem]
  xl:w-[23rem] xl:h-[5.25rem];
}

.card-data-icon {
  filter: brightness(0) saturate(100%) invert(8%) sepia(39%) saturate(2526%)
    hue-rotate(209deg) brightness(96%) contrast(95%);
  @apply w-24;
}
</style>
