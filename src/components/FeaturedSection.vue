<template>
  <div class="featured-section section" id="featured">
    <h2 class="featured-section__title section__title">Featured Projects</h2>

    <div class="section-main"
      :class="{ ['section-main--'.concat(displayExtraClass)]: displayExtra, 'section-main--extra': displayExtra }">
      <!-- <div class="section-grid" v-for="grid in  sectionGrids " tabindex="0" :key="grid.name"
      @click="clickSectionGrid(grid)"
      :class="{ ['section-grid--' + grid.name]: true, 'section-grid--top-detail': grid.details.top }" :style="{
        backgroundImage: displayExtraImages[grid.name].src,
      }" :aria-label="grid.name" :title="grid.name"> -->

      <div class="section-grid" v-for="grid in  sectionGrids " tabindex="0" :key="grid.name"
        @click="clickSectionGrid(grid)" @keypress.enter="clickSectionGrid(grid)"
        :class="{ ['section-grid--' + grid.name]: true, 'section-grid--top-detail': grid.details.top }"
        :aria-label="grid.name" :title="grid.name">

        <div class="section-grid__cancel" v-if='displayExtra' role="button" title="Go back" @click="resetGridImages()"
          @keypress.enter="resetGridImages()">
          <img src="@/assets/fonts/times.svg" v-svg-inline alt="cancel button" tabindex="0" class="section-grid__icon">
        </div>
        <div class="hidden-details" v-if="grid.details">
          <h3 class="hidden-details__title">
            {{ grid.details.title }}
          </h3>
          <p class="hidden-details__desc">
            {{ grid.details.caseStudy }}
            <br>
          <div class="hidden-details__see-more" v-if="grid.extra" tabindex="0">
            <!-- <div> -->
            See More
            <!-- </div> -->
            <span class="underline"></span>
            <br>

          </div>
          </p>

          <div class="hidden-details_images">
            <div class="agency"></div>
            <div class="skills"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="section section--clients">
    <h2 class="section__title">Clients</h2>
    <div class="section-partial section-partial--right">
      <div class="logo-wrapper" v-for="logo in  clients" :key="logo.name">
        <img class="logo" v-svg-inline :class="'logo--' + logo.name" :aria-label="logo.name" :title="logo.name"
          :src="logo.img">
      </div>
    </div>

    <h2 class="section__title ">Codestacks</h2>
    <div class="section-partial section-partial--codestacks">
      <div class="logo-wrapper" v-for="logo in  topSkills" :key="logo.name">

        <img class="logo" v-svg-inline :class="'logo--' + logo.name" :aria-label="logo.name" :title="logo.name"
          :src="logo.img">
      </div>

    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { nextTick } from "vue";
// import Modal from "@/components/Modal.vue";

