<template>
    <div class="page">
        <h1>Experience CRUD</h1>

        <!-- LIST -->
        <ul class="list">
            <li v-for="exp in experiences" :key="exp.id" @click="selectExp(exp)"
                :class="{ active: selected?.id === exp.id }">
                {{ exp.title }} — {{ exp.company }}
                <button @click.stop="deleteExp(exp.id)">🗑</button>
            </li>
        </ul>

        <hr />

        <!-- FORM -->
        <form @submit.prevent="save" style="padding-top: 50px;">
            <input v-model="form.title" placeholder="Title" />
            <input v-model="form.company" placeholder="Company" />
            <input v-model="form.location" placeholder="Location" />

            <label>Start Date</label>
            <input type="date" v-model="form.startDate" />

            <label>
                <input type="checkbox" v-model="form.isNow" />
                Present
            </label>

            <input v-if="!form.isNow" type="date" v-model="form.endDate" />

            <label>Job Details (one per line)</label>
            <textarea rows="6" v-model="detailsText" placeholder="One detail per line" />

            <label>Technical Skills (one per line)</label>
            <textarea rows="4" v-model="technicalSkillsText" placeholder="Vue.js&#10;Firebase&#10;Python&#10;React" />

            <label>Soft Skills (one per line)</label>
            <textarea rows="4" v-model="softSkillsText"
                placeholder="Analytical thinking & problem solving&#10;Clear communication with stakeholders&#10;User-centered mindset" />
            <label>Latitude</label>
            <input type="number" step="any" v-model.number="form.lat" placeholder="13.7367" />

            <label>Longitude</label>
            <input type="number" step="any" v-model.number="form.lng" placeholder="100.5330" />


            <div class="actions">
                <button type="submit">
                    {{ form.id ? 'Update' : 'Create' }}
                </button>
                <button type="button" @click="reset">Clear</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
    listenExperiences,
    createExperience,
    updateExperience,
    deleteExperience
} from '@/service/service.js'

const experiences = ref([])
const selected = ref(null)
let unsubscribe = null

const form = ref({
    id: null,
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: null,
    isNow: false,
    lat: null,
    lng: null
})


const detailsText = ref('')
const technicalSkillsText = ref('')
const softSkillsText = ref('')

// REALTIME READ
onMounted(() => {
    unsubscribe = listenExperiences((data) => {
        experiences.value = data
    })
})

onUnmounted(() => {
    if (unsubscribe) unsubscribe()
})

// SELECT
const selectExp = (exp) => {
    selected.value = exp
    form.value = {
        ...exp,
        lat: exp.lat ?? null,
        lng: exp.lng ?? null
    }

    detailsText.value = exp.details?.join('\n') || ''
    technicalSkillsText.value = exp.technicalSkills?.join('\n') || ''
    softSkillsText.value = exp.softSkills?.join('\n') || ''
}


// CREATE / UPDATE
const save = async () => {
    const payload = {
        title: form.value.title,
        company: form.value.company,
        location: form.value.location,
        startDate: form.value.startDate,
        endDate: form.value.isNow ? null : form.value.endDate,
        isNow: form.value.isNow,

        lat: form.value.lat,
        lng: form.value.lng,

        details: detailsText.value
            .split('\n')
            .map(d => d.trim())
            .filter(Boolean),

        technicalSkills: technicalSkillsText.value
            .split('\n')
            .map(s => s.trim())
            .filter(Boolean),

        softSkills: softSkillsText.value
            .split('\n')
            .map(s => s.trim())
            .filter(Boolean),

        period: buildPeriod()
    }


    if (form.value.id) {
        await updateExperience(form.value.id, payload)
    } else {
        await createExperience(payload)
    }

    reset()
}

// DELETE
const deleteExp = async (id) => {
    if (!confirm('Delete this item?')) return
    await deleteExperience(id)
}

// RESET
const reset = () => {
    selected.value = null
    form.value = {
        id: null,
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: null,
        isNow: false,
        lat: null,
        lng: null
    }

    detailsText.value = ''
    technicalSkillsText.value = ''
    softSkillsText.value = ''
}


// UTILS
const buildPeriod = () => {
    const start = formatDate(form.value.startDate)
    if (!start) return ''
    if (form.value.isNow) return `${start} - Present`
    return `${start} - ${formatDate(form.value.endDate)}`
}

const formatDate = (d) =>
    d ? new Date(d).toLocaleString('en-US', { month: 'short', year: 'numeric' }) : ''
</script>

<style scoped>
.page {
    padding-top: 100px;
    max-width: 700px;
    margin: auto;
}

.list li {
    cursor: pointer;
    padding: 6px;
    display: flex;
    justify-content: space-between;
}

.list li.active {
    background: #eee;
}

input,
textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
}

.actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    cursor: pointer;
}
</style>