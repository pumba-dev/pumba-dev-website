<template>
  <div class="card-nav">
    <BubbleNav :width="15" :height="15"></BubbleNav>
  </div>
</template>

<script>
import BubbleNav from "../shared/BubbleNav.vue";
export default {
  components: { BubbleNav },
};
</script>

<style scoped>
.card-nav {
  @apply flex gap-4;
}
</style>