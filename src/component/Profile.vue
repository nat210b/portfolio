<template>

    <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 items-center">

            <!-- Profile Image -->
            <div class="flex justify-center md:justify-start">
                <div class="relative">
                    <div class="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-red-600 p-1">
                        <div
                            class="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <!-- รูปโปรไฟล์ -->
                            <img src="../assets/profile.jpg" alt="Profile Image" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Profile Info & Education -->
            <div class="md:col-span-2 text-center md:text-left">
                <!-- Name & Title -->
                <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ name }}</h1>
                <p class="text-xl text-blue-600 font-semibold mb-4">{{ jobTitle }}</p>

                <!-- Brief Description -->
                <p class="text-gray-600 leading-relaxed mb-4">
                    {{ description }}
                </p>

                <!-- Education -->
                <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg mb-4" v-for="ed in education" :key="ed">
                    <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <div>
                        <p class="font-semibold text-gray-900">{{ ed.degree }}</p>
                        <p class="text-sm text-gray-600">{{ ed.university }} | {{ ed.year }}</p>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div class="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="text-sm font-medium text-gray-700">{{ stats.experience }}</span>
                    </div>
                    <div class="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-sm font-medium text-gray-700">{{ stats.projects }}</span>
                    </div>
                </div>

                <!-- Contact Buttons -->
                <div class="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                    <a v-if="contact.email" :href="`mailto:${contact.email}`"
                        class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Me
                    </a>

                    <a v-if="contact.github" :href="contact.github" target="_blank" rel="noopener noreferrer"
                        class="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd" />
                        </svg>
                        GitHub
                    </a>

                    <!-- <a v-if="contact.linkedin" :href="contact.linkedin" target="_blank" rel="noopener noreferrer"
                        class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Props with default values
const props = defineProps({
    profileImage: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: 'Wannachol Pinprom'
    },
    jobTitle: {
        type: String,
        default: 'Software Developer'
    },
    description: {
        type: String,
        default: 'Passionate full-stack developer specializing in building modern web applications with Vue.js and Node.js. Experienced in developing ERP systems, AI-powered solutions, and scalable healthcare applications.'
    },
    education: {
        type: Object,
        default: () => ([{
            degree: 'Bachelor of Science in Information Technology',
            university: 'King Mongkut\'s university of Technology North Bangkok',
            year: '2020-2024'
        }, {
            degree: 'Certificate in Electronic Industrial',
            university: 'Wangklaikangwon Industrial and community education college',
            year: '2017-2019'
        }])
    },
    stats: {
        type: Object,
        default: () => ({
            experience: '2 Years Experience',
            projects: '3+ Projects Delivered'
        })
    },
    contact: {
        type: Object,
        default: () => ({
            email: 'Wannachol.pinprom@gmail.com',
            github: 'https://github.com/nat210b',
            // linkedin: 'https://linkedin.com/in/yourprofile'
        })
    }
})
</script>

<style scoped>
/* Custom styles if needed */
</style>