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
                    title: 'Daily Report & Task Planner',
                    description: 'Developed a comprehensive web application for clinic staff to log daily tasks and plan schedules. Integrated Kanban and Gantt charts reduced reporting time from 15 minutes to 5 minutes.',
                    techStack: ['Vue.js', 'Node.js', 'Firebase'],
                    projectIcon: 'fa-solid fa-calendar-check',
                    projectLink: 'https://reportapps-demo.vercel.app',
                    iconColor: '#4F46E5',
                    isClickable: true
                },
                {
                    id: 2,
                    title: 'Clinic ERP & Automated Document',
                    description: 'Enhanced an ERP system with a user-friendly UI for healthcare workflows. Developed a custom web-based printout engine for prescriptions and medical certificates with precise layouts.',
                    techStack: ['Vue.js', 'Vite', 'Node.js', 'Firebase'],
                    projectIcon: 'fa-solid fa-hospital',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#0ea5e9',
                    isClickable: false
                },
                {
                    id: 3,
                    title: 'Self-Service IT Support AI',
                    description: 'Developed an AI Chatbot integrated with ADManager API via Power Automate to automate password resets. Handled 78 tickets in the first month, significantly reducing IT workload.',
                    techStack: ['Power Virtual Agents', 'Dialogflow', 'Power Automate'],
                    projectIcon: 'fa-solid fa-robot',
                    projectLink: 'https://github.com/nat210b/IT-Service-Chatbot',
                    iconColor: '#10b981',
                    isClickable: false
                },
                {
                    id: 4,
                    title: 'Enterprise IT Ticketing System',
                    description: 'Created a secure tracking system for IT cases with audit logs and approval workflows for sensitive tasks. Achieved a 4.93/5 satisfaction rating from over 685 user entries.',
                    techStack: ['Power Apps', 'Power Automate', 'SharePoint'],
                    projectIcon: 'fa-solid fa-ticket-alt',
                    projectLink: 'https://github.com/nat210b/IT-Service-Chatbot',
                    iconColor: '#f59e0b',
                    isClickable: false
                },
                {
                    id: 5,
                    title: 'Automated Intern Payroll System',
                    description: 'Streamlined HR processes by automating intern working hours and wage calculations. Replaced manual data collection with a digital approval flow and CRUD management.',
                    techStack: ['Power Platform', 'SharePoint', 'Power Automate'],
                    projectIcon: 'fa-solid fa-clock',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#ec4899',
                    isClickable: false
                },
                {
                    id: 6,
                    title: 'Safety Reporting',
                    description: 'Replaced paper-based safety reporting with a digitalized system for factory environments. Includes risk alerts, departmental analytics, and automated reporting to reduce workplace accidents.',
                    techStack: ['Power Platform', 'Power Automate', 'Analytics'],
                    projectIcon: 'fa-solid fa-shield-heart',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#ef4444',
                    isClickable: false
                },
                {
                    id: 7,
                    title: 'HR Digital Certificate System',
                    description: 'Digitized the request and issuance of employment and salary certificates. Reduces paper usage and manual processing time through automated document generation.',
                    techStack: ['Power Apps', 'Power Automate', 'SharePoint'],
                    projectIcon: 'fa-solid fa-file-signature',
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#6366f1',
                    isClickable: false
                },
                {
                    id: 8,
                    title: 'Corporate Resource Booking',
                    description: 'Developed a unified booking system for corporate accommodation and vehicle tracking to optimize resource allocation and eliminate manual paperwork across departments.',
                    techStack: ['Power Apps', 'SharePoint', 'Power Automate'],
                    projectIcon: "fa-solid fa-boxes-stacked",
                    projectLink: 'https://github.com/nat210b/Clinic-ERP-System',
                    iconColor: '#14b8a6',
                    isClickable: false
                },
                {
                    id: 9,
                    title: 'Voice Classification AI',
                    description: 'Developed a deep learning model to classify Parkinson\'s disease patients through vowel sound analysis using advanced neural networks.',
                    techStack: ['Python', 'TensorFlow', 'Deep Learning'],
                    projectIcon: 'fa-solid fa-microphone',
                    projectLink: 'https://github.com/nat210b/Voice-Classification-AI',
                    iconColor: '#8b5cf6',
                    isClickable: false
                }
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