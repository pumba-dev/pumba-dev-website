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
  @apply flex flex-col items-center gap-1.5
  md:flex-row
  md:gap-3
  w-full
  h-full;
}

.img-container {
  @apply w-[3rem] h-[3rem]
  2xs:w-[3.5rem] 2xs:h-[3.5rem]
  sm:w-[4rem] sm:h-[4rem]
  md:w-[4.5rem] md:h-[4.5rem]
  lg:w-[5rem] lg:h-[5rem]
  flex-shrink-0;
}

.card-data-text {
  @apply text-dark-blue
  flex flex-col text-center gap-0.5
  md:text-left
  h-full
  w-full;
}

.card-data-title {
  @apply font-semibold
  text-lg
  sm:text-xl
  md:text-2xl
  lg:text-2xl;
}

.card-data-desc {
  @apply font-medium 
  text-sm
  sm:text-base
  md:text-lg
  lg:text-lg
  w-full
  max-w-[14rem]
  2xs:max-w-[16rem]
  xs:max-w-[18rem]
  sm:max-w-[20rem]
  md:max-w-[22rem]
  lg:max-w-[28rem]
  xl:max-w-[28rem];
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

@media (min-width: 640px) {
  .card-data-desc {
    -webkit-line-clamp: 4;
  }
}

/* Estilização da scrollbar */
.card-data-desc::-webkit-scrollbar {
  width: 4px;
}

.card-data-desc::-webkit-scrollbar-track {
  background: transparent;
}

.card-data-desc::-webkit-scrollbar-thumb {
  background-color: #1e3a8a; /* cor dark-blue */
  border-radius: 4px;
}

.card-data-desc::-webkit-scrollbar-thumb:hover {
  background-color: #1e40af; /* cor dark-blue mais escura */
}

.card-data-icon {
  filter: brightness(0) saturate(100%) invert(8%) sepia(39%) saturate(2526%)
    hue-rotate(209deg) brightness(96%) contrast(95%);
  @apply w-24;
}
</style>
