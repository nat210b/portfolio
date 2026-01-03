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
                
                <!-- Project 1: Clinic ERP -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100">
                    <!-- Icon -->
                    <div class="mb-6 flex justify-center">
                        <div class="p-4 bg-blue-50 rounded-full">
                            <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">
                        Clinic ERP System
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                        Developed a comprehensive ERP system for small medical clinics to streamline patient management, and billing operations.
                    </p>

                    <!-- Tech Stack Tags -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Vue.js</span>
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Node.js</span>
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Firebase</span>
                    </div>

                    <!-- View Project Button -->
                    <!-- <div class="mt-6 text-center">
                        <button class="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center justify-center mx-auto gap-2 hover:gap-3 transition-all">
                            View Details
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div> -->
                </div>

                <!-- Project 2: IT Service Chatbot -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100">
                    <!-- Icon -->
                    <div class="mb-6 flex justify-center">
                        <div class="p-4 bg-green-50 rounded-full">
                            <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">
                        IT Service Chatbot
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                        Built an intelligent chatbot for IT service desk to provide automated responses and troubleshoot common technical issues for users.
                    </p>

                    <!-- Tech Stack Tags -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">Power Platform</span>
                        <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">AD Manger API</span>
                    </div>

                    <!-- View Project Button -->
                    <!-- <div class="mt-6 text-center">
                        <button class="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center justify-center mx-auto gap-2 hover:gap-3 transition-all">
                            View Details
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div> -->
                </div>

                <!-- Project 3: Voice Classification AI -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100">
                    <!-- Icon -->
                    <div class="mb-6 flex justify-center">
                        <div class="p-4 bg-purple-50 rounded-full">
                            <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">
                        Voice Classification AI
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                        Developed a deep learning model to classify Parkinson's disease patients through vowel sound analysis using advanced neural networks.
                    </p>

                    <!-- Tech Stack Tags -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">Python</span>
                        <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">TensorFlow</span>
                        <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">Deep Learning</span>
                    </div>

                    <!-- View Project Button -->
                    <!-- <div class="mt-6 text-center">
                        <button class="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center justify-center mx-auto gap-2 hover:gap-3 transition-all">
                            View Details
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div> -->
                </div>

                <!-- Project 4: GitHub Portfolio -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100">
                    <!-- Icon -->
                    <div class="mb-6 flex justify-center">
                        <div class="p-4 bg-gray-800 rounded-full">
                            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
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
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">JavaScript</span>
                    </div>

                    <!-- GitHub Link Button -->
                    <div class="mt-6 text-center">
                        <a href="https://github.com/nat210b" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 font-semibold text-sm hover:gap-3 transition-all">
                            Visit GitHub
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
}
</script>