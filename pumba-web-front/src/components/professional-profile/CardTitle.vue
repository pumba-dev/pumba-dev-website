<template>
  <h1 class="card-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style scoped>
.card-title {
  @apply font-semibold text-xl text-center text-dark-blue;
}
</style>