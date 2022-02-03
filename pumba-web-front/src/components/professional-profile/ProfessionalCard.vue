<template>
  <CardBackground>
    <div class="professional-card" :class="[CardType]">
      <CardTitle>{{ TitleText }}</CardTitle>
      <transition-group name="slide-fade" tag="div">
        <template v-for="(card, index) in CardDataList" :key="index">
          <CardData
            v-if="cardView == index"
            :key="index"
            :CardData="card"
            :CardType="CardType"
          ></CardData>
        </template>
      </transition-group>
      <div class="card-nav">
        <BubbleNav
          v-for="(_, index) in CardDataList"
          @click="setViewCard"
          :id="index"
          :key="index"
        ></BubbleNav>
      </div>
    </div>
  </CardBackground>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import CardBackground from "./CardBackground.vue";
import CardData from "./CardData.vue";
import BubbleNav from "./BubbleNav.vue";
import CardTitle from "./CardTitle.vue";
export default {
  props: {
    CardType: {
      type: String,
      required: true,
    },
    TitleText: {
      type: String,
      required: true,
    },
    CardDataList: {
      type: Array,
      required: true,
    },
  },
  components: {
    CardBackground,
    CardData,
    BubbleNav,
    CardTitle,
  },
  setup(props) {
    const data = reactive({
      cardView: 0,
    });

    onMounted(() => {
      // Set First Navigation with Class Active
      function setDefaultNav() {
        const $professionalCard = document.querySelector(
          `.professional-card.${props.CardType}`
        );
        const $firstBubbleNav = $professionalCard.querySelector(".bubble-nav");
        $firstBubbleNav.classList.add("active");
      }

      setDefaultNav();
    });

    return { ...toRefs(data) };
  },
  methods: {
    setViewCard(event) {
      this.resetBubbleNav();
      this.cardView = event.target.id;
      this.setBubbleNavActive(event.target);
    },
    resetBubbleNav() {
      const $professionalCard = document.querySelector(
        `.professional-card.${this.CardType}`
      );
      const $bubbleNavList = $professionalCard.querySelectorAll(".bubble-nav");
      $bubbleNavList.forEach(($nav) => {
        $nav.classList.remove("active");
      });
    },
    setBubbleNavActive($nav) {
      $nav.classList.add("active");
    },
  },
};
</script>

<style scoped>
.professional-card {
  @apply flex flex-col items-center gap-6
  md:gap-4;
}

.card-nav {
  @apply flex gap-3;
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s linear;
}

.slide-fade-leave-from {
  display: none;
}
</style>