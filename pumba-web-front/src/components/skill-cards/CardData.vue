<template>
  <div class="card-data-box">
    <div class="img-container">
      <img class="card-data-icon" :src="CardData.iconSrc" :alt="CardData.alt" />
    </div>
    <div class="card-data-data">
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
  },
};
</script>

<style scoped>
.card-data-box {
  @apply flex gap-2 w-[28.5rem];
}

.img-container {
  @apply w-48;
}

.card-data-icon {
  @apply w-full h-full;
}

.card-data-data {
  @apply flex flex-col gap-1 left-0 text-dark-blue;
}

.card-data-title {
  @apply font-bold text-2xl;
}

.card-data-desc {
  @apply font-medium text-base;
}
</style>