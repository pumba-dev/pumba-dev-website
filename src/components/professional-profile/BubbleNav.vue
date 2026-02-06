<template>
  <div class="bubble-nav" type="radio"></div>
</template>

<style scoped>
.bubble-nav {
  @apply w-4 h-4
  bg-disable-blue dark:bg-gray-blue
  border-gray-blue dark:border-white-gray
  border-2 border-opacity-50 rounded-full
  hover:cursor-pointer;
}

.bubble-nav.active {
  @apply bg-blue dark:bg-white-gray;
}
</style>
