<template>
  <div class="card-carousel-container">
    <div class="card-carousel-wall">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-carousel-container {
  @apply flex justify-center relative overflow-hidden
  w-full h-28;
}

.card-carousel-wall {
  @apply flex absolute left-0;
}

@keyframes carouselleft {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}

.animation {
  @apply w-[200%] animate-carousel;
}
</style>