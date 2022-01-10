<template>
  <img
    class="home-img"
    :src="imageSrc"
    alt="Imagem de fundo com vários dispositivos de acesso a rede"
  />
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "/src/assets/svg/general/devices.svg",
    };
  },
};
</script>

<style>
.home-img {
  @apply w-180 pt-12;
}
</style>