<template>
  <header>
    <nav>
      <div class="logo">
        <!--  site logo  -->
        <router-link to="/" class="logo-link">
          <img src="@/assets/logoname.png" alt="My Website Logo" class="logo" />
        </router-link>
      </div>
      <!-- Navigation links -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/education">Education</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/ContactMe">Contact-Me</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #2e2e2e;
}

.logo-link {
  order: 1;
}

.logo {
  width: 150px;
  height: auto;
}
</style>
