<template>
  <div class="skills-container">
    <h1 class="animated-heading">Skills</h1>
    <div>
      <h2>Technical Skills</h2>
      <div v-if="technicalSkills.length > 0">
        <ul>
          <li v-for="(skill, index) in technicalSkills" :key="index">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No technical skills available.</p>
      </div>
    </div>
    <div>
      <h2>Non-Technical Skills</h2>
      <div v-if="nonTechnicalSkills.length > 0">
        <ul>
          <li v-for="(skill, index) in nonTechnicalSkills" :key="index">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No non-technical skills available.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technicalSkills: ["HTML", "Javascript", "CSS", "C++"],
      nonTechnicalSkills: [
        "Teamwork",
        "Communication",
        "Problem solving",
        "Writing",
        "Editing",
      ],
    };
  },
};
</script>

<style scoped>
.skills-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.animated-heading {
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
