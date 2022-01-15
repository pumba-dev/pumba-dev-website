<template>
  <a class="made-with" href="https://tailwindcss.com/">
    <span class="madewith-title">Made With</span>
    <div class="image-box">
      <img src="/src/assets/svg/general/tailwind.svg" alt="Ícone do Tailwind" />
    </div>
  </a>
</template>

<style scoped>
.made-with {
  @apply flex flex-col select-none;
}

.madewith-title {
  @apply text-gray-blue text-base text-center;
}

.image-box {
  @apply w-40;
}
</style>