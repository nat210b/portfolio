<template>
    <div class="carousel-wrapper">
        <div class="carousel-header" v-if="title">
            <h2>{{ title }}</h2>
        </div>
        
        <div class="carousel-container">
            <!-- Prev Button -->
            <button class="nav-btn prev" @click="scrollPrev" :class="{ hidden: isAtStart }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            <!-- Scrollable Viewport -->
            <div class="carousel-viewport" ref="viewport" @scroll="handleScroll">
                <div class="carousel-slide" v-for="(img, index) in images" :key="index">
                    <div class="img-wrapper">
                        <img :src="img" @click="openZoom(img)" class="carousel-img" alt="Certificate" />
                        <div class="zoom-hint" @click="openZoom(img)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Next Button -->
            <button class="nav-btn next" @click="scrollNext" :class="{ hidden: isAtEnd }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>

        <!-- Pagination Dots -->
        <div class="carousel-indicators" v-if="dotCount > 1">
            <span 
                v-for="i in dotCount" 
                :key="'dot-'+i" 
                class="dot" 
                :class="{ active: activeIndex === i - 1 }"
                @click="scrollTo(i - 1)"
            ></span>
        </div>

        <!-- Zoom modal -->
        <transition name="fade">
            <div v-if="zoomImage" class="overlay" @click="zoomImage = null">
                <button class="close-zoom" @click="zoomImage = null">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <img :src="zoomImage" class="zoom-img" @click.stop />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ImageCarousel",
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            activeIndex: 0,
            dotCount: 0,
            isAtStart: true,
            isAtEnd: false,
            zoomImage: null,
            images: [
                new URL("../assets/cert/Certificate_Disney_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/Certificate_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/Englishlevel_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/HarvardPresentation_Certificate.JPG", import.meta.url).href,
                new URL("../assets/cert/SCI-O08_page-0001.jpg", import.meta.url).href,
                new URL("../assets/cert/Toeic_nat_page-0001.jpg", import.meta.url).href,
            ],
        };
    },
    mounted() {
        // Use a small timeout to let rendering finish before calculating scroll
        setTimeout(() => {
            this.checkScroll();
        }, 100);
        window.addEventListener('resize', this.checkScroll);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScroll);
    },
    methods: {
        handleScroll() {
            this.checkScroll();
        },
        checkScroll() {
            const el = this.$refs.viewport;
            if (!el) return;
            
            // Allow small pixel threshold for rounding differences across browsers
            this.isAtStart = el.scrollLeft <= 5;
            this.isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
            
            const slideWidth = el.scrollWidth / this.images.length;
            
            // Calculate how many items are visible on the screen
            const visibleItems = Math.round(el.clientWidth / slideWidth);
            
            // Recompute dotCount = total items - visible items + 1
            let computedDots = this.images.length - visibleItems + 1;
            if (computedDots < 1) computedDots = 1;
            this.dotCount = computedDots;

            // Calculate active index based on scroll center
            let newActiveIndex = Math.round(el.scrollLeft / slideWidth);
            if (newActiveIndex >= computedDots) {
                newActiveIndex = computedDots - 1;
            }
            this.activeIndex = newActiveIndex;
        },
        scrollNext() {
            const el = this.$refs.viewport;
            if (el) {
                // Determine width of one completely visible item or simply scroll by client width
                const slideWidth = el.scrollWidth / this.images.length;
                el.scrollBy({ left: slideWidth, behavior: 'smooth' });
            }
        },
        scrollPrev() {
            const el = this.$refs.viewport;
            if (el) {
                const slideWidth = el.scrollWidth / this.images.length;
                el.scrollBy({ left: -slideWidth, behavior: 'smooth' });
            }
        },
        scrollTo(index) {
            const el = this.$refs.viewport;
            if (el) {
                const slideWidth = el.scrollWidth / this.images.length;
                el.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
            }
        },
        openZoom(img) {
            this.zoomImage = img;
        },
    },
};
</script>

<style scoped>
.carousel-wrapper {
    position: relative;
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.carousel-viewport {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    gap: 16px;
    width: 100%;
    padding: 10px 4px; /* padding for box-shadow on items */
}

.carousel-viewport::-webkit-scrollbar {
    display: none;
}

.carousel-slide {
    scroll-snap-align: start;
    flex: 0 0 100%;
    transition: transform 0.3s ease;
}

/* Show 2 items on medium screens */
@media (min-width: 640px) {
    .carousel-slide {
        flex: 0 0 calc(50% - 8px);
    }
}

/* Show 3 items on large screens */
@media (min-width: 1024px) {
    .carousel-slide {
        flex: 0 0 calc(33.333% - 11px);
    }
}

.img-wrapper {
    position: relative;
    width: 100%;
    padding-top: 70%; /* 10:7 Aspect ratio, good for certificates */
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: zoom-in;
}

.img-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.carousel-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; /* ensures certificate isn't cropped */
    padding: 1rem;
    transition: transform 0.3s ease;
}

.img-wrapper:hover .carousel-img {
    transform: scale(1.02);
}

.zoom-hint {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: rgba(15, 23, 42, 0.8);
    color: white;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
    pointer-events: none;
}

.img-wrapper:hover .zoom-hint {
    opacity: 1;
    transform: scale(1);
}

/* Navigation Buttons */
.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    background: #0f172a;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    padding: 0;
}

.nav-btn:hover:not(.hidden) {
    background: #1e293b;
    transform: translateY(-50%) scale(1.1);
}

.nav-btn:active:not(.hidden) {
    transform: translateY(-50%) scale(0.95);
}

.nav-btn.prev {
    left: 8px;
}

.nav-btn.next {
    right: 8px;
}

.nav-btn.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-50%) scale(0.8);
}

@media (max-width: 768px) {
    .nav-btn {
        width: 40px;
        height: 40px;
    }
    .nav-btn.prev { left: 4px; }
    .nav-btn.next { right: 4px; }
}

/* Indicators */
.carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #cbd5e1;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot:hover {
    background: #94a3b8;
}

.dot.active {
    background: #0f172a;
    transform: scale(1.2);
}

/* Zoom Modal */
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 2rem;
    backdrop-filter: blur(4px);
}

.zoom-img {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 8px;
    object-fit: contain;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.close-zoom {
    position: absolute;
    top: 24px;
    right: 24px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.close-zoom:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1) rotate(90deg);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
