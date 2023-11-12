import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Education from "@/views/EducationView.vue";
import Experience from "@/views/ExperienceView.vue";
import Skills from "@/views/SkillsView.vue";
import ContactMe from "@/views/ContactMe.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "About", component: About },
  { path: "/education", name: "Education", component: Education },
  { path: "/experience", name: "Experience", component: Experience },
  { path: "/skills", name: "Skills", component: Skills },
  { path: "/contactme", name: "ContactMe", component: ContactMe },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
