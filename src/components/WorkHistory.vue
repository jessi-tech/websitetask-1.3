<template>
  <div style="padding-right: 30px">
    <br />
    <div>
      <label for="companyFilter">Filter by Company:</label>
      <select v-model="selectedCompany" id="companyFilter">
        <option value="">All Companies</option>
        <option v-for="company in myCompanies" :key="company" :value="company">
          {{ company }}
        </option>
      </select>
      <button @click="showMostRecent" class="action-button">
        Show Most Recent
      </button>
    </div>

    <ul v-for="(experience, index) in filteredExperiences" :key="index">
      {{
        experience.title
      }}
      -
      {{
        experience.company
      }}
      ({{
        experience.year
      }})
      <div class="responsibilities">
        <i>Responsibilities:</i>
        <ul>
          <li
            v-for="(responsibility, idx) in experience.responsibilities"
            :key="idx"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Quality Assurance Intern",
          company: "Twobulls Group.",
          year: "2022-2023",
          responsibilities: [
            "Troubleshot and debugged code ensuring compatibility with devices, browsers, and operating systems.",
            "Collaborated with cross-functional teams.",
            "Maintained quality assurance through code testing and cross-browser testing.",
          ],
        },
        {
          title: "Web Developer Intern",
          company: "Twobulls Group.",
          year: "2021-2022",
          responsibilities: [
            "Assisted with development of software user manuals",
            "Collaborated with project managers, senior web developers, support and maintenance and quality assurance",
            "Implemented web components across new and existing designs",
          ],
        },
        {
          title: "Cloud and Infrastructure Intern",
          company: "NBN co.",
          year: "2020-2021",
          responsibilities: [
            "Conducted research, gathered information from multiple sources and presented results.",
            "Collaborated with team members to achieve target results.",
            "Worked in project delivery providing assistance to team, organizing schedules, work loads, team retros and more.",
          ],
        },
        {
          title: "Strategic Sourcing Intern",
          company: "NAB National Australia Bank.",
          year: "2019-2021",
          responsibilities: [
            "Wrote and executed emails to shareholders.",
            "Provided editorial support to contractual documents.",
            "Supported Strategic sourcing team with administrative tasks.",
          ],
        },
      ],
      selectedCompany: "",
    };
  },
  computed: {
    myCompanies() {
      return [...new Set(this.experiences.map((exp) => exp.company))];
    },
    filteredExperiences() {
      if (this.selectedCompany) {
        return this.experiences.filter(
          (experience) => experience.company === this.selectedCompany
        );
      } else {
        return this.experiences;
      }
    },
  },
  methods: {
    showMostRecent() {
      this.selectedCompany = "";
    },
  },
};
</script>

<style scoped>
.action-button {
  background-color: #f0c544;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.action-button:hover {
  background-color: #d1ab3b;
}

.responsibilities li {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
</style>
