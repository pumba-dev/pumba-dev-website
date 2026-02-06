<template>
  <div class="card-background">
    <slot> </slot>
  </div>
</template>

<style scoped>
.card-background {
  @apply box-border flex flex-col items-center 
  bg-white-gray dark:bg-blue rounded-2xlarge 
  shadow-gray-blue dark:shadow-black shadow-2xl
  
  /* Reponsivity */
  px-5 py-4 gap-2
  xs:px-8 xs:py-5
  md:p-7;
}
</style>