export default {
  name: "FeaturedSection",

  setup() {
    const sectionGrids = [{ name: 'barclays', details: { title: 'Office Quiz Leaderboard', top: false, caseStudy: 'An electron based database which allowed Barclays offices in mulitple regions to record gaming scores.', agency: 'Event Engineering', skills: [{ name: 'electron' }, { name: 'vue' }, { name: 'js' }] }, extra: { state: true, images: [{ src: 'url(' + require('@/assets/large/barclays-desktop.webp') + ')', position: 'bullring' }, { src: 'url(' + require('@/assets/large/barclays-desktop.webp') + ')', position: 'cac' }] } },
    { name: 'james-bond', details: { title: 'James Bond - Pod Experience', top: false, caseStudy: 'An in mall pod experience ', agency: 'Event Engineering', skills: [{ name: 'electron' }, { name: 'vue' }, { name: 'js' }] }, },
    { name: 'bullring', details: { title: 'Bullring Shopping Centre - Crystal Maze', top: false, caseStudy: 'Crystal Maze Leaderboard/Database - A shopping center gaming experience. Based off the Barclays version ', agency: 'Event Engineering', skills: [{ name: 'electron' }, { name: 'vue' }, { name: 'js' }] }, extra: { state: true, } },
    { name: 'weather', details: { title: 'Weather Dashboard', top: true, caseStudy: 'Dashboard with dynamic themeing and location Search capabilities', skills: [{ name: 'vue' }, { name: 'js' }] }, extra: { state: true, } },
    { name: 'cac', details: { title: 'Presentation Viewer - Phase 1', top: true, caseStudy: 'Converted papaer database of hymns into digital format and converted it into a a presentation format based off the marp markdown language fo, for easy ue and editing. A presentation viewer and database based off the Marp markup language; integrated with Notion database REST API', skills: [{ name: 'Angular' }, { name: 'ts' }] } },
    { name: 'hsbc', details: { title: 'HSBC Fund Management', top: true, caseStudy: 'A fund management portal for High Net Worth and Very High Net Worth clients and Agents, Tailored for HSBC and Schroders', agency: 'InvestCloud', skills: [{ name: 'css' }, { name: 'HTML' }] }, extra: { state: true, } },
    { name: 'sky', details: { title: 'Sky Movies - Pod experience', top: true, caseStudy: '', agency: 'event engineering', skills: [{ name: 'electron' }, { name: 'vue' }] } },
    ]
    const clients = [{ name: 'sky', img: require('@/assets/logos/sky.svg') },
    { name: 'bullring', img: require('@/assets/logos/bullring.svg') },
    { name: 'barclays', img: require('@/assets/logos/barclays.svg') },
    { name: 'hsbc', img: require('@/assets/logos/hsbc.svg') },
    ]
    const topSkills = [{ name: 'angular', img: require('@/assets/logos/angular.svg') },
    { name: 'vue', img: require('@/assets/logos/vue.svg') },
    { name: 'typescript', img: require('@/assets/logos/typescript.svg') },
    { name: 'javascript', img: require('@/assets/logos/javascript.svg') },
    { name: 'electron', img: require('@/assets/logos/electron.svg') },
    ]

    let displayExtra = ref(false)
    let displayExtraClass = ref('')
    let displayExtraImages = ref({
      'barclays': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' }, 'james-bond': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' }, 'bullring': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' }, 'weather': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' }, 'cac': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' }, 'hsbc': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' }, 'sky': { src: '', grayscale: false, 'name': '', top: false, title: '', caseStudy: '' },
    })
    let displayExtraImagesKeys = Object.keys(displayExtraImages.value)

    let resetGridImages = () => {
      displayExtra.value = false;

      // sectionGrids.forEach((grid) => {
      //   displayExtraImages.value[grid.name].src = grid.img;
      // })
    }

    resetGridImages();


    let clickSectionGrid = async (grid) => {
      if (grid.extra) {
        // console.log(grid.extra, grid.extra.state)
        if (grid.extra.state) {
          displayExtra.value = true;
          displayExtraClass.value = grid.name;
          // displayExtraImagesKeys.forEach((imgKey) => {
          //   displayExtraImages.value[imgKey].grayscale = true
          // })

          // grid.extra.images.forEach((img) => {
          //   displayExtraImages.value[img.position].src = img.src
          //   displayExtraImages.value[img.position].grayscale = false

          // })

          // console.log(displayExtraImages.value, displayExtra.value)
        }
      }
      await nextTick()

      return
    }



    return {
      sectionGrids,
      clients,
      topSkills,
      displayExtra,
      displayExtraClass,
      displayExtraImages,
      clickSectionGrid,
      resetGridImages,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "@/styles/theme.scss" as *;
@use "@/styles/style.scss" as *;



.section {
  .section-main {
    width: 100%;
    // border: solid black 1px;
    border-radius: 14px;
    margin: 0 auto;

    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(20, 1fr);
    aspect-ratio: 5/3;
    display: grid;
    gap: 0.5em;

    div.section-grid {
      display: grid;
      place-items: end stretch;
      border-radius: 14px;
      --section-bg-color: #f7f7f7;
      background-color: var(--section-bg-color);
      background-size: contain;
      background-repeat: no-repeat;
      transition: background-position 0.2s ease, filter 0.3s ease-in, background-color 0.3s ease;
      outline-color: color-mix(in srgb, var(--section-bg-color) 20%, #0a0a0a);
      isolation: isolate;

      &:has(.hidden-details__see-more) {

        &:hover,
        &:focus-within {
          filter: brightness(0.9);
          cursor: pointer;
        }
      }

      &:hover,
      &:focus-within {


        .hidden-details {
          opacity: 1;
        }
      }

      &:focus-within {
        outline-style: dashed;
        outline-width: 2px;
      }

      .section-grid__cancel {
        display: none;
        grid-column: 1;
        grid-row: 1;

        &:hover {
          cursor: pointer;

          #CancelPath {
            stroke: #600000;
            stroke: red;

          }
        }

      }

      .section-grid__icon {
        height: 1.5lh;
        width: 1.5lh;

        transition: height 0.4s ease,
          width 0.4s ease;

        &:hover {
          height: 1.7lh;
          width: 1.7lh;
        }
      }

      .hidden-details {

        display: grid;
        gap: 0.3em 0;
        padding: 0.5em 0.6em;
        background-color: color-mix(in srgb, var(--section-bg-color) 80%, #0a0a0acc);
        filter: brightness(1.4);
        opacity: 0;
        text-align: left;
        transition: opacity 0.4s ease-in, background-color 0.4s ease;
        border-radius: 0px 0px 14px 14px;
        grid-column: 1;
        grid-row: 1;


        .hidden-details__title {
          margin: 0;
          font-size: 0.9em;
        }

        .hidden-details__desc {
          margin: 0;
          font-size: 0.8em;
        }

        .hidden-details__see-more {
          container: see-more / inline-size;
          width: 4lh;
          height: 1lh;

          .underline {
            width: 0cqw;
            // height: 2px;
            display: block;
            transition: width 0.2s ease;
            border: 1px solid var(--hidden-detail-color, --hidden-detail-dark-color);
          }

          &:hover {
            font-weight: 700;

            // text-decoration: underline;
            .underline {
              width: 100cqw;

            }
          }
        }
      }

      &:where(:nth-child(2n)) {
        --section-bg-color: black;
      }

      &:where(:nth-child(2n-1)) {
        --section-bg-color: blue;
      }

      &--top-detail {
        place-items: start stretch;

        .hidden-details {
          border-radius: 14px 14px 0px 0px;

        }

      }

    }

  }

  .section-partial {
    gap: 1em;
    display: flex;
    padding-block: 1em;

    align-items: center;
    justify-content: space-evenly;
    width: 85%;
    max-width: 850px;
    border-radius: 14px;
    --section-bg-color: #78B3E688;
    // --section-bg-color: #F3F4F8;
    background-color: var(--section-bg-color);
    min-height: 200px;

    &:nth-child(2) {
      --section-bg-color: #afb0f088;
    }

    .logo-wrapper {
      --logo-height: 120px;
      height: var(--logo-height);
      transition: height 0.2s ease-in;

      // &:hover,
      // &:focus-within {
      //   height: 200px;
      //   cursor: pointer;
      // }

      .logo {
        height: var(--logo-height);
      }
    }

    &--codestacks .logo-wrapper:is(:hover, :focus-within) {
    height: 200px;
    cursor: pointer;
  }


    &--right {
      align-self: flex-end
    }
  }

  
}

@media only screen and (max-width: 600px) {
  .section {
    .section-main {
      // width: 95vw;
      aspect-ratio: 5/4;


    }

    .section-partial {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;

      .logo {
        width: 100%;
        padding: 0 1em;
        box-sizing: border-box;
      }
    }

  }
}

@media only screen and (max-width: 900px) {
  .section {
    .section-main {
      // width: 90vw;
      aspect-ratio: 4/3;
    }

  }
}

@import "../styles/feature-section-grid-default.scss";
</style>