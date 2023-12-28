<template>
  <div class="project-section section" id="work">

    <h2 class="featured-section__title section__title">Personal Jobs</h2>
    <div class="section-main">

      <!-- <div class="project selected"></div>
      <div class="project"></div>
      <div class="project"></div>
      <div class="project"></div> -->

      <div class="project" v-for="job, index in jobs" :key="job.name" :class="{ 'selected': job.selected }"
        @click="selectJob(index)"></div>




    </div>
  </div>
  <Modal :showModal="showModal" @closeModal="showModal = false" :data="selectedJob" />
</template>

<script>
import { widthFunction } from "@/composables/Mobile";
import { computed, ref } from "@vue/reactivity";
import Modal from "@/components/Modal.vue";

export default {
  name: "WorkSection",
  components: {
    Modal,
  },
  setup() {
    const { width, setMobile, getScreenCategory } = widthFunction();

    const skillsArray = ref([
      { name: "All", current: true },
      { name: "CSS", current: false },
      { name: "HTML", current: false },
      { name: "JAVASCRIPT", current: false },
      { name: "Vue.js", current: false },
      { name: "Python", current: false },
      { name: "Figma", current: false },
      { name: "Design", current: false },
    ]);

    const showModal = ref(false);

    const changeSelected = (pill) => {
      skillsArray.value.forEach((skill) => {
        skill.current = false;
      });
      pill.current = true;
    };
    const selectJob = (jobIndex) => {
      jobs.value.forEach((job) => {
        job.selected = false;
      });
      jobs.value[jobIndex].selected = true;
    };

    const removeAll = (tagArray) => {
      const allIndex = tagArray.indexOf("All");
      return tagArray.slice(allIndex + 1);
    };

    const selectedPill = computed(() => {
      return skillsArray.value.find((pill) => pill.current == true);
    });

    const jobs = ref([
      {
        name: "Weather Dashboard",
        description: "Weather Dashboard with weather style theming",
        href: "https://weather.projectsbysam.dev/",
        github: "https://github.com/samade123/black-and-white-portfolio",
        image: require(`../assets/small/weather-iphone.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/weather-iphone.webp`),
        selected: true,
        tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: [
          "Color themeing (by weather)",
          "SASS",
          "Adaptive Design",
        ],
      },
      {
        name: "Agency landing page - demo",
        description:
          "A basic demo of an animated landing page for a creative agency.",
        href: "https://agency-landing-demo.projectsbysam.dev/",
        github: "https://github.com/samade123/agency-landing-page",
        designRef:
          "https://dribbble.com/shots/15916355/attachments/7746820?mode=media",
        image: require(`../assets/small/agency-demo.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/agency-demo.webp`),
        selected: false,
        tags: ["All", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["Responsive Design", "GSAP", "Animations"],
      },
      // {
      //   name: "Calculator",
      //   description: "Basic calculator App",
      //   href: "https://calculator.projectsbysam.dev/",
      //   github: "https://github.com/samade123/calculator",
      //   image: require(`../assets/small/calc.webp`),
      //   imageLarge: require(`../assets/${getScreenCategory()}/calc.webp`),
      // selected: false,
      //   tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
      //   otherFeatures: ["SASS", "Responsive Design"],
      // },
      {
        name: "Market Black - Concept Design",
        description: "Concept design of a e-commerce site",
        href: "https://www.figma.com/file/DwlOgHgPLpL2kyf8y08w4h/Market-Black-Original?node-id=0%3A1",
        github:
          "https://www.figma.com/file/DwlOgHgPLpL2kyf8y08w4h/Market-Black-Original?node-id=0%3A1",
        image: require(`../assets/small/market-black.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/market-black.webp`),
        selected: false,
        tags: ["All", "Figma", "Design"],
        otherFeatures: [],
      },
      {
        name: "Quick Design Task",
        description:
          "Basic Design task required of me for a front end interview",
        href: "",
        github: "https://github.com/samade123/FE-developer-exercise-reach-plc",
        image: require(`../assets/small/quick-design-task.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/quick-design-task.webp`),
        // image: require("../assets/medium/quick-design-task.webp"),
        selected: false,
        tags: ["All", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["Responsive Design"],
      },
    ]);

    const selectedJob = ref(jobs.value[0]);

    const openModal = (job) => {
      selectedJob.value = job;

      showModal.value = true;
    };
    return {
      skillsArray,
      removeAll,
      changeSelected,
      jobs,
      selectedJob,
      selectJob,
      openModal,
      showModal,
      selectedPill,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "@/styles/theme.scss" as *;
@use "@/styles/style.scss" as *;

.section {
  .section-main {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr 0fr 0fr 0fr;
    gap: 0.5em;
    height: 250px;
    width: 100%;
    transition: grid-template-columns 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:has(.project:first-child.selected) {
      grid-template-columns: 4fr 1fr 1fr 1fr 0fr 0fr 0fr;
    }

    &:has(.project:nth-child(2).selected) {
      grid-template-columns: 1fr 4fr 1fr 1fr 0fr 0fr 0fr;
    }

    &:has(.project:nth-child(3).selected) {
      grid-template-columns: 1fr 1fr 4fr 1fr 0fr 0fr 0fr;
    }

    &:has(.project:nth-child(4).selected) {
      grid-template-columns: 1fr 1fr 1fr 4fr 0fr 0fr 0fr;
    }

    .project {
      // transition: grid-column 0.4s ease;
      // transition: grid-column 0.4s ease allow-discrete;
      background: blue;
      border-radius: 14px;

      &:hover {
        cursor: pointer;
        filter: brightness(0.95);
      }
    }
  }
}
</style>