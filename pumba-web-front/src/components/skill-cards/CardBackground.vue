<template>
  <div class="card-background">
    <slot> </slot>
  </div>
</template>

<style scoped>
.card-background {
  @apply box-border
  flex flex-col gap-3 
    items-center px-6 py-9 w-500
  bg-white-gray rounded-2xlarge
  shadow-gray-blue shadow-2xl
  border border-solid  border-dark-blue border-opacity-10;
}
</style>