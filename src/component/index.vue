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
        <Profile />
    </section>
    <section id="projects" class="py-20 px-6 bg-brand-navy  from-gray-50 to-white">
        <Project />
    </section>

    <section id="experiences" class="py-20 px-6 bg-white">
        <h2 class="text-4xl text-center font-bold text-brand-navy">Experiences</h2>
        <div class="flex bg-white p-3">
            <TimelineExperience :experiences="allExperiences" @hover="activeExperience = $event" />
            <MapExperience :activeExperience="activeExperience" />
        </div>
    </section>
    <section id="certificate" class="py-20 px-6 bg-gray-50">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-4xl text-center font-bold text-brand-navy mb-5">Certificates</h2>
        </div>
        <CertificateCarousel />
    </section>

    <section id="tech-skill" class="py-24 px-6 bg-white relative overflow-hidden">
        <!-- Decorative Background Elements -->
        <div
            class="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60">
        </div>
        <div
            class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="text-center mb-16">
                <span class="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Expertise</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Technical Skills</h2>
            </div>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                <!-- Frontend / Mobile -->
                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        <i class="fa-brands fa-vuejs text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">Vue.js</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-brands fa-react text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">React</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <i class="fa-brands fa-angular text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">Angular</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-mobile-screen text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">Flutter</span>
                </div>

                <!-- Backend / Data -->
                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-brands fa-python text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">Python</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-fire text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">Firebase</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-leaf text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">MongoDB</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-database text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">SQL</span>
                </div>

                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                        <span class="text-xl font-bold">R</span>
                    </div>
                    <span class="font-semibold text-slate-700">R Language</span>
                </div>

                <!-- Tools -->
                <div
                    class="skill-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default">
                    <div
                        class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                        <i class="fa-brands fa-microsoft text-2xl"></i>
                    </div>
                    <span class="font-semibold text-slate-700">Power Platform</span>
                </div>

            </div>
        </div>
    </section>

    <section id="soft-skill" class="py-24 px-6 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16">
                <span class="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Personal Attributes</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Soft Skills</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                <!-- Fluent in Thai & English -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:border-indigo-200 transition-colors">
                    <div
                        class="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-language text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 mb-2">Fluent in Thai & English</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Proficient in both languages, enabling effective communication in diverse, multicultural
                            environments.
                        </p>
                    </div>
                </div>

                <!-- Teamwork & Communication -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:border-indigo-200 transition-colors">
                    <div
                        class="w-14 h-14 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-users text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 mb-2">Teamwork & Communication</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Collaborative team player with strong interpersonal skills, fostering open dialogue and
                            synergy.
                        </p>
                    </div>
                </div>

                <!-- Problem Solving -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:border-indigo-200 transition-colors">
                    <div
                        class="w-14 h-14 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-puzzle-piece text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 mb-2">Problem Solving</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Analytical mindset focused on identifying root causes and implementing effective, logical
                            solutions.
                        </p>
                    </div>
                </div>

                <!-- High Responsibility -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:border-indigo-200 transition-colors">
                    <div
                        class="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-list-check text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 mb-2">High Responsibility</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Dedicated and reliable, taking full ownership of tasks and ensuring high-quality
                            deliverables.
                        </p>
                    </div>
                </div>

                <!-- Ability to Work Under Pressure -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:border-indigo-200 transition-colors md:col-span-2">
                    <div
                        class="w-14 h-14 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-gauge-high text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 mb-2">Ability to Work Under Pressure</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Resilient and focused, maintaining performance and clarity even in high-stakes or
                            tight-deadline situations.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import CertificateCarousel from './Cert.vue'
import Profile from './Profile.vue'

const showCarousel = ref(false)

import MapExperience from './MapExperience.vue'
import TimelineExperience from './TimelineExperience.vue'
import Project from './Project.vue'

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