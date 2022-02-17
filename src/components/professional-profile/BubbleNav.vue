<template>
  <div class="bubble-nav" type="radio"></div>
</template>

<style scoped>
.bubble-nav {
  @apply w-4 h-4
  bg-disable-blue border-gray-blue
  border-2 border-opacity-50 rounded-full
  hover:cursor-pointer;
}

.bubble-nav.active {
  @apply bg-blue;
}
</style>