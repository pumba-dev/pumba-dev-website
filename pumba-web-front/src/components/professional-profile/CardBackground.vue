<template>
  <div class="card-background">
    <slot> </slot>
  </div>
</template>

<style scoped>
.card-background {
  @apply box-border flex flex-col items-center 
  bg-white-gray rounded-2xlarge 
  shadow-gray-blue shadow-2xl
  border border-solid  border-dark-blue border-opacity-10
  
  /* Reponsivity */
  px-5 py-4 gap-2
  xs:px-8 xs:py-5
  md:p-7;
}
</style>