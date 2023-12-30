<template>
  <div class="featured-section section" id="featured">
    <h2 class="featured-section__title section__title">Featured Client Work</h2>

    <div class="section-main">

      <div class="section-grid" v-for="grid in  sectionGrids " tabindex="0" :key="grid.name"
        :class="{ ['section-grid--' + grid.name]: true, 'section-grid--top-detail': grid.details.top }" :style="{
          backgroundImage: grid.img,
        }
          " :aria-label="grid.name" :title="grid.name">
        <div class="hidden-details" v-if="grid.details">
          <h3 class="hidden-details__title">
            {{ grid.details.title }}
          </h3>
          <p class="hidden-details__desc">
            {{ grid.details.caseStudy }}
          </p>

          <div class="hidden-details_images">
            <div class="agency"></div>
            <div class="skills"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="section">
    <h2 class="section__title">Clients</h2>
    <div class="section-partial section-partial--right">
      <img class="logo" v-svg-inline v-for="logo in  clients" :key="logo.name" :class="'logo--' + logo.name"
        :aria-label="logo.name" :title="logo.name" :src="logo.img">
    </div>

    <h2 class="section__title">Codestacks</h2>
    <div class="section-partial">
      <img class="logo" v-svg-inline v-for="logo in  topSkills " :key="logo.name" :class="'logo--' + logo.name"
        :aria-label="logo.name" :title="logo.name" :src="logo.img">

    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
// import Modal from "@/components/Modal.vue";

export default {
  name: "FeaturedSection",

  setup() {
    const sectionGrids = [{ name: 'barclays', img: 'url(' + require('@/assets/large/barclays-desktop.webp') + ')', details: { title: 'Office Quiz Leaderboard', top: false, caseStudy: 'An electron based database which allowed Barclays offices in mulitple regions to record gaming scores.', agency: 'Event Engineering', skills: [{ name: 'electron' }, { name: 'vue' }, { name: 'js' }] }, },
    { name: 'james-bond', img: 'url(' + require('@/assets/featured/james-bond.webp') + ')', details: { title: 'James Bond - Pod Experience', top: false, caseStudy: 'An in mall pod experience ', agency: 'Event Engineering', skills: [{ name: 'electron' }, { name: 'vue' }, { name: 'js' }] }, },
    { name: 'bullring', img: 'url(' + require('@/assets/featured/bullring.webp') + ')', details: { title: 'Bullring Shopping Centre - Crystal Maze', top: false, caseStudy: 'Crystal Maze Leaderboard/Database - A shopping center gaming experience. Based off the Barclays version ', agency: 'Event Engineering', skills: [{ name: 'electron' }, { name: 'vue' }, { name: 'js' }] } },
    { name: 'weather', img: 'url(' + require('@/assets/featured/weather-mobile.webp') + ')', details: { title: 'Weather Dashboard', top: true, caseStudy: 'Dashboard with dynamic themeing and location Search capabilities', skills: [{ name: 'vue' }, { name: 'js' }] } },
    { name: 'cac', img: 'url(' + require('@/assets/featured/cac.webp') + ')', details: { title: 'Presentation Viewer', top: false, caseStudy: 'A presentation viewer and database based off the Marp markup language; integrated with Notion database REST API', skills: [{ name: 'Angular' }, { name: 'ts' }] } },
    { name: 'hsbc', img: 'url(' + require('@/assets/featured/hsbc.webp') + ')', details: { title: 'HSBC Fund Management', top: true, caseStudy: 'A fund management portal for High Net Worth and Very High Net Worth clients and Agents, Tailored for HSBC and Schroders', agency: 'InvestCloud', skills: [{ name: 'css' }, { name: 'HTML' }] } },
    { name: 'sky', img: 'url(' + require('@/assets/featured/sky-go.webp') + ')', details: { title: 'Sky Movies - Pod experience', top: true, caseStudy: '', agency: 'event engineering', skills: [{ name: 'electron' }, { name: 'vue' }] } },
    ]

    // const clients = [{ name: 'sky', img: 'url(' + require('@/assets/logos/sky.svg') + ')' }]
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



    return {
      sectionGrids,
      clients,
      topSkills,

    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/style.scss";


.section {
  // display: flex;
  // grid-gap: 25px;
  // flex-direction: column;
  // justify-content: center;
  // width: 100%;

  // .section__title {
  // margin: 0;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: 10%;
  // width: 100%;
  // font-size: 2em;

  // }

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
      transition: background-position 0.2s ease, filter 0.2s ease;
      outline-color: color-mix(in srgb, var(--section-bg-color) 20%, #0a0a0a);

      &:hover,
      &:focus-within {
        filter: brightness(0.9);
        cursor: pointer;

        .hidden-details {
          opacity: 1;
        }
      }

      &:focus-within {
        outline-style: dashed;
        outline-width: 2px;
      }

      .hidden-details {

        display: grid;
        gap: 0.3em 0;
        padding: 0.5em 0.6em;
        background: color-mix(in srgb, var(--section-bg-color) 80%, #0a0a0acc);
        filter: brightness(1.4);
        opacity: 0;
        text-align: left;
        transition: opacity 0.4s ease-in;
        border-radius: 0px 0px 14px 14px;


        .hidden-details__title {
          margin: 0;
          font-size: 0.9em;
        }

        .hidden-details__desc {
          margin: 0;
          font-size: 0.8em;
        }
      }

      &:where(:nth-child(2n)) {
        --section-bg-color: black;
      }

      &:where(:nth-child(2n-1)) {
        --section-bg-color: blue;
      }

      &--barclays {
        grid-row: 1/span 8;
        grid-column: 1/span 6;

        --section-bg-color: #f7fcfe;
        background-position: -40px 10px;

        &:hover,
        &:focus-within {
          background-position: 0 10px;
        }
      }

      &--james-bond {
        --section-bg-color: #0e0e45;

        grid-row: span 5;
        grid-column: span 12;
        background-size: cover;
        background-position: 0 -100px;
        color: #fafafa;
      }

      &--bullring {
        grid-row: span 12;
        grid-column: span 6;
        background-size: cover;
        --section-bg-color: #600000;
        color: #fafafa;


        background-position: right 0;
      }

      &--weather {
        grid-row: 9/span 12;
        grid-column: 1/span 6;
        // place-items: start stretch;

        --section-bg-color: #e0dfe1;
        background-position: 0 75px;

        &:hover,
        &:focus-within {
          background-position: 0% 50px;
        }
      }

      &--hsbc {
        // place-items: start stretch;

        grid-row: 13/span 8;
        grid-column: 19/span 6;
        --section-bg-color: #dd9fa2;
        background-size: cover;
        background-position: 50px 50px;

        &:hover,
        &:focus-within {
          background-position: 20px 40px;

        }

      }

      &--cac {
        grid-row: 6/span 11;
        grid-column: 7/span 12;
        --section-bg-color: #e8e0de;
        background-position: -60px 0;

        &:hover,
        &:focus-within {
          background-position: 0 0;
        }

      }

      &--sky {
        grid-row: 17/span 4;
        grid-column: 7/span 12;
        background-size: cover;
        background-position: 0 center;
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

    .logo {
      transition: align-self 0.5s;
      transition: align-self 0.5s, height 0.2s allow-discrete;
      height: 120px;

      &:hover,
      &:focus-within {
        align-self: flex-start;
        cursor: pointer;
      }
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
</style>