<template>
  <div class="notify" :class="[Notify.type]">
    <p class="notify-text">{{ Notify.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    Notify: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.notify {
  @apply w-full border-2 border-dark-blue border-opacity-30 border-solid 
  rounded-large shadow-md
  bg-gray p-[0.5rem];
}

.notify.normal {
  @apply bg-blue;
}

.notify.danger {
  @apply bg-orange-red;
}

.notify.sucess {
  @apply bg-green;
}

.notify-text {
  @apply text-center text-white font-normal select-none
  text-sm
  sm:text-base
  md:text-lg;
}
</style>