<template>
  <button
    @click="toggleTheme"
    class="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
    :title="isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'"
  >
    <img
      v-if="isDark"
      src="/src/assets/svg/general/sun-icon.svg"
      alt="Ícone do sol"
      class="w-full h-full sun-icon"
    />
    <img
      v-else
      src="/src/assets/svg/general/moon-icon.svg"
      alt="Ícone da lua"
      class="w-full h-full moon-icon"
    />
  </button>
</template>

<script setup>
import { useTheme } from "../../composables/useTheme";

const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.sun-icon {
  filter: brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(200%)
    hue-rotate(180deg) brightness(105%) contrast(95%);
}

.moon-icon {
  filter: brightness(0) saturate(100%) invert(15%) sepia(20%) saturate(2000%)
    hue-rotate(200deg) brightness(95%) contrast(95%);
}
</style>
