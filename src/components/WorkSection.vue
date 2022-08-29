<template>
  <div class="work-section" id="work">
    <!-- <h1
        :style="{
          backgroundImage: 'url(' + require('@/assets/background.png') + ')',
        }"
      >
        Work
      </h1> -->
    <h1>Work</h1>
    <div class="description">
      Check my commercial and non-commercial projects. If you have any questions
      feel free to ask me for more information
    </div>
    <div class="work-array">
      <div
        v-for="pill in skillsArray"
        :key="pill.name"
        @click="changeSelected(pill)"
      >
        <span
          class="work-pill"
          :class="{ selected: pill.current }"
          v-if="jobs.filter((job) => job.tags.includes(pill.name)).length > 0"
        >
          {{ pill.name }} ({{
            jobs.filter((job) => job.tags.includes(pill.name)).length
          }})
        </span>
      </div>
    </div>
    <div class="jobs-array">
      <div
        class="jobs"
        v-for="job in jobs.filter((element) =>
          element.tags.includes(selectedPill.name)
        )"
        :key="job.href"
      >
        <div class="site-img" @click="openModal(job)">
          <img :src="job.image" alt="" />
        </div>
        <div class="details">
          <div class="site-title">{{ job.name }}</div>
          <div class="tag-array">
            <div class="tags" v-for="tag in removeAll(job.tags)" :key="tag">
              <span>{{ tag }}</span>
            </div>
          </div>
          <div class="description">{{ job.description }}</div>
          <div class="buttons-div">
            <button class="buttons" @click="openModal(job)">Preview</button>
            <a :href="job.github" target="_blank" rel="noopener">
              <button class="buttons white">Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal
    :showModal="showModal"
    @closeModal="showModal = false"
    :data="selectedJob"
  />
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
        image: require(`../assets/small/weather.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/weather.webp`),
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
        tags: ["All", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["Responsive Design", "GSAP", "Animations"],
      },
      {
        name: "Calculator",
        description: "Basic calculator App",
        href: "https://calculator.projectsbysam.dev/",
        github: "https://github.com/samade123/calculator",
        image: require(`../assets/small/calc.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/calc.webp`),
        tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["SASS", "Responsive Design"],
      },
      {
        name: "Market Black - Concept Design",
        description: "Concept design of a e-commerce site",
        href: "https://www.figma.com/file/DwlOgHgPLpL2kyf8y08w4h/Market-Black-Original?node-id=0%3A1",
        github:
          "https://www.figma.com/file/DwlOgHgPLpL2kyf8y08w4h/Market-Black-Original?node-id=0%3A1",
        image: require(`../assets/small/market-black.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/market-black.webp`),
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
      openModal,
      showModal,
      selectedPill,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";

.work-section {
  display: flex;
  grid-gap: 25px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .work-array {
    display: flex;
    justify-content: center;
    grid-gap: 25px 12px;
    flex-wrap: wrap;

    .work-pill {
      background: #0001;
      padding: 7px;
      border-radius: 10px;

      &:hover {
        background: #0002;
        cursor: pointer;
      }

      &.selected {
        background: black;
        color: white;
      }
    }
  }

  .jobs-array {
    border-radius: 5px;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px 20px;
    place-items: center;
    // margin: 0 auto;
    .jobs {
      display: grid;
      grid-gap: 10px;
      grid-template-rows: auto 1fr;
      max-width: 300px;
      min-height: 100%;
      place-items: center;

      .site-img {
        background: #0001;
        border-radius: 7px;
        padding: 5px;

        transition: opacity 0.3s ease-in;

        display: grid;
        place-items: center;
        box-sizing: border-box;
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
        img {
          // max-width: 100%;
          max-height: 200px;
          max-width: 285px;
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          //   rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        grid-gap: 11px;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;

        .site-title {
          font-weight: bold;
        }
        .description {
          color: #000a;
        }
        .tag-array {
          display: flex;
          grid-gap: 8px 8px;

          flex-wrap: wrap;

          justify-content: center;

          .tags {
            background: #0001;
            padding: 5px;
            border-radius: 10px;
          }
        }
        // grid-template-rows: 1fr 1fr;

        .buttons-div {
          .buttons {
            padding: 5px 0;

            &.white {
              border: white;
            }
          }
        }
      }
    }
  }
}
</style>