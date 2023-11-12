<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(to right, #8c30e3, #bc93e3);
  color: #fff;
  padding: 15px;
  text-align: center;
}
</style>
