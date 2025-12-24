<template>
  <div class="relative max-w-4xl mx-auto">
    <!-- Timeline Line -->
    <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-300"></div>

    <!-- Timeline Items -->
    <div 
      v-for="(exp, index) in experiences" 
      :key="exp.id"
      class="relative mb-12 md:mb-16"
      :class="index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'"
    >
      <!-- Timeline Dot -->
      <div 
        class="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg transform -translate-x-1/2"
        :class="{ 'ring-4 ring-blue-300': activeExperience?.id === exp.id }"
      ></div>

      <!-- Content Card -->
      <div 
        class="ml-20 md:ml-0 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
        :class="{ 
          'md:mr-12': index % 2 === 0,
          'md:ml-12': index % 2 !== 0,
          'ring-2 ring-blue-400 scale-105': activeExperience?.id === exp.id
        }"
      >
        <!-- Period Badge -->
        <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
          {{ exp.period }}
        </span>

        <!-- Title -->
        <h3 class="text-xl font-bold text-brand-navy mb-2">
          {{ exp.title }}
        </h3>

        <!-- Company & Location -->
        <div class="flex items-center gap-2 text-gray-600 mb-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span class="font-semibold">{{ exp.company }}</span>
        </div>

        <div class="flex items-center gap-2 text-gray-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{{ exp.location }}</span>
        </div>

        <!-- Details (if provided) -->
        <ul v-if="exp.details" class="mt-4 space-y-2 text-gray-700">
          <li v-for="(detail, idx) in exp.details" :key="idx" class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>{{ detail }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  experiences: {
    type: Array,
    required: true
  },
  activeExperience: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
@media (max-width: 768px) {
  .md\:pr-1\/2,
  .md\:pl-1\/2 {
    padding: 0;
  }
}
</style>