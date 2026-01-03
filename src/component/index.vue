<template>
    <section id="home"
        class="min-h-screen flex flex-col items-center justify-center bg-brand-navy text-white text-center px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Nat 👋
        </h1>
        <p class="text-lg md:text-xl max-w-2xl text-slate-200">
            Full-stack developer with strong data background, experienced in building
            real-world systems from ERP platforms to data-driven healthcare solutions.
        </p>
    </section>


    <section id="profile" class="py-20 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title">Profile</h2>
            <p class="section-text">
                I am a Full-stack Developer with a strong foundation in data science and business analysis.
                I enjoy developing systems that solve real problems, from ERP platforms for small clinics
                to data analytics solutions in healthcare.
                <br /><br />
                My background allows me to communicate effectively with both technical and non-technical stakeholders,
                turning requirements into scalable and user-centered solutions.
            </p>
        </div>
    </section>

    <section id="experiences" class="py-20 px-6 bg-white">
        <h2 class="section-title text-center mb-12">Experiences</h2>
        <div class="flex bg-white p-3">
            <TimelineExperience :experiences="allExperiences" @hover="activeExperience = $event" />
            <MapExperience :activeExperience="activeExperience" />
        </div>
    </section>
    <section id="certificate" class="py-20 px-6 bg-gray-50">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="section-title mb-6">Certificates</h2>

            <p class="text-gray-600 mb-8">
                Selected certifications related to data, software, and platform development.
            </p>

            <button class="more-btn" @click="showModal = true">
                See Certificates
            </button>
        </div>

        <!-- MODAL -->
        <transition name="modal-fade">
            <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
                <div class="modal-box">
                    <button class="close-btn" @click="closeModal">✕</button>

                    <!-- 🔥 Carousel ของนาย -->
                    <CertificateCarousel />
                </div>
            </div>
        </transition>
    </section>



    <section id="publication" class="py-20 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title">Publication</h2>
            <p class="section-text">
                Published a research paper on sentiment-based opinion classification
                of student feedback in teaching evaluation systems,
                presented at the 14th Phayao Research Conference.
            </p>
        </div>
    </section>


    <!-- EDUCATION -->
    <section id="education" class="py-20 px-6 bg-gray-50">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title">Education</h2>

            <div class="space-y-6">
                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        King Mongkut's University of Technology North Bangkok
                    </h3>
                    <p class="text-gray-700">
                        Bachelor's Degree (2024) — GPA 3.35 (Second Class Honors)
                    </p>
                </div>

                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        Wang Klaikangwon Vocational College
                    </h3>
                    <p class="text-gray-700">
                        Electronics Engineering
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="tech-skill" class="py-20 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title">Technical Skills</h2>
            <div class="flex flex-wrap gap-3">
                <span class="skill-pill">Vue.js</span>
                <span class="skill-pill">Firebase</span>
                <span class="skill-pill">Python</span>
                <span class="skill-pill">R</span>
                <span class="skill-pill">SQL</span>
                <span class="skill-pill">Power Platform</span>
                <span class="skill-pill">MEAN Stack</span>
                <span class="skill-pill">Flutter</span>
                <span class="skill-pill">React</span>
            </div>
        </div>
    </section>

    <section id="soft-skill" class="py-20 px-6 bg-gray-50">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title">Soft Skills</h2>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
                <li>Analytical thinking & problem solving</li>
                <li>Clear communication with stakeholders</li>
                <li>User-centered mindset</li>
                <li>Adaptability and fast learning</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import CertificateCarousel from './Cert.vue'

const showCarousel = ref(false)

import MapExperience from './MapExperience.vue'
import TimelineExperience from './TimelineExperience.vue'

// ===== MAP (ยัง static ไปก่อน) =====
const mapExperiences = [
    {
        id: 1,
        title: 'Full-stack Developer',
        company: 'Worldmed Center',
        location: 'Phi Phi Island',
        lat: 7.7407,
        lng: 98.7784,
        period: 'Nov 2025 — Present'
    },
    {
        id: 2,
        title: 'Data Scientist',
        company: 'Chulalongkorn Hospital',
        location: 'Bangkok',
        lat: 13.7367,
        lng: 100.5330,
        period: 'Apr 2025 — Oct 2025'
    },
    {
        id: 3,
        title: 'Business Analyst (Co-op)',
        company: 'Sahaviriya Steel Industries',
        location: 'Prachuap Khiri Khan',
        lat: 11.8120,
        lng: 99.7976,
        period: 'Jun 2024 — Mar 2025'
    }
]

// ===== FROM DATABASE =====
const allExperiences = ref([])
const activeExperience = ref(mapExperiences[0])

let unsubscribe = null
let observer = null

// 🔥 REALTIME FETCH
onMounted(() => {
    const q = query(
        collection(db, 'experience')
    )

    unsubscribe = onSnapshot(q, snap => {
        allExperiences.value = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    })

    // ===== MAP SCROLL OBSERVER =====
    const sections = document.querySelectorAll('.experience-section')

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = Number(entry.target.dataset.id)
                const match = mapExperiences.find(e => e.id === id)
                if (match) activeExperience.value = match
            }
        })
    }, { threshold: 0.3 })

    sections.forEach(section => observer.observe(section))
})

const showModal = ref(false)

const closeModal = () => {
    showModal.value = false
}

const handleEsc = (e) => {
    if (e.key === 'Escape') closeModal()
}

onMounted(() => {
    window.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
    if (unsubscribe) unsubscribe()
    if (observer) observer.disconnect()
})
</script>
<style scoped>
.more-btn {
    border: 1px solid gainsboro;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: white;
    color: #374151;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.more-btn:hover {
    background-color: #8ab1ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>