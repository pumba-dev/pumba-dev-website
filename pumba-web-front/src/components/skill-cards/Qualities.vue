<template>
  <div class="qualities">
    <transition-group name="slide-fade" tag="div">
      <template v-for="(card, index) in qualityListArray" :key="index">
        <CardData
          v-if="cardView == index"
          :key="index"
          :CardData="card"
        ></CardData>
      </template>
    </transition-group>
    <div class="qualities-nav">
      <BubbleNav
        v-for="(quality, index) in qualityListArray"
        @click="setViewCard"
        :id="index"
        :key="index"
        :width="15"
        :height="15"
      ></BubbleNav>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import CardData from "./CardData.vue";
import ArrayOfqualitys from "../../assets/javascripts/QualitiesList.js";
import BubbleNav from "../shared/BubbleNav.vue";
export default {
  components: {
    CardData,
    BubbleNav,
  },
  setup() {
    const data = reactive({
      qualityListArray: ArrayOfqualitys,
      cardView: 0,
    });

    onMounted(() => {
      // Set First Navigation with Class Active
      const setDefaultNav = () => {
        const $firstBubbleNav = document.querySelector(
          ".qualities .bubble-nav"
        );
        $firstBubbleNav.classList.add("active");
      };
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
      const $bubbleNav = document.querySelectorAll(".qualities .bubble-nav");
      $bubbleNav.forEach((nav) => {
        nav.classList.remove("active");
      });
    },
    setBubbleNavActive($nav) {
      $nav.classList.add("active");
    },
  },
};
</script>

<style scoped>
.qualities {
  @apply flex flex-col items-center gap-6;
}

.qualities-nav {
  @apply flex gap-3;
}

.slide-fade-enter-from {
  transform: translateX(80px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s linear;
}

.slide-fade-leave-from {
  display: none;
}
</style>