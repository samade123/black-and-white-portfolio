<template>
  <div class="project-section section" id="work">

    <h2 class="featured-section__title section__title">Personal Projects</h2>
    <div class="section-main" id="project-section-main">

      <div class="project" role='image' :aria-label='job.description' :title="job.name" v-for="job, index in jobs"
        :tabindex="job.selected ? false : '0'" @keypress.enter="selectJob(index)" :key="job.name"
        :class="{ 'selected': job.selected, [job.identifier ? 'project--' + job.identifier : '']: true }"
        @click="selectJob(index)" :style="{
          backgroundImage: `${job.bgImage}, linear-gradient(135deg, #${job.bgColors[0]} 30%, #${job.bgColors[1]} 100%)`,
        }">
        <div class="project-details">
          <h3 class="project-details__title">{{ job.name }}</h3>
          <h4 class="project-details__description">{{ job.description }}</h4>
          <div class="project-details__case-study"></div>
          <div class="project-details__skills">
            <div class="project-details__skill" v-for='(skill, index) in job.tags' :key="index"
              :class="skill.toLowerCase()">
            </div>
          </div>
          <div class="project-details__images">
            <div class="project-details__image"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <Modal :showModal="showModal" @closeModal="showModal = false" :data="selectedJob" />
</template>

<script>
import { widthFunction } from "@/composables/Mobile";
import { computed, ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Modal from "@/components/Modal.vue";
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);


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
        selected: false,
        bgImage: 'url(' + require('@/assets/featured/weather-mobile.webp') + ')',
        // bgColors: ['e2e0e3', 'e2e0e3'],
        bgColors: ['eff1f2', '87b4c6'],

        identifier: 'weather',
        tags: ["All", "Vue-js", "CSS", "HTML", "JAVASCRIPT"],
        // skills: [{"All"}, {"Vue.js"}, {"CSS"}"CSS", {}"HTML", {}"JAVASCRIPT"],
        otherFeatures: [
          "Color themeing (by weather)",
          "SASS",
          "Adaptive Design",
        ],
      },
      {
        name: "Presentation Viewer - Phase 1",
        description:
          "A presentation viewer and database based off the Marp markup language; integrated with Notion database REST API",
        href: "",
        github: "https://github.com/samade123/FE-developer-exercise-reach-plc",
        image: require(`../assets/small/quick-design-task.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/quick-design-task.webp`),
        bgColors: ['e7dfdc', 'e7dfdc'],
        identifier: 'cac',
        selected: false,
        bgImage: 'url(' + require('@/assets/featured/cac.webp') + ')',
        tags: ["All", "CSS", "HTML", "Typescript", 'angular'],
        otherFeatures: ["Responsive Design"],
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
        bgColors: ['c6ba7e', 'd0a697'],
        identifier: 'agency',
        selected: false,
        bgImage: 'url(' + require('@/assets/featured/agency.webp') + ')',
        tags: ["All", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["Responsive Design", "GSAP", "Animations"],
      },
      {
        name: "Market Black - Concept Design",
        description: "Concept design of a e-commerce site",
        href: "https://www.figma.com/file/DwlOgHgPLpL2kyf8y08w4h/Market-Black-Original?node-id=0%3A1",
        github:
          "https://www.figma.com/file/DwlOgHgPLpL2kyf8y08w4h/Market-Black-Original?node-id=0%3A1",
        image: require(`../assets/small/market-black.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/market-black.webp`),
        bgImage: 'url(' + require('@/assets/featured/market-black.webp') + ')',
        bgColors: ['cfc9c6', 'cfc9c6'],
        identifier: 'figma',
        selected: false,
        tags: ["All", "Figma", "Design"],
        otherFeatures: [],
      },
    ]);

    onMounted(() => {

      setTimeout(() => {
        var tl = gsap.timeline({ delay: 0.6, smoothChildTiming: true });
        tl.call(() => {
          selectJob(0)
        }, null, 0)

        ScrollTrigger.create({
          start: "center bottom",
          trigger: "#work",
          endTrigger: ".project-section .section-main",
          animation: tl,
          toggleActions: "play pause resume none",
          // once: true,
        });
      });
    });

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
@use "@/styles/project-details.scss" as *;


.section {
  .section-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0fr 0fr 0fr;
    gap: 0.5em;
    min-height: 250px;
    width: 100%;
    transition: grid-template-columns 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.125);

    &.ready {
      grid-template-columns: 4fr 1fr 1fr 1fr 0fr 0fr 0fr;
    }

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
      background-color: var(--section-bg-color, blue);
      border-radius: 14px;
      outline-color: color-mix(in srgb, var(--section-bg-color) 20%, #0a0a0a);
      height: 250px;


      @extend .selectable-grid;

      &:hover:not(.selected),
      &:focus-within:not(.selected) {
        cursor: pointer;
        filter: brightness(0.95);
      }

      &:focus-within {
        outline-style: dashed;
        outline-width: 2px;
      }

      &--weather {
        --section-bg-color: #87b4c6;
        background-position-x: -20px, 0;
        background-position-y: 100px, 0;
        background-size: auto 80%, cover;


        &:hover:not(.selected),
        &:focus-within:not(.selected) {
          background-position-y: 95px, 0;

        }

        &.selected {
          background-position-y: 0px, 0;
          background-size: auto 100%, cover;
        }

      }

      &--agency {
        --section-bg-color: #c6ba7e;
        background-position: 50% 30px, 0 0;
        background-size: auto 85%, cover;



        &:hover:not(.selected),
        &:focus-within:not(.selected) {
          background-position: 50% 30px, 0 0;
          background-size: auto 88%, cover;
        }

        &.selected {
          background-position: -33px center, 0 0;
          background-size: auto 90%, cover;
        }
      }

      &--cac {
        --section-bg-color: #e7dfdc;
        background-position: 50% 30px, 0 0;
        background-size: auto 85%, cover;



        &:hover:not(.selected),
        &:focus-within:not(.selected) {
          background-position: 50% 30px, 0 0;
          background-size: auto 88%, cover;
        }

        &.selected {
          background-position: 0 center, 0 0;
          background-size: auto 90%, cover;
        }
      }

      &--figma {
        --section-bg-color: #e0dfe1;
        background-position: 50% 30px, 0 0;
        background-size: auto 85%, cover;



        &:hover:not(.selected),
        &:focus-within:not(.selected) {
          background-position: 50% 30px, 0 0;
          background-size: auto 88%, cover;
        }

        &.selected {
          background-position: -20px center, 0 0;
          background-size: auto 90%, cover;
        }
      }
    }
  }
}
</style>