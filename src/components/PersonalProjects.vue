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
          <h3 class="project-details__title"
            :class="{ 'expand': job.expand['h3'].possible ? job.expand['h3'].state : false, 'expandible': job.expand['h3'].possible && !job.expand['h3'].state}" @click="expand(job, 'h3')">{{
              job.name }}
            <div class="project-details__expand" role="button" v-if="job.expand['h3'].possible">
              <img src="@/assets/logos/expand.svg" v-svg-inline alt="" class="">
            </div>
          </h3>
          <h4 class="project-details__description"
            :class="{ 'expand': job.expand['h4'].possible ? job.expand['h4'].state : false, 'expandible': job.expand['h4'].possible && !job.expand['h4'].state }" @click="expand(job, 'h4')">{{
              job.description }}
            <div class="project-details__expand" role="button" v-if="job.expand['h4'].possible">
              <img src="@/assets/logos/expand.svg" v-svg-inline alt="" class="">
            </div>
          </h4>
          <!-- <div class="project-details__case-study"></div> -->
          <div class="project-details__skills">
            <div class="project-details__skill" v-for='(skill, index) in job.tags' :key="index"
              :class="skill.toLowerCase()">
            </div>
          </div>
          <!-- <div class="project-details__images">
            <div class="project-details__image"></div>
          </div> -->

          <div class="buttons-div">
            <a :href="job.href">
              <button class="buttons">Preview</button>
            </a>
            <a :href="job.github" target="_blank" rel="noopener">
              <button class="buttons white">Source Code</button>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- <Modal :showModal="showModal" @closeModal="showModal = false" :data="selectedJob" /> -->
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
  // components: {
  //   Modal,
  // },
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
    let selectedJobIndex = 0

    const changeSelected = (pill) => {
      skillsArray.value.forEach((skill) => {
        skill.current = false;
      });
      pill.current = true;
    };
    const selectJob = (jobIndex) => {
      resetJobs();
      selectedJobIndex = jobIndex;
      jobs.value[jobIndex].selected = true;
    };

    const expand = (job, key) => {

      let keys = Object.keys(job.expand)
      keys.forEach((key) => {
        job.expand[key].state = false;
      })

      setTimeout(() => {

        job.expand[key].state = true;
      }, 100)



    };

    const resetJobs = () => {
      jobs.value.forEach((job) => {
        job.selected = false;
      });
    }

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
        expand: {
          'h3': { possible: false }, 'h4': { possible: true }
        }
      },
      {
        name: "Presentation Viewer - Phase 1",
        description:
          "A presentation viewer and database based off the Marp markup language; integrated with Notion database REST API",
        href: "https://cac-hymns.vercel.app/",
        github: "https://github.com/samade123/angular_cac_hymns_in_marp",
        image: require(`../assets/small/quick-design-task.webp`),
        imageLarge: require(`../assets/${getScreenCategory()}/quick-design-task.webp`),
        bgColors: ['e7dfdc', 'e7dfdc'],
        identifier: 'cac',
        selected: false,
        bgImage: 'url(' + require('@/assets/featured/cac.webp') + ')',
        tags: ["All", "CSS", "HTML", "Typescript", 'angular'],
        otherFeatures: ["Responsive Design"],
        expand: {
          'h3': { possible: true }, 'h4': { possible: true }
        }
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
        expand: {
          'h3': { possible: false }, 'h4': { possible: true }
        }
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
        expand: {
          'h3': { possible: true }, 'h4': { possible: true }
        }
      },
    ]);
    let config = {
      startTrigger: setMobile.value ? '.section--clients' : '.section-partial--codestacks',
      start: setMobile.value ? 'bottom center' : "center center",
    }

    let setValues = () => {
      config.startTrigger = setMobile.value ? '#work' : '.section-partial--codestacks';
      config.start = setMobile.value ? 'top center' : "+=200 center";
    }

    onMounted(() => {

      setValues();
      setTimeout(() => {
        // var tl = gsap.timeline({ smoothChildTiming: true });
        // tl.call(() => {
        //   selectJob(0)
        // }, null, 0)

        window.addEventListener("resize", () => {
          setValues();
          ScrollTrigger.refresh();
        });

        ScrollTrigger.create({
          start: config.start,
          trigger: config.startTrigger,
          end: "bottom+=100px center",
          endTrigger: ".project-section#work",
          // animation: tl,
          toggleActions: "play pause resume none",
          // markers: true,
          onEnter: () => {
            setTimeout(() => {
              selectJob(selectedJobIndex)
            }, 0);
          },
          onLeave: () => {

            setTimeout(() => {
              resetJobs();
            }, 150);
          },
          onLeaveBack: () => {
            setTimeout(() => {
              resetJobs();
            }, 150);
          },
          onEnterBack: () => {
            setTimeout(() => {
              selectJob(selectedJobIndex)
            }, 350);
          },
        });
      }, 50);

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
      expand,
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
      @extend .selectable-grid;
      background-color: var(--section-bg-color, blue);
      border-radius: 14px;
      outline-color: color-mix(in srgb, var(--section-bg-color) 20%, #0a0a0a);
      height: 250px;

      div[role="button"] {
        --color-mix-ratio: 40%;
        background-color: color-mix(in srgb, #cccc, var(--section-bg-color, blue) var(--color-mix-ratio));
        border: 1px solid black;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        padding: 0.05em;

        &:hover {
          cursor: pointer;
          --color-mix-ratio: 20%;

        }

      }

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
        background-position-x: -.5em, 0;
        background-position-y: 100px, 0;
        background-size: auto 100%, cover;


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

@import "../styles/project-section-mobile.scss";</style>