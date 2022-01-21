<template>
  <a class="made-with" href="https://tailwindcss.com/" target="_blank">
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
  @apply text-gray-blue text-center
  text-xs
  xs:text-sm
  sm:text-base;
}

.image-box {
  @apply w-[7rem]
  xs:w-[8rem]
  sm:w-[9rem]
  md:w-[10rem];
}
</style>