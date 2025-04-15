<template>
  <CardBackground>
    <div class="professional-card" :class="[CardType]">
      <CardTitle>{{ TitleText }}</CardTitle>
      <div
        class="carousel-container"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        @touchstart="startDrag"
        @touchmove="onDrag"
        @touchend="endDrag"
      >
        <div class="carousel-wrapper">
          <div class="carousel-content">
            <CardData
              v-for="(card, index) in CardDataList"
              :key="index"
              :CardData="card"
              :CardType="CardType"
              :style="getSlideStyle(index)"
            ></CardData>
          </div>
        </div>
      </div>
      <div class="card-nav">
        <BubbleNav
          v-for="(_, index) in CardDataList"
          @click="setViewCard"
          :id="index"
          :key="index"
          :class="{ active: cardView === index }"
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
      isDragging: false,
      startX: 0,
      currentX: 0,
      dragThreshold: 50,
    });

    onMounted(() => {
      const $professionalCard = document.querySelector(
        `.professional-card.${props.CardType}`
      );
      const $firstBubbleNav = $professionalCard.querySelector(".bubble-nav");
      $firstBubbleNav.classList.add("active");
    });

    return { ...toRefs(data) };
  },
  methods: {
    getSlideStyle(index) {
      const position = (index - this.cardView) * 120;
      const dragOffset = this.isDragging
        ? (this.currentX - this.startX) * 0.5
        : 0;
      const translateX = position + dragOffset;

      return {
        position: "absolute",
        width: "100%",
        transform: `translateX(${translateX}%)`,
        transition: this.isDragging ? "none" : "all 0.3s ease-out",
        opacity: Math.abs(translateX) < 120 ? 1 : 0,
        visibility: Math.abs(translateX) < 180 ? "visible" : "hidden",
      };
    },
    setViewCard(event) {
      const newIndex = parseInt(event.target.id);
      if (newIndex === this.cardView) return;

      this.resetBubbleNav();
      this.cardView = newIndex;
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
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.type.includes("mouse")
        ? event.clientX
        : event.touches[0].clientX;
      this.currentX = this.startX;
    },
    onDrag(event) {
      if (!this.isDragging) return;
      event.preventDefault();

      this.currentX = event.type.includes("mouse")
        ? event.clientX
        : event.touches[0].clientX;
    },
    endDrag() {
      if (!this.isDragging) return;

      const dragDistance = this.currentX - this.startX;
      this.isDragging = false;

      if (Math.abs(dragDistance) > this.dragThreshold) {
        if (dragDistance > 0 && this.cardView > 0) {
          this.setViewCard({ target: { id: this.cardView - 1 } });
        } else if (
          dragDistance < 0 &&
          this.cardView < this.CardDataList.length - 1
        ) {
          this.setViewCard({ target: { id: this.cardView + 1 } });
        }
      }

      this.startX = 0;
      this.currentX = 0;
    },
  },
};
</script>

<style scoped>
.professional-card {
  @apply flex flex-col items-center gap-4
  md:gap-3
  w-full;
}

.carousel-container {
  @apply w-full cursor-grab active:cursor-grabbing overflow-hidden
  min-w-[16rem]
  2xs:min-w-[18rem]
  xs:min-w-[20rem]
  sm:min-w-[22rem]
  md:min-w-[25rem]
  lg:min-w-[32rem]
  xl:min-w-[30rem]
  touch-pan-x
  relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.carousel-container img {
  pointer-events: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

.carousel-wrapper {
  @apply w-full relative;
}

.carousel-content {
  @apply w-full relative;
  height: 12rem;
  @apply sm:h-[10rem] md:h-[8rem] lg:h-[9rem];
}

.carousel-content > * {
  @apply px-4;
}

.carousel-content :deep(.card-data-box) {
  @apply absolute w-full transition-all duration-300;
  opacity: 0;
  transform: translateX(100%);
}

.carousel-content :deep(.card-data-box.active) {
  opacity: 1;
  transform: translateX(0);
}

.carousel-content :deep(.card-data-box.prev) {
  transform: translateX(-100%);
}

.card-nav {
  @apply flex gap-3 mt-2;
}

.bubble-nav.active {
  @apply bg-dark-blue;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
