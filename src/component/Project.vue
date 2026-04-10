<template>
    <div>
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            </div>

            <!-- Projects Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <projectCard v-for="project in projects.sort((a, b) => a.id - b.id)" :key="project.id"
                    :title="project.title" :description="project.description" :techStack="project.techStack"
                    :projectIcon="project.projectIcon" :iconColor="project.iconColor" :projectLink="project.projectLink"
                    :isClickable="project.isClickable !== false" />

                <!-- Project 4: GitHub Portfolio -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100">
                    <!-- Icon -->
                    <div class="mb-6 flex justify-center">
                        <div class="p-4 bg-gray-800 rounded-full">
                            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">
                        GitHub
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                        Explore my open-source projects, code repositories.
                    </p>

                    <!-- Tech Stack Tags -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Vue.js</span>
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Python</span>
                        <span
                            class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">JavaScript</span>
                    </div>

                    <!-- GitHub Link Button -->
                    <div class="mt-6 text-center">
                        <a href="https://github.com/nat210b" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 font-semibold text-sm hover:gap-3 transition-all">
                            Visit GitHub
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <!-- Side Hustle Section -->
            <div id='sideHustle' class="mt-24 mb-16">
                <!-- Section Header -->
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-white mb-4">Side Hustle</h2>
                    <div class="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                </div>

                <!-- Side Hustle Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <projectCard v-for="hustle in sideHustle" :key="hustle.id" :title="hustle.title"
                        :description="hustle.description" :techStack="hustle.techStack"
                        :projectIcon="hustle.projectIcon" :iconColor="hustle.iconColor"
                        :projectLink="hustle.projectLink" :isClickable="hustle.isClickable !== false" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import projectCard from './projectCard.vue'

export default {
    name: 'Project',
    components: {
        projectCard
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Daily Report System',
                    description: 'Developed a daily reporting and tracking web application that reduces manual logging time from 15 to 5 minutes. The system integrates Kanban and Gantt chart planners, alongside a managerial dashboard for tracking daily operations, issues, and resolutions.',
                    techStack: ['Vue.js', 'Node.js', 'Firebase'],
                    projectIcon: 'fa-solid fa-calendar-check',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#4F46E5',
                    isClickable: false
                },
                {
                    id: 2,
                    title: 'Clinic ERP System',
                    description: 'Enhanced a clinic ERP system with microservices to streamline patient management, registration, and checkups, featuring automated document generation for prescriptions, medical certificates, and triage forms.',
                    techStack: ['Vue.js', 'vite', 'Node.js', 'Firebase'],
                    projectIcon: 'fa-solid fa-hospital',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#0ea5e9',
                    isClickable: false
                },
                {
                    id: 3,
                    title: 'IT Service Chatbot',
                    description: 'Built an intelligent chatbot for IT service desk to provide automated responses and troubleshoot common technical issues for users.',
                    techStack: ['Power Platform', 'AD Manger API', 'Power agent'],
                    projectIcon: 'fa-solid fa-robot',
                    projectLink: 'https://github.com/nat210b/IT-Service-Chatbot',
                    iconColor: '#10b981',
                    isClickable: false
                },
                {
                    id: 4,
                    title: 'Disciplinary Action System',
                    description: 'Developed a paperless Disciplinary Action system for an HR department as a freelance project, featuring automated workflows, an intuitive UX/UI, and a tracking dashboard to significantly reduce manual reporting time.',
                    techStack: ['Power Platform', 'SharePoint'],
                    projectIcon: 'fa-solid fa-user-tie',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#f97316',
                    isClickable: false
                },
                {
                    id: 5,
                    title: 'Voice Classification AI',
                    description: 'Developed a deep learning model to classify Parkinson\'s disease patients through vowel sound analysis using advanced neural networks.',
                    techStack: ['Python', 'TensorFlow', 'Deep Learning'],
                    projectIcon: 'fa-solid fa-microphone',
                    projectLink: 'https://github.com/nat210b/Voice-Classification-AI',
                    iconColor: '#8b5cf6',
                    isClickable: false
                },
            ],
            sideHustle: [
                {
                    id: 1,
                    title: 'PalletX',
                    description: 'Developed a pallet box management system to optimize spatial configurations, maximizing efficiency and space-saving across warehouse and logistics operations.',
                    techStack: ['React.js', 'CSS'],
                    projectIcon: 'fa-solid fa-pallet',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#4F46E5',
                    isClickable: false
                },
                {
                    id: 2,
                    title: 'What the Word Quiz',
                    description: 'Developed an interactive vocabulary quiz game designed to help users strengthen their language skills and prepare for the TOEIC test.',
                    techStack: ['React.js', 'vite', 'Tailwind CSS', 'Supabase'],
                    projectIcon: 'fa-solid fa-book',
                    projectLink: 'https://what-the-word101.vercel.app/',
                    iconColor: '#f59e0b'
                },
            ]
        }
    }
}
</script>