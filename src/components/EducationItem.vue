<template>
  <div class="education-item">
    <h2>{{ institution }}</h2>
    <p class="degree">{{ degree }}</p>
    <p class="year">{{ year }}</p>
  </div>
</template>

<script>
export default {
  props: {
    institution: String,
    degree: String,
    year: String,
  },
};
</script>

<style scoped>
.education-item {
  background-color: #edf1f2;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.degree {
  font-weight: bold;
}

.year {
  color: #877f8d;
}
</style>
