<template>
    <component :is="isClickable ? 'a' : 'div'" 
        :href="isClickable ? projectLink : undefined" 
        :target="isClickable ? '_blank' : undefined" 
        :rel="isClickable ? 'noopener noreferrer' : undefined"
        :class="[
            'group relative block bg-white rounded-xl shadow-lg transition-all duration-300 p-8 border border-gray-100 flex flex-col h-full overflow-hidden',
            isClickable ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : 'cursor-default'
        ]">
        
        <!-- Live App Status Dot -->
        <div v-if="isClickable" 
             class="absolute top-5 right-5 flex h-3 w-3 items-center justify-center"
             title="Click to view app">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :style="{ backgroundColor: iconColor }"></span>
            <span class="relative inline-flex rounded-full h-2 w-2" :style="{ backgroundColor: iconColor }"></span>
        </div>

        <!-- Icon -->
        <div class="mb-6 flex justify-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center"
                :style="{ backgroundColor: iconColor + '20' }">
                <i :class="projectIcon" class="text-3xl" :style="{ color: iconColor }"></i>
            </div>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">
            {{ title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
            {{ description }}
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-2 justify-center">
            <span v-for="(tech, index) in techStack" :key="index"
                class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                {{ tech }}
            </span>
        </div>

        <!-- Call to Action (CTA) -->
        <div v-if="isClickable" class="mt-auto pt-8 flex items-center justify-center w-full opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div class="relative flex items-center justify-center group/cta px-4 py-2">
                <span class="font-bold text-sm tracking-wide uppercase transition-transform duration-300 transform group-hover/cta:-translate-x-4" :style="{ color: iconColor }">
                    Click to view app
                </span>
                <div class="absolute right-[-0.5rem] opacity-0 transform -translate-x-4 group-hover/cta:translate-x-0 group-hover/cta:opacity-100 transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full" :style="{ backgroundColor: iconColor + '1A', color: iconColor }">
                    <i class="fa-solid fa-arrow-right text-sm"></i>
                </div>
            </div>
        </div>
    </component>

</template>
<script>
export default {
    name: 'ProjectCard',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        techStack: {
            type: Array,
            required: true
        },
        projectIcon: {
            type: String,
            required: true
        },
        projectLink: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            required: true
        },
        isClickable: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style></style>