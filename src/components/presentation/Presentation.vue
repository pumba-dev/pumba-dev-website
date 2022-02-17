<template>
  <section class="presentation">
    <div class="to-organize-screen"></div>
    <div class="title-and-avatar">
      <PresentationText></PresentationText>
      <PresentationAvatar class="presentation-avatar"></PresentationAvatar>
    </div>
    <PresentationFooterImage></PresentationFooterImage>
  </section>
</template>

<script>
import PresentationFooterImage from "./PresentationFooterImage.vue";
import PresentationText from "./PresentationText.vue";
import PresentationAvatar from "./PresentationAvatar.vue";
export default {
  components: { PresentationText, PresentationAvatar, PresentationFooterImage },
};
</script>

<style scoped>
.presentation {
  @apply flex flex-col justify-between items-center 
  h-full gap-12
  lg:gap-14
  xl:gap-16;
}

.title-and-avatar {
  @apply flex flex-col items-center 
  gap-8 md:gap-12 lg:gap-14 xl:gap-16;
}

.presentation-avatar {
  @apply w-28 xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-56;
}
</style>