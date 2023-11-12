<template>
  <div class="about">
    <BackGround />
    <div class="container">
      <div class="intro">
        <h1 class="animated-heading">About Me</h1>
        <p>
          Hello! I'm Jessi, a passionate and dedicated Information Technology
          student at Deakin University. My interest in Technology took hold in
          the middle of my first degree (Bachelor of Arts) and with the more I
          learned the more passionate I was, which led to changing my degree and
          starting over. I have a deep interest in App and Game development as
          well as interest in the crossovers between technology and design.
        </p>
        <p>
          In the realm of Information Technology, I am exploring a diverse range
          of subjects through my units and personal exploration , from
          programming and software development to network and administration.
          One of the best parts of this field is the ever evolving landscape and
          challenges presented. I am excited to contribute to the distruptive
          innovartion in our digital future. by the ever-evolving tech
          landscape, and I am excited to contribute to
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/BackGround.vue";

export default {
  name: "AboutView",
  components: {
    BackGround,
  },
};
</script>

<style scoped>
.about {
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
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
