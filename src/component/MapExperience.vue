<template>
  <div
    id="map"
    class="h-[400px] w-full rounded-xl shadow-lg md:h-auto md:min-h-[500px] md:flex-1 md:self-stretch"
  ></div>
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
      marker: null,
      resizeObserver: null
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

    this.$nextTick(() => {
      if (this.map) this.map.invalidateSize()
    })

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.map) this.map.invalidateSize()
      })
      this.resizeObserver.observe(this.$el)
    }

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
      
      const wrapper = document.createElement('div')
      wrapper.className = 'cursor-pointer p-1 text-center group'
      wrapper.innerHTML = `
        <div class="font-bold text-brand-navy group-hover:text-brand-teal transition-colors">${exp.title}</div>
        <div class="text-sm text-gray-600 mb-1">${exp.company}</div>
        <div class="text-xs font-semibold text-blue-500">Click to view details &rarr;</div>
      `
      wrapper.onclick = () => {
        this.$router.push({ name: 'jobDetail', params: { ref: btoa(exp.id) } })
      }

      this.marker = L.marker([exp.lat, exp.lng])
        .addTo(this.map)
        .bindPopup(wrapper)
        .openPopup()

      this.map.setView([exp.lat, exp.lng], 8, { animate: true })
    }
  },

  beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
    if (this.map) {
      this.map.remove()
    }
  }
}
</script>
