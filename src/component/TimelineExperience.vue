<template>
  <div>
    <div class="timeline-container hide-scrollbar">
      <div v-for="exp in
        filteredExperiences" :key="exp.id">
        <div class="timeline-item" @click="SelectedJobID(exp.id)">
          <div class="timeline-item-logo">
            <img v-if="exp.company === 'WORLDMED CENTER'" src="../assets/worldmed.png" alt="">
            <img v-if="exp.company.includes('KCMH')" src="../assets/KCMH.jpeg" alt="">
            <img v-if="exp.company === 'Sahaviriya Steel Industries PLC (SSI) (Headquarter)'" src="../assets/ssi.png"
              alt="">
            <img v-if="exp.company === 'Walt Disney world'" src="../assets/Walt-Disney-World-Logo.png" alt="">
            <img v-if="exp.company === 'BE 1 Digital Co. ltd'" src="../assets/be1.png" alt="">
          </div>
        </div>
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
        // 1️⃣ isNow มาก่อนเสมอ
        if (a.isNow && !b.isNow) return -1
        if (!a.isNow && b.isNow) return 1

        // 2️⃣ เทียบวันที่ (ใช้ endDate ถ้ามี ไม่งั้นใช้ startDate)
        const dateA = new Date(a.endDate || a.startDate)
        const dateB = new Date(b.endDate || b.startDate)

        return dateB - dateA  // เก่า → ใหม่
      })
    }
  },
  methods: {
    SelectedJobID(id) {
      this.selectedID = id,
        this.$router.push({ name: 'jobDetail', params: { id } });
    },
  }
}
</script>

<style scoped>
@keyframes show-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-container {
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scroll-behavior: smooth;

}

.timeline-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  animation: show-up 0.5s ease-in-out;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.timeline-item:hover {
  background-color: #f0f0f0;
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


.timeline-item-logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: transform 0.25s ease;
}

.timeline-item:hover .timeline-item-logo {
  transform: translateY(-10px) scale(1.05);
}


/* ซ่อน Scrollbar แนวนอนแต่ยังเลื่อนได้ เพื่อความสวยงาม */
.hide-scrollbar::-webkit-scrollbar {
  /* ปรับความสูง scrollbar ถ้าต้องการให้เห็น */
  background-color: transparent;
}

.hide-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(209, 213, 219, 0.5);
  border-radius: 4px;
}

.hide-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}

/* สำหรับ Firefox */
.hide-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(209, 213, 219, 0.5) transparent;
}
</style>