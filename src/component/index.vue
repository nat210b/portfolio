<template>
    <section id="home"
        class="min-h-screen flex flex-col items-center justify-center bg-brand-navy text-white text-center px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Nat <span class="wave-hand">👋</span>
        </h1>

        <p class="text-lg md:text-xl max-w-2xl text-slate-200 leading-relaxed">
            Did you know? If you type my name <b>'แนท'</b> in Thai using an English keyboard, you get <b>'COM'</b>.
            I accidentally discovered this when I forgot to switch languages and it felt like a sign that I was truly
            born for this.
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
        <div v-if="!loadingExperiences" class="flex flex-col md:flex-row bg-white p-3 shadow-sm rounded-xl">
            <TimelineExperience :experiences="allExperiences" @hover="activeExperience = $event" />
            <MapExperience :activeExperience="activeExperience" />
        </div>
        <div v-else class="flex justify-center items-center py-32 bg-white">
            <div class="w-12 h-12 border-4 border-t-transparent border-[#0f172a] rounded-full animate-spin"></div>
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

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Skills & Languages</h2>
                <div class="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <!-- 3-Column Main Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <!-- ── COL 1: TECHNICAL SKILLS ── -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <i class="fa-solid fa-code text-white text-sm"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800">Technical Skills</h3>
                    </div>
                    <!-- compact 3-col chip grid, Power Platform first -->
                    <div class="grid grid-cols-3 gap-2">
                        <!-- Power Platform -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-purple-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-microsoft text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Power
                                Platform</span>
                        </div>
                        <!-- Vue.js -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-green-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-vuejs text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Vue.js</span>
                        </div>
                        <!-- React -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-blue-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-react text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">React</span>
                        </div>
                        <!-- Angular -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-red-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-angular text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Angular</span>
                        </div>
                        <!-- Flutter -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-cyan-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-200">
                                <i class="fa-solid fa-mobile-screen text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Flutter</span>
                        </div>
                        <!-- Python -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-yellow-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-python text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Python</span>
                        </div>
                        <!-- Node.js -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-green-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-node-js text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Node.js</span>
                        </div>
                        <!-- Firebase -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-orange-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                                <i class="fa-solid fa-fire text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Firebase</span>
                        </div>
                        <!-- MongoDB -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-emerald-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                                <i class="fa-solid fa-leaf text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">MongoDB</span>
                        </div>
                        <!-- SQL -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-indigo-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                                <i class="fa-solid fa-database text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">SQL</span>
                        </div>
                        <!-- R Language -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-blue-300 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
                                <span class="text-sm font-bold">R</span>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">R Lang</span>
                        </div>
                        <!-- Git -->
                        <div
                            class="skill-chip group flex flex-col items-center gap-1.5 bg-white border border-slate-100 rounded-xl p-3 shadow-sm cursor-default hover:border-gray-400 hover:shadow-md transition-all duration-200">
                            <div
                                class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-colors duration-200">
                                <i class="fa-brands fa-git-alt text-base"></i>
                            </div>
                            <span class="text-xs font-semibold text-slate-600 text-center leading-tight">Git</span>
                        </div>
                    </div>
                </div>

                <!-- ── COL 2: SOFT SKILLS ── -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                            <i class="fa-solid fa-brain text-white text-sm"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800">Soft Skills</h3>
                    </div>
                    <div class="flex flex-col gap-2">
                        <!-- Eager to Learn -->
                        <div
                            class="group bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 transition-all duration-200 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5">
                            <div
                                class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-book-open text-sm"></i>
                            </div>
                            <span
                                class="text-sm font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">Eager
                                to Learn</span>
                        </div>
                        <!-- Teamwork -->
                        <div
                            class="group bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 transition-all duration-200 hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5">
                            <div
                                class="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-sm"></i>
                            </div>
                            <span
                                class="text-sm font-semibold text-slate-700 group-hover:text-teal-600 transition-colors">Teamwork
                                & Communication</span>
                        </div>
                        <!-- Problem Solving -->
                        <div
                            class="group bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 transition-all duration-200 hover:border-rose-300 hover:shadow-md hover:-translate-y-0.5">
                            <div
                                class="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-puzzle-piece text-sm"></i>
                            </div>
                            <span
                                class="text-sm font-semibold text-slate-700 group-hover:text-rose-600 transition-colors">Problem
                                Solving</span>
                        </div>
                        <!-- High Responsibility -->
                        <div
                            class="group bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 transition-all duration-200 hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5">
                            <div
                                class="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-list-check text-sm"></i>
                            </div>
                            <span
                                class="text-sm font-semibold text-slate-700 group-hover:text-amber-600 transition-colors">High
                                Responsibility</span>
                        </div>
                        <!-- Work Under Pressure -->
                        <div
                            class="group bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 transition-all duration-200 hover:border-red-300 hover:shadow-md hover:-translate-y-0.5">
                            <div
                                class="w-8 h-8 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-gauge-high text-sm"></i>
                            </div>
                            <span
                                class="text-sm font-semibold text-slate-700 group-hover:text-red-600 transition-colors">Work
                                Under Pressure</span>
                        </div>
                        <!-- Punctual & Reliable -->
                        <div
                            class="group bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 transition-all duration-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5">
                            <div
                                class="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-clock text-sm"></i>
                            </div>
                            <span
                                class="text-sm font-semibold text-slate-700 group-hover:text-violet-600 transition-colors">Punctual
                                & Reliable</span>
                        </div>
                    </div>
                </div>

                <!-- ── COL 3: LANGUAGES ── -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                            <i class="fa-solid fa-globe text-white text-sm"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800">Languages</h3>
                    </div>
                    <div class="flex flex-col gap-3">
                        <!-- Thai -->
                        <div
                            class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 group hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-xl">🇹🇭</span>
                                    <span class="text-sm font-bold text-slate-800">Thai</span>
                                </div>
                                <span
                                    class="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Native</span>
                            </div>
                            <div class="w-full bg-slate-100 rounded-full h-1.5">
                                <div class="bg-blue-500 h-1.5 rounded-full" style="width: 100%"></div>
                            </div>
                        </div>
                        <!-- English -->
                        <div
                            class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 group hover:border-indigo-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-xl">🇬🇧</span>
                                    <span class="text-sm font-bold text-slate-800">English</span>
                                </div>
                                <span
                                    class="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">Work
                                    Proficiency</span>
                            </div>
                            <div class="w-full bg-slate-100 rounded-full h-1.5 mb-3">
                                <div class="bg-indigo-500 h-1.5 rounded-full" style="width: 80%"></div>
                            </div>
                            <!-- Badges row -->
                            <div class="flex gap-2">
                                <div
                                    class="flex items-center gap-1.5 bg-indigo-50 rounded-lg px-3 py-2 border border-indigo-100 flex-1">
                                    <i class="fa-solid fa-certificate text-indigo-500 text-sm"></i>
                                    <span
                                        class="text-xs text-indigo-500 font-semibold uppercase tracking-wide">TOEIC</span>
                                    <span class="text-base font-extrabold text-indigo-700 ml-auto">885</span>
                                </div>
                                <div
                                    class="flex items-center gap-1.5 bg-sky-50 rounded-lg px-3 py-2 border border-sky-100 flex-1">
                                    <i class="fa-solid fa-graduation-cap text-sky-500 text-sm"></i>
                                    <span class="text-xs text-sky-500 font-semibold uppercase tracking-wide">CEFR</span>
                                    <span class="text-base font-extrabold text-sky-700 ml-auto">B1.1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <Footer />

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import CertificateCarousel from './Cert.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'

const showCarousel = ref(false)

import MapExperience from './MapExperience.vue'
import TimelineExperience from './TimelineExperience.vue'
import Project from './Project.vue'

// ===== FROM DATABASE =====
const allExperiences = ref([])
const activeExperience = ref(null)
const loadingExperiences = ref(true)

let unsubscribe = null

// 🔥 REALTIME FETCH
onMounted(() => {
    const q = query(
        collection(db, 'experience')
    )

    unsubscribe = onSnapshot(q, snap => {
        const exps = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        allExperiences.value = exps

        // Initialize the map with the present job (or the most recent one)
        const presentJob = exps.find(e => e.isNow)
        if (presentJob) {
            activeExperience.value = presentJob
        } else if (exps.length > 0) {
            activeExperience.value = exps.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0]
        }
        loadingExperiences.value = false
    })

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

.wave-hand {
    display: inline-block;
    transform-origin: 70% 70%;
    animation: wave 2s infinite;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(14deg);
    }

    20% {
        transform: rotate(-8deg);
    }

    30% {
        transform: rotate(14deg);
    }

    40% {
        transform: rotate(-4deg);
    }

    50% {
        transform: rotate(10deg);
    }

    60% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>