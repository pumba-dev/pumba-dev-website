<template>
  <div class="carousel-nav">
    <NavBubble :width="25" :height="25"></NavBubble>
    <NavBubble class="activate" :width="25" :height="25"></NavBubble>
  </div>
</template>

<script>
import NavBubble from "../shared/NavBubble.vue";

export default {
  components: { NavBubble },
};
</script>

<style>
.carousel-nav {
  @apply flex gap-6;
}
</style>