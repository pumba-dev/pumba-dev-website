<template>
  <div class="home-bg-img">
    <img
      class="home-img"
      :src="imageSrc"
      alt="Imagem de fundo com vários dispositivos de acesso a rede"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "/src/assets/general/devices.svg",
    };
  },
};
</script>

<style>
.home-bg-img {
  @apply flex justify-center pt-12;
}

.home-img {
  @apply w-180;
}
</style>