<template>
  <div class="profile-image-container">
    <img
      class="profile-image"
      :src="imageSrc"
      alt="Desenho de um desenvolvedor"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "src/assets/general/dev-avatar.svg",
    };
  },
};
</script>

<style scoped>
.profile-image-container {
  @apply flex justify-center pb-12;
}

.profile-image {
  @apply w-48 h-52;
}
</style>