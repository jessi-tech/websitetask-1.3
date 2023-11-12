<template>
  <div>
    <HeaderEd class="fade-in-left" title="Education" />

    <section>
      <h2>Higher Education</h2>
      <!-- loop data and render EducationItem component -->
      <EducationItem
        v-for="(edu, index) in higherEducation"
        :key="index"
        :institution="edu.institution"
        :degree="edu.degree"
        :year="edu.year"
      />
    </section>

    <section>
      <h2>Other Courses</h2>
      <!-- loop data and render EducationItem component -->
      <EducationItem
        v-for="(course, index) in otherCourses"
        :key="index"
        :institution="course.institution"
        :degree="course.degree"
        :year="course.year"
      />
    </section>
  </div>
</template>

<script>
import HeaderEd from "@/components/HeaderEd.vue";
import EducationItem from "@/components/EducationItem.vue";

export default {
  components: {
    HeaderEd,
    EducationItem,
  },
  data() {
    return {
      higherEducation: [
        {
          institution: "Deakin University",
          degree: "Bachelor of Information Technology",
          year: "2022-2025",
        },
      ],
      otherCourses: [
        {
          institution: "Microsoft Learn",
          degree: "Microsoft Azure fundamentals",
          year: "2020",
        },
      ],
    };
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
