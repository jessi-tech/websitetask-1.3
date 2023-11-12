<template>
  <div class="background-layer"></div>
  <div class="background-layer2"></div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
@import "/public/styles.css";

.background-layer {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-image: url("@/assets/blob.png");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}

.background-layer2 {
  position: fixed;
  top: 40%;
  right: 0;
  width: 50%;
  height: 50%;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  opacity: 0.5;
  z-index: -1;
}
</style>
