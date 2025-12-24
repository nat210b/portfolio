<template>
  <div id="map" class="h-[500px] w-full rounded-xl shadow-lg"></div>
</template>

<script setup>
import { onMounted, watch, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const props = defineProps({
  activeExperience: Object
})

let map
let marker

onMounted(() => {
  map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([13.7367, 100.5330], 6)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  // Create initial marker
  if (props.activeExperience) {
    marker = L.marker([props.activeExperience.lat, props.activeExperience.lng])
      .addTo(map)
      .bindPopup(`<b>${props.activeExperience.company}</b><br>${props.activeExperience.location}`)
  }
})

watch(
  () => props.activeExperience,
  (exp) => {
    if (!exp || !map) return
    
    // Fly to new location
    map.flyTo([exp.lat, exp.lng], 8, {
      animate: true,
      duration: 1.5
    })
    
    // Update marker position and popup
    if (marker) {
      marker.setLatLng([exp.lat, exp.lng])
        .bindPopup(`<b>${exp.company}</b><br>${exp.location}`)
        .openPopup()
    } else {
      marker = L.marker([exp.lat, exp.lng])
        .addTo(map)
        .bindPopup(`<b>${exp.company}</b><br>${exp.location}`)
        .openPopup()
    }
  }
)

onBeforeUnmount(() => {
  if (map) {
    map.remove()
  }
})
</script>

<style scoped>
#map {
  z-index: 0;
}
</style>