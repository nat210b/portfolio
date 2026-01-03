<template>
  <div class="timeline-container hide-scrollbar">
    <div v-for="exp in filteredExperiences" :key="exp.id" class="timeline-item" @click="SelectedJobID(exp.id)"
      @mouseenter="$emit('hover', exp)">
      <div class="timeline-item-logo">
        <img v-if="exp.company === 'WORLDMED CENTER'" src="../assets/worldmed.png" />
        <img v-else-if="exp.company.includes('KCMH')" src="../assets/KCMH.png" />
        <img v-else-if="exp.company === 'Sahaviriya Steel Industries PLC (SSI) (Headquarter)'"
          src="../assets/ssi.png" />
        <img v-else-if="exp.company === 'Walt Disney world'" src="../assets/Walt-Disney-World-Logo.png" />
        <img v-else-if="exp.company === 'BE 1 Digital Co. ltd'" src="../assets/be1.png" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TimelineExperience',
  props: {
    experiences: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedID: null
    }
  },
  computed: {
    filteredExperiences() {
      return [...this.experiences].sort((a, b) => {
        if (a.isNow && !b.isNow) return -1
        if (!a.isNow && b.isNow) return 1

        const dateA = new Date(a.endDate || a.startDate)
        const dateB = new Date(b.endDate || b.startDate)
        return dateB - dateA
      })
    }
  },
  methods: {
    SelectedJobID(id) {
      this.selectedID = id
      this.$router.push({ name: 'jobDetail', params: { id } })
    }
  }
}
</script>


<style scoped>
@keyframes show-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
}

.timeline-item {
  min-height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  cursor: pointer;

  /* 🔥 animation กลับมา */
  animation: show-up 0.45s ease-out both;

  /* 🔥 กัน animation ตีกับ hover */
  will-change: transform, opacity;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

/* hover ยังเด้งเหมือนเดิม */
.timeline-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.timeline-item-logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.25s ease;
}

.timeline-item:hover .timeline-item-logo {
  transform: translateY(-10px) scale(1.05);
}

.timeline-item-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* scrollbar */
.hide-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.hide-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(209, 213, 219, 0.6);
  border-radius: 4px;
}
</style>