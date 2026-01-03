<template>
    <div class="min-h-screen bg-gray-50 pt-10">
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center h-screen bg-brand-navy">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p class="text-white font-mono text-sm">Loading experience...</p>
            </div>
        </div>

        <!-- Job Detail -->
        <div v-else-if="job">
            <!-- Hero Section with Navy Background -->
            <div class="bg-brand-navy text-white">
                <div class="container mx-auto px-6 py-12">
                    <!-- Back Button -->
                    <router-link to="/" class="inline-flex items-center gap-2 text-brand-teal hover:text-white transition-colors mb-8 group">
                        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        <span class="text-sm font-medium">Back to Portfolio</span>
                    </router-link>

                    <div class="grid lg:grid-cols-3 gap-8 items-start">
                        <!-- Company Logo -->
                        <div class="lg:col-span-1">
                            <div v-if="hasLogo(job.company)" class="bg-white p-8 rounded-lg">
                                <img v-if="job.company == 'WORLDMED CENTER'" 
                                    src="../assets/worldmed.png"
                                    class="w-full h-32 object-contain" 
                                    @error="handleLogoError" 
                                    alt="Company Logo" />
                                <img v-else-if="job.company == 'Walt Disney world'" 
                                    src="../assets/Walt-Disney-World-Logo.png"
                                    class="w-full h-32 object-contain" 
                                    @error="handleLogoError" 
                                    alt="Company Logo" />
                                <img v-else-if="job.company.includes('KCMH')" 
                                    src="../assets/KCMH.jpeg" 
                                    class="w-full h-32 object-contain"
                                    @error="handleLogoError" 
                                    alt="Company Logo" />
                                <img v-else-if="job.company.includes('SSI')" 
                                    src="../assets/ssi.png" 
                                    class="w-full h-32 object-contain"
                                    @error="handleLogoError" 
                                    alt="Company Logo" />
                                <img v-else-if="job.company == 'BE 1 Digital Co. ltd'" 
                                    src="../assets/be1.png"
                                    class="w-full h-32 object-contain" 
                                    @error="handleLogoError" 
                                    alt="Company Logo" />
                            </div>
                        </div>

                        <!-- Title & Info -->
                        <div class="lg:col-span-2">
                            <div class="flex items-start justify-between mb-6">
                                <div>
                                    <h1 class="text-4xl md:text-5xl font-bold mb-3">{{ job.title }}</h1>
                                    <p class="text-2xl text-brand-teal font-semibold mb-4">{{ job.company }}</p>
                                </div>
                                <!-- Status Badge -->
                                <div v-if="!job.endDate" class="bg-brand-teal px-4 py-2 rounded-full">
                                    <span class="text-sm font-bold text-brand-navy uppercase">Current</span>
                                </div>
                            </div>

                            <!-- Date & Location -->
                            <div class="flex flex-wrap gap-6 text-gray-300 mb-6">
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                    <span>
                                        {{ formatDate(job.startDate) }} - 
                                        <span v-if="job.endDate">{{ formatDate(job.endDate) }}</span>
                                        <span v-else class="text-brand-teal font-semibold">Present</span>
                                    </span>
                                </div>
                                <div v-if="job.location" class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span>{{ job.location }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Teal Accent Bar -->
                <div class="h-2 bg-brand-teal"></div>
            </div>

            <!-- Main Content Section -->
            <div class="container mx-auto px-6 py-12">
                <div class="grid lg:grid-cols-3 gap-8">
                    <!-- Sidebar - Skills -->
                    <div class="lg:col-span-1 space-y-6">
                        <!-- Technical Skills -->
                        <div v-if="job.technicalSkills?.length" class="bg-white rounded-lg p-6 border-l-4 border-brand-teal shadow-sm">
                            <h3 class="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                </svg>
                                Technical Stack
                            </h3>
                            <div class="space-y-2">
                                <div v-for="(skill, i) in job.technicalSkills" 
                                    :key="i"
                                    class="flex items-center gap-2 text-gray-700">
                                    <div class="w-1.5 h-1.5 bg-brand-teal rounded-full"></div>
                                    <span class="text-sm">{{ skill }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Soft Skills -->
                        <div v-if="job.softSkills?.length" class="bg-white rounded-lg p-6 border-l-4 border-brand-red shadow-sm">
                            <h3 class="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                Soft Skills
                            </h3>
                            <div class="space-y-2">
                                <div v-for="(skill, i) in job.softSkills" 
                                    :key="i"
                                    class="flex items-center gap-2 text-gray-700">
                                    <div class="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                                    <span class="text-sm">{{ skill }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Main Content - Achievements -->
                    <div class="lg:col-span-2">
                        <div class="bg-white rounded-lg p-8 shadow-sm">
                            <h2 class="text-2xl font-bold text-brand-navy mb-6 pb-4 border-b-2 border-brand-teal">
                                Key Achievements & Responsibilities
                            </h2>

                            <div v-if="job.details?.length" class="space-y-4 ">
                                <div v-for="(detail, i) in job.details" 
                                    :key="i"
                                    class="group flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-brand-teal">
                                    <!-- Number Badge -->
                                    <div class="flex-shrink-0 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-brand-teal transition-colors">
                                        {{ i + 1 }}
                                    </div>
                                    
                                    <!-- Content -->
                                    <p class="text-gray-700 leading-relaxed flex-1">{{ detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Not Found State -->
        <div v-else class="flex flex-col justify-center items-center h-screen bg-brand-navy text-white">
            <svg class="w-24 h-24 text-brand-teal mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-xl font-semibold">Experience Not Found</p>
            <router-link to="/" class="mt-4 text-brand-teal hover:text-white transition-colors">
                Return to Portfolio
            </router-link>
        </div>
    </div>
</template>

<script>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export default {
    name: 'JobDetail',

    data() {
        return {
            job: null,
            loading: true,
            logoError: false
        }
    },

    async mounted() {
        const id = this.$route.params.id
        if (!id) return (this.loading = false)

        try {
            const snap = await getDoc(doc(db, 'experience', id))
            if (snap.exists()) this.job = snap.data()
        } catch (e) {
            console.error('Error:', e)
        } finally {
            this.loading = false
        }
    },

    methods: {
        hasLogo(company) {
            const companies = ['WORLDMED CENTER', 'Walt Disney world', 'KCMH', 'SSI', 'BE 1 Digital Co. ltd']
            return companies.some(c => company?.includes(c))
        },

        handleLogoError(e) {
            e.target.style.display = 'none'
        },

        formatDate(d) {
            if (!d) return '—'
            const date = d.toDate ? d.toDate() : new Date(d)
            return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
        },

        calculateDuration(startDate, endDate) {
            if (!startDate) return '—'
            
            const start = startDate.toDate ? startDate.toDate() : new Date(startDate)
            const end = endDate ? (endDate.toDate ? endDate.toDate() : new Date(endDate)) : new Date()
            
            const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
            const years = Math.floor(months / 12)
            const remainingMonths = months % 12
            
            if (years > 0 && remainingMonths > 0) {
                return `${years}y ${remainingMonths}m`
            } else if (years > 0) {
                return `${years}y`
            } else {
                return `${remainingMonths}m`
            }
        }
    }
}
</script>

<style scoped>
/* Smooth transitions */
* {
    transition-property: color, background-color, border-color;
    transition-duration: 200ms;
}
</style>