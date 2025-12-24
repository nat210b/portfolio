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

    <!-- MAP JOURNEY - STICKY SECTION -->
    <section id="journey" class="relative bg-brand-navy">
        <div class="sticky top-0 h-screen flex items-center justify-center">
            <div class="max-w-6xl mx-auto w-full px-6">
                <h2 class="text-3xl font-bold text-white mb-8 text-center">
                    Career Journey Map
                </h2>
                <MapExperience :activeExperience="activeExperience" />
            </div>
        </div>

        <!-- Scroll sections for each experience -->
        <div class="relative">
            <div v-for="exp in experiences" :key="exp.id" class="experience-section h-screen" :data-id="exp.id">
                <!-- Invisible spacer to trigger scroll -->
            </div>
        </div>
    </section>

    <!-- TIMELINE SECTION -->
    <section id="timeline" class="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-brand-navy mb-12 text-center">
                Career Timeline
            </h2>
            <TimelineExperience :experiences="allExperiences" />
        </div>
    </section>

    <section id="experience" class="py-20 px-6 bg-gray-50">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title">Work Experience</h2>

            <div class="space-y-10">
                <!-- Experience 1 -->
                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        Full-stack Developer — Worldmed Center, Phi Phi Island
                    </h3>
                    <p class="text-gray-600 mb-2">
                        Nov 2025 — Present
                    </p>
                    <ul class="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Developed ERP web applications for small clinics</li>
                        <li>Built frontend using Vue.js and integrated backend with Firebase</li>
                        <li>Designed features to support daily clinic operations and data management</li>
                    </ul>
                </div>

                <!-- Experience 2 -->
                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        Data Scientist — Parkinson's Disease Excellence Center, Chulalongkorn Hospital
                    </h3>
                    <p class="text-gray-600 mb-2">
                        Apr 2025 — Oct 2025 (6 months)
                    </p>
                    <ul class="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Worked with healthcare and time-series patient data</li>
                        <li>Performed data analysis to support medical research</li>
                        <li>Collaborated with medical professionals and researchers</li>
                    </ul>
                </div>

                <!-- Experience 3 -->
                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        Business Analyst (Co-operative Education) — Sahaviriya Steel Industries
                    </h3>
                    <p class="text-gray-600 mb-2">
                        Jun 2024 — Mar 2025 (10 months)
                    </p>
                    <ul class="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Developed internal enterprise applications using Microsoft Power Platform</li>
                        <li>Gathered and analyzed user requirements</li>
                        <li>Applied Design Thinking principles in system design</li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        Cultural Exchange Program — Walt Disney World, Orlando, Florida
                    </h3>
                    <p class="text-gray-600 mb-2">
                        Mar 2024 — Jun 2024 (4 months)
                    </p>
                    <p class="text-gray-700">
                        Participated in an international cultural exchange program, gaining
                        cross-cultural communication and professional work experience.
                    </p>
                </div>

                <div>
                    <h3 class="font-semibold text-lg text-brand-navy">
                        Intern Full-stack Developer — Be1 Digital Co., Ltd.
                    </h3>
                    <p class="text-gray-600 mb-2">
                        Summer Internship (Year 3)
                    </p>
                    <ul class="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Developed a job-search web application using MEAN Stack</li>
                        <li>Created and executed test cases based on test plans</li>
                        <li>Performed application testing and bug tracking</li>
                    </ul>
                </div>
            </div>
        </div>
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
import MapExperience from './MapExperience.vue';
import TimelineExperience from './TimelineExperience.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const experiences = [
    {
        id: 1,
        title: 'Full-stack Developer',
        company: 'Worldmed Center',
        location: 'Phi Phi Island',
        lat: 7.7407,
        lng: 98.7784,
        period: 'Nov 2025 — Present',
        country: 'Thailand'
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

// All experiences for timeline (including those without map coordinates)
const allExperiences = [
    {
        id: 1,
        title: 'Full-stack Developer',
        company: 'Worldmed Center',
        location: 'Phi Phi Island',
        period: 'Nov 2025 — Present',
        details: [
            'Developed ERP web applications for small clinics',
            'Built frontend using Vue.js and integrated backend with Firebase',
            'Designed features to support daily clinic operations and data management'
        ]
    },
    {
        id: 2,
        title: 'Data Scientist',
        company: "Parkinson's Disease Excellence Center, Chulalongkorn Hospital",
        location: 'Bangkok',
        period: 'Apr 2025 — Oct 2025',
        details: [
            'Worked with healthcare and time-series patient data',
            'Performed data analysis to support medical research',
            'Collaborated with medical professionals and researchers'
        ]
    },
    {
        id: 3,
        title: 'Business Analyst (Co-operative Education)',
        company: 'Sahaviriya Steel Industries',
        location: 'Prachuap Khiri Khan',
        period: 'Jun 2024 — Mar 2025',
        details: [
            'Developed internal enterprise applications using Microsoft Power Platform',
            'Gathered and analyzed user requirements',
            'Applied Design Thinking principles in system design'
        ]
    },
    {
        id: 4,
        title: 'Cultural Exchange Program',
        company: 'Walt Disney World',
        location: 'Orlando, Florida',
        period: 'Mar 2024 — Jun 2024',
        details: [
            'Participated in an international cultural exchange program',
            'Gained cross-cultural communication and professional work experience'
        ]
    },
    {
        id: 5,
        title: 'Intern Full-stack Developer',
        company: 'Be1 Digital Co., Ltd.',
        location: 'Bangkok',
        period: 'Summer Internship (Year 3)',
        details: [
            'Developed a job-search web application using MEAN Stack',
            'Created and executed test cases based on test plans',
            'Performed application testing and bug tracking'
        ]
    }
]
const activeExperience = ref(experiences[0])

let observer = null

onMounted(() => {
    const sections = document.querySelectorAll('.experience-section')

    observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = Number(entry.target.dataset.id)
                    const exp = experiences.find(e => e.id === id)
                    if (exp) {
                        activeExperience.value = exp
                    }
                }
            })
        },
        {
            threshold: 0.3
        }
    )

    sections.forEach(section => observer.observe(section))
})

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>