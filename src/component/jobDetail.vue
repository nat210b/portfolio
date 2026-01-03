<template>
    <div class="container mx-auto p-6 pt-20">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div class="text-xl">Loading...</div>
        </div>

        <div v-else-if="job" class="flex gap-8">
            <!-- ซ้าย -->
            <div class="w-1/3 space-y-6">
                <!-- Logo -->
                <div class="bg-white rounded-lg shadow-md p-6 flex justify-center items-center">
                    <img v-if="job.company == 'WORLDMED CENTER'" src="../assets/worldmed.png"
                        class="w-32 h-32 object-contain" @error="handleLogoError" />
                    <img v-if="job.company == 'Walt Disney world'" src="../assets/Walt-Disney-World-Logo.png"
                        class="w-32 h-32 object-contain" @error="handleLogoError" />
                    <img v-if="job.company.includes('KCMH')" src="../assets/KCMH.png" class="w-32 h-32 object-contain"
                        @error="handleLogoError" />
                    <img v-if="job.company.includes('SSI')" src="../assets/ssi.png" class="w-32 h-32 object-contain"
                        @error="handleLogoError" />
                    <img v-if="job.company == 'BE 1 Digital Co. ltd'" src="../assets/be1.png"
                        class="w-32 h-32 object-contain" @error="handleLogoError" />
                </div>
                <div class="flex gap-4 border-t">
                    <div v-if="job.location" class="pt-4">
                        <p class="text-sm text-gray-500">Location</p>
                        <p>{{ job.location }}</p>
                    </div>
                    <div v-if="job.technicalSkills?.length" class="pt-4">
                        <p class="text-sm text-gray-500">Technical Skills</p>
                        <ul class="list-disc pl-6">
                            <li v-for="(s, i) in job.technicalSkills" :key="i">{{ s }}</li>
                        </ul>
                    </div>
                    <div v-if="job.softSkills?.length" class="pt-4 ">
                        <p class="text-sm text-gray-500">Soft Skills</p>
                        <ul class="list-disc pl-6">
                            <li v-for="(s, i) in job.softSkills" :key="i">{{ s }}</li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- ขวา -->
            <div class="w-2/3">
                <div class="bg-white rounded-lg shadow-md p-8">
                    <h2 class="text-3xl font-bold mb-6">{{ job.company }}</h2>

                    <p class="text-xl font-semibold mb-4">{{ job.title }}</p>

                    <p class="text-gray-600 mb-6">
                        {{ formatDate(job.startDate) }} →
                        <span v-if="job.endDate">{{ formatDate(job.endDate) }}</span>
                        <span v-else class="text-green-600 font-semibold">Present</span>
                    </p>

                    <div v-if="job.details?.length" class="columns-1 md:columns-2 gap-4 space-y-4 mb-6">
                        <div v-for="(d, i) in job.details" :key="i"
                            class="break-inside-avoid bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <div class="flex gap-3 items-start">
                                <div
                                    class="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-3 h-3">
                                        <path fill-rule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>

                                <p class="text-slate-700 text-sm leading-relaxed">
                                    {{ d }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="flex justify-center items-center h-screen">
            <p class="text-xl text-gray-600">Job not found</p>
        </div>
    </div>
</template>

<script>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import MapExperience from './MapExperience.vue'

export default {
    name: 'JobDetail',

    data() {
        return {
            job: null,
            loading: true,
            logoError: false
        }
    },
    components: {
        MapExperience
    },

    async mounted() {
        const id = this.$route.params.id
        if (!id) return (this.loading = false)

        try {
            const snap = await getDoc(doc(db, 'experience', id))
            if (snap.exists()) this.job = snap.data()
        } catch (e) {
            console.error(e)
        } finally {
            this.loading = false
        }
    },

    methods: {
        handleLogoError(e) {
            e.target.src = this.getDefaultLogo()
        },

        getDefaultLogo() {
            return 'https://via.placeholder.com/128?text=No+Logo'
        },

        formatDate(d) {
            if (!d) return '-'
            const date = d.toDate ? d.toDate() : new Date(d)
            return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
        }
    }
}
</script>

<style scoped>
#map {
    border-radius: 8px;
}

.prose {
    color: #374151;
}
</style>