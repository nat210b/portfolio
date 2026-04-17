<template>
    <div class="admin-page">
        <header class="admin-header">
            <div>
                <h1>Experience Manager</h1>
                <p>Manage your work experience and credentials</p>
            </div>
            <button class="btn btn-primary" @click="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add New Experience
            </button>
        </header>

        <div class="admin-layout">
            <!-- Sidebar: Experience List -->
            <aside class="sidebar">
                <div class="list-container">
                    <div v-if="experiences.length === 0" class="empty-state">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <p>No experiences yet.</p>
                        <span>Click the button above to add one.</span>
                    </div>

                    <div 
                        v-for="exp in experiences" 
                        :key="exp.id" 
                        @click="selectExp(exp)"
                        class="exp-card"
                        :class="{ active: selected?.id === exp.id }"
                    >
                        <div class="exp-card-content">
                            <h3 class="exp-title">{{ exp.title }}</h3>
                            <p class="exp-company">{{ exp.company }}</p>
                            <span class="exp-period">{{ exp.period || 'No Date' }}</span>
                        </div>
                        <button class="btn-icon delete" @click.stop="deleteExp(exp.id)" title="Delete Experience">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </div>
            </aside>

            <!-- Main Editor Form -->
            <main class="form-container">
                <div class="form-header">
                    <h2>{{ form.id ? 'Edit Experience' : 'Create New Experience' }}</h2>
                    <span class="form-id" v-if="form.id">ID: {{ form.id }}</span>
                </div>

                <form @submit.prevent="save" class="editor-form">
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Job Title</label>
                            <input v-model="form.title" placeholder="e.g. Full Stack Developer" required />
                        </div>
                        <div class="form-group">
                            <label>Company</label>
                            <input v-model="form.company" placeholder="e.g. Tech Corp" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Location</label>
                        <div class="input-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <input v-model="form.location" placeholder="e.g. Bangkok, Thailand" />
                        </div>
                    </div>

                    <div class="form-row date-row">
                        <div class="form-group">
                            <label>Start Date</label>
                            <input type="date" v-model="form.startDate" required />
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <div class="end-date-wrapper">
                                <input type="date" v-model="form.endDate" :disabled="form.isNow" :required="!form.isNow" />
                                <label class="checkbox-label" :class="{ active: form.isNow }">
                                    <input type="checkbox" v-model="form.isNow" />
                                    <span>Present</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Location Coordinates (Optional)</label>
                            <div class="coordinates-grid">
                                <input type="number" step="any" v-model.number="form.lat" placeholder="Latitude (e.g. 13.7367)" />
                                <input type="number" step="any" v-model.number="form.lng" placeholder="Longitude (e.g. 100.5330)" />
                            </div>
                        </div>
                    </div>

                    <div class="form-divider"></div>

                    <div class="form-group">
                        <label>Job Details <span>(One bullet point per line)</span></label>
                        <textarea rows="5" v-model="detailsText" placeholder="Developed complex web applications...&#10;Collaborated with cross-functional teams..." required></textarea>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Technical Skills <span>(One per line)</span></label>
                            <textarea rows="4" v-model="technicalSkillsText" placeholder="Vue.js&#10;Node.js&#10;AWS"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Soft Skills <span>(One per line)</span></label>
                            <textarea rows="4" v-model="softSkillsText" placeholder="Problem Solving&#10;Agile Methodology"></textarea>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn btn-outline" @click="reset" v-if="form.title || form.id">
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-success">
                            <svg v-if="!form.id" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            {{ form.id ? 'Update Experience' : 'Save New Experience' }}
                        </button>
                    </div>
                </form>
            </main>
        </div>
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
    
    // Smooth scroll to form on mobile
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    if (!confirm('Are you certain you want to delete this experience? This action cannot be undone.')) return
    
    if (selected.value?.id === id) {
        reset()
    }
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
/* Base Styles */
input, textarea, button {
    font-family: inherit;
    box-sizing: border-box;
}

.admin-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    padding-top: 6rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: #1e293b;
}

/* Header */
.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0;
}

.admin-header h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #0f172a;
}

.admin-header p {
    margin: 0;
    color: #64748b;
}

/* Layout */
.admin-layout {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 2rem;
    align-items: start;
}

@media (max-width: 900px) {
    .admin-layout {
        grid-template-columns: 1fr;
    }
    
    .admin-layout > aside {
        order: 2;
    }
    
    .admin-layout > main {
        order: 1;
    }
}

/* Sidebar List */
.sidebar {
    background: #f8fafc;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    height: calc(100vh - 200px);
    overflow-y: auto;
}

.list-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #94a3b8;
}

.empty-state p {
    margin: 1rem 0 0.25rem 0;
    font-weight: 500;
    color: #64748b;
}

.empty-state span {
    font-size: 0.875rem;
}

.exp-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.exp-card:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    transform: translateY(-2px);
}

.exp-card.active {
    border-color: #3b82f6;
    background: #eff6ff;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.exp-card-content {
    flex-grow: 1;
    overflow: hidden;
}

.exp-title {
    margin: 0 0 0.25rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: #0f172a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.exp-company {
    margin: 0 0 0.5rem 0;
    font-size: 0.875rem;
    color: #475569;
}

.exp-period {
    display: inline-block;
    font-size: 0.75rem;
    background: #f1f5f9;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: #64748b;
}

.active .exp-period {
    background: #dbeafe;
    color: #2563eb;
}

/* Main Form Container */
.form-container {
    background: white;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    padding: 2rem;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
}

.form-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #0f172a;
}

.form-id {
    font-size: 0.875rem;
    color: #94a3b8;
    background: #f1f5f9;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-family: monospace;
}

.editor-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-row > * {
    flex: 1;
}

.date-row {
    align-items: flex-end;
}

@media (max-width: 640px) {
    .form-row {
        flex-direction: column;
    }
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #475569;
}

.form-group label span {
    font-weight: 400;
    color: #94a3b8;
    font-size: 0.75rem;
}

input[type="text"],
input[type="date"],
input[type="number"],
textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background: #fff;
    color: #1e293b;
    font-size: 0.95rem;
    transition: all 0.2s ease;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

input:disabled {
    background: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
}

.input-with-icon {
    position: relative;
    display: flex;
    align-items: center;
}

.input-with-icon svg {
    position: absolute;
    left: 1rem;
    color: #94a3b8;
}

.input-with-icon input {
    padding-left: 2.75rem;
}

.end-date-wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-weight: 500 !important;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.checkbox-label.active {
    background: #eff6ff;
    border-color: #3b82f6;
    color: #2563eb;
}

.checkbox-label input {
    width: auto;
    margin: 0;
    cursor: pointer;
}

.coordinates-grid {
    display: flex;
    gap: 0.5rem;
}

.form-divider {
    height: 1px;
    background: #e2e8f0;
    margin: 0.5rem 0;
}

textarea {
    resize: vertical;
    line-height: 1.5;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn:active {
    transform: scale(0.98);
}

.btn-primary {
    background: #0f172a;
    color: white;
}

.btn-primary:hover {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
}

.btn-outline {
    background: white;
    border: 1px solid #cbd5e1;
    color: #475569;
}

.btn-outline:hover {
    background: #f8fafc;
    border-color: #94a3b8;
}

.btn-success {
    background: #3b82f6;
    color: white;
}

.btn-success:hover {
    background: #2563eb;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-icon {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #94a3b8;
    border-radius: 4px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.btn-icon:hover {
    color: #ef4444;
    background: #fee2e2;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
}
</style>