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
import { reactive, toRefs } from "vue";
import CardData from "./CardData.vue";
import ArrayOfqualitys from "../../assets/javascripts/MyQualityList.js";
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

    return { ...toRefs(data) };
  },
  methods: {
    setViewCard(event) {
      console.log(event.target);
      this.cardView = event.target.id;
    },
  },
};
</script>

<style scoped>
.qualities {
  @apply flex flex-col items-center gap-3;
}

.qualities-nav {
  @apply flex gap-3;
}

.slide-fade-enter-active {
  transition: all 1s linear;
}

.slide-fade-leave-active {
  transition: all 1s linear;
}

.slide-fade-enter-from {
  transform: translateX(350px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-350px);
  opacity: 0;
}
</style>