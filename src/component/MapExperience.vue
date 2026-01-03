<template>
  <div id="map" class="h-[600px] w-full rounded-xl shadow-lg"></div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  props: {
    activeExperience: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      map: null,
      marker: null
    }
  },

  mounted() {
    // fix marker icon
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
    })

    this.map = L.map('map', {
      center: [13.736717, 100.523186],
      zoom: 6,
      dragging: false,
      scrollWheelZoom: false
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(this.map)

    // 🔥 ถ้ามี activeExperience อยู่แล้ว → ตั้ง default เป็นที่ล่าสุดทันที
    if (this.activeExperience) {
      this.setMarker(this.activeExperience)
    }
  },

  watch: {
    activeExperience(exp) {
      if (!exp || !this.map) return
      this.setMarker(exp)
    }
  },

  methods: {
    setMarker(exp) {
      if (this.marker) {
        this.map.removeLayer(this.marker)
      }

      this.marker = L.marker([exp.lat, exp.lng])
        .addTo(this.map)
        .bindPopup(`<b>${exp.title}</b><br/>${exp.company}`)
        .openPopup()

      this.map.setView([exp.lat, exp.lng], 8, { animate: true })
    }
  },

  beforeUnmount() {
    if (this.map) {
      this.map.remove()
    }
  }
}
</script>
