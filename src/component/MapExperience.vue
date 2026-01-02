<template>
  <div id="map" class="h-[250px] w-full rounded-xl shadow-lg"></div>
</template>

<script setup>
import { onMounted, watch, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
})

const props = defineProps({
  activeExperience: {
    type: Object,
    required: true
  }
})

let map
let marker

onMounted(() => {
  const { lat, lng } = props.activeExperience

  map = L.map('map', {
    zoomControl: false,      // ซ่อนปุ่ม zoom
    dragging: false,         // ❌ ลากไม่ได้
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false,
    touchZoom: false
  }).setView([lat, lng], 8)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  marker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      `<b>${props.activeExperience.company}</b><br>${props.activeExperience.location}`
    )
    .openPopup()
})

watch(
  () => props.activeExperience,
  (exp) => {
    if (!exp || !map) return

    map.flyTo([exp.lat, exp.lng], 8, {
      animate: true,
      duration: 1.5
    })

    marker
      .setLatLng([exp.lat, exp.lng])
      .bindPopup(`<b>${exp.company}</b><br>${exp.location}`)
      .openPopup()
  }
)

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<style scoped>
#map {
  z-index: 0;
}
</style>
