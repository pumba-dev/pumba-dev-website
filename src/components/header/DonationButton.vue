<template>
  <div class="donation-btn-wrapper">
    <button
      type="button"
      class="donation-btn"
      :title="t('header.donation.button')"
      :aria-label="t('header.donation.ariaLabel')"
      @click="openDonationModal"
    >
      <span class="donation-btn-text">{{ t("header.donation.button") }}</span>
    </button>

    <DonationModal :is-open="isDonationModalOpen" @close="closeDonationModal" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import DonationModal from "./DonationModal.vue";

export default {
  name: "DonationButton",
  components: {
    DonationModal,
  },
  props: {
    openSignal: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { t } = useI18n();
    const isDonationModalOpen = ref(false);

    const openDonationModal = () => {
      isDonationModalOpen.value = true;
    };

    const closeDonationModal = () => {
      isDonationModalOpen.value = false;
    };

    watch(
      () => props.openSignal,
      (newSignal, oldSignal) => {
        if (newSignal !== oldSignal) {
          openDonationModal();
        }
      },
    );

    return {
      t,
      isDonationModalOpen,
      openDonationModal,
      closeDonationModal,
    };
  },
};
</script>

<style scoped>
.donation-btn-wrapper {
  @apply flex items-center;
}

.donation-btn {
  @apply flex justify-center items-center cursor-pointer
  max-w-max text-blue dark:text-white-gray rounded-full
  border-solid border-2 border-blue dark:border-white-gray
  py-1 px-3 md:py-2 md:px-5
  transition-all duration-300;
}

.donation-btn:hover {
  @apply lg:text-white-gray lg:bg-blue dark:lg:bg-white-gray dark:lg:text-dark-blue;
}

.donation-btn-text {
  @apply font-normal
  text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl;
}
</style>
