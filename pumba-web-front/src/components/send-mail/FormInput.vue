<template>
  <div class="form-input">
    <label class="name">{{ inputName }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    inputName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.form-input {
  @apply flex flex-col gap-1 items-start;
}

.name {
  @apply text-2xl font-normal text-gray justify-start;
}
</style>