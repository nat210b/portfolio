<template>
    <div class="carousel-container">
        <button class="nav-btn" @click="prev" :disabled="currentIndex === 0">
            ‹
        </button>

        <div class="carousel-viewport">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * imageWidth}px)` }">
                <img v-for="(img, index) in images" :key="index" :src="img" @click="openZoom(img)" />
            </div>
        </div>

        <button class="nav-btn" @click="next" :disabled="currentIndex === images.length - 1">
            ›
        </button>

        <!-- Zoom modal -->
        <div v-if="zoomImage" class="overlay" @click="zoomImage = null">
            <img :src="zoomImage" class="zoom-img" />
        </div>
    </div>
</template>



<script>
export default {
    name: "ImageCarousel",
    data() {
        return {
            currentIndex: 0,
            imageWidth: 516,
            zoomImage: null,
            images: [
                new URL("../assets/cert/Certificate_Disney_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/Certificate_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/Englishlevel_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/HarvardPresentation_Certificate.JPG", import.meta.url).href,
                new URL("../assets/cert/SCI-O08_page-0001.jpg", import.meta.url).href,
            ],
        };
    },
    methods: {
        next() {
            if (this.currentIndex < 1) {
                this.currentIndex++;
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        openZoom(img) {
            this.zoomImage = img;
        },
    },
};

</script>

<style scoped>
.carousel-container {
    display: flex;
    align-items: center;
    gap: 12px;
}

.carousel-viewport {
    width: auto;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    transition: transform 0.4s ease;
}

.carousel-track.noTransition {
    transition: none;
}

img {
    width: 500px;
    height: 250px;
    margin-right: 16px;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
}

/* Zoom */
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
    z-index: 999;
}

.zoom-img {
    width: 500px;
    height: auto;
    border-radius: 12px;
}

.nav-btn {
    font-size: 32px;
    padding: 4px 12px;
    border: none;
    background: #0f172a;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
</style>
