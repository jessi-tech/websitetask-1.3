<template>
  <div class="contact-me-view">
    <div v-html="contactFormHTML"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactFormHTML: "",
    };
  },
  created() {
    // Fetch content of contract form
    fetch("/contactform.html")
      .then((response) => response.text())
      .then((html) => {
        this.contactFormHTML = html;
      })
      .catch((error) => {
        console.error('Error fetching "contact form.html":', error);
      });
  },
};
</script>
