<!-- YourPage.vue -->

<template>
  <div>
    <HeaderEd class="fade-in-left" title="Work History" />
    <ExperienceHistory />
  </div>
</template>

<script>
import HeaderEd from "@/components/HeaderEd.vue";
import ExperienceHistory from "@/components/WorkHistory.vue";

export default {
  components: {
    HeaderEd,
    ExperienceHistory,
  },
};
</script>

<style scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  animation: fadeInLeft 1s ease-in-out;
}
</style>
