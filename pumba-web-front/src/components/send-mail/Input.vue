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
  @apply font-normal text-gray justify-start
  text-xl
  xs:text-2xl;
}
</style>