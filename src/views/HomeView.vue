<template>
  <div class="home">
    <HomePage />
    <div class="columns">
      <div class="text-column" style="padding: 40px; text-align: center">
        <h1 class="animated-heading"></h1>
        <br />
        <b>
          A current student at Deakin University <br />
          Studying a bachelor of Information Technology
        </b>
      </div>
      <div class="image-column">
        <img src="@/assets/Photoimage.png" alt="Jessi's Photo" />
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
export default {
  name: "HomeView",
  components: {
    HomePage,
  },
};
</script>

<style scoped>
.animated-heading {
  display: inline-block;
  overflow: hidden;
}

.animated-heading::before {
  content: "Hi there I'm Jessi!";
  display: block;
  white-space: nowrap;
  animation: slideIn 1.5s ease-in-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@media only screen and (max-width: 600px) {
  .animated-heading::before {
    font-size: 1em;
  }

  .text-column {
    padding: 20px;
  }
}

@media only screen and (min-width: 1200px) {
  .animated-heading::before {
    font-size: 2.5em;
  }

  .text-column {
    padding: 60px;
  }
}
</style>
