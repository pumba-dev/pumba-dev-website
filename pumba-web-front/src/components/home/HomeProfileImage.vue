<template>
  <img
    class="profile-image"
    :src="imageSrc"
    alt="Desenho de um desenvolvedor"
  />
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "src/assets/svg/general/dev-avatar.svg",
    };
  },
};
</script>

<style scoped>
.profile-image {
  @apply w-48;
}
</style>