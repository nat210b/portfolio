<template>
  <div class="carousel">
    <!-- images -->
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="carousel-slide"
      >
        <img :src="img" />
      </div>
    </div>

    <!-- controls -->
    <button class="nav left" @click="prev">‹</button>
    <button class="nav right" @click="next">›</button>

    <!-- dots -->
    <div class="dots">
      <span
        v-for="(img, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',

  props: {
    images: {
      type: Array,
      required: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },

  data() {
    return {
      currentIndex: 0,
      timer: null
    }
  },

  mounted() {
    if (this.autoPlay) {
      this.startAutoPlay()
    }
  },

  beforeUnmount() {
    this.stopAutoPlay()
  },

  methods: {
    next() {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    goTo(index) {
      this.currentIndex = index
    },
    startAutoPlay() {
      this.timer = setInterval(this.next, this.interval)
    },
    stopAutoPlay() {
      if (this.timer) clearInterval(this.timer)
    }
  }
}
</script>
<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* arrows */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  font-size: 32px;
  padding: 4px 12px;
  cursor: pointer;
  border-radius: 50%;
}

.nav.left {
  left: 12px;
}
.nav.right {
  right: 12px;
}

/* dots */
.dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
}

.dots span.active {
  background: white;
}

</style>