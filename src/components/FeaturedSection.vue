<template>
  <div class="featured-section section" id="featured">
    <h2 class="featured-section__title section__title">Featured</h2>

    <div class="section-main">

      <div class="section-grid" v-for="grid in  sectionGrids " :key="grid.name" :class="'section-grid--' + grid.name"
        :style="{
          backgroundImage: grid.img,
        }
          " :aria-label="grid.name" :title="grid.name">
      </div>
    </div>
  </div>


  <div class="section">
    <h2 class="section__title">Clients</h2>
    <div class="section-partial section-partial--right">
      <img class="logo" v-svg-inline v-for="logo in  clients " :key="logo.name" :class="'logo--' + logo.name"
        :aria-label="logo.name" :title="logo.name" :src="logo.img">
      <!-- <img v-svg-inline class="icon" :src="logo.img" alt="example svg image" /> -->
      <!-- <object data="../assets/logos/sky.svg" type="" height="200" width="200"></object> -->
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
    const sectionGrids = [{ name: 'barclays', img: 'url(' + require('@/assets/large/barclays-desktop.webp') + ')' },
    { name: 'james-bond', img: 'url(' + require('@/assets/featured/james-bond.webp') + ')' },
    { name: 'bullring', img: 'url(' + require('@/assets/featured/bullring.webp') + ')' },
    { name: 'weather', img: 'url(' + require('@/assets/featured/weather-mobile.webp') + ')' },
    { name: 'cac', img: 'url(' + require('@/assets/featured/cac.webp') + ')' },
    { name: 'hsbc', img: 'url(' + require('@/assets/featured/hsbc.webp') + ')' },
    { name: 'sky', img: 'url(' + require('@/assets/featured/sky-go.webp') + ')' },
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

  .section__title {
    // margin: 0;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 10%;
    // width: 100%;
    // font-size: 2em;

  }

  .section-main {
    width: 75vw;
    // border: solid black 1px;
    border-radius: 14px;
    margin: 0 auto;
    //     grid-template-areas:
    //       'barclays barclays barclays barclays james-bond james-bond james-bond james-bond james-bond bullring bullring bullring bullring
    //  barclays barclays barclays barclays james-bond james-bond james-bond james-bond james-bond bullring bullring bullring bullring
    //       barclays barclays barclays barclays cac cac cac cac cac bullring bullting bullring bullting
    //       weather weather weather weather cac cac cac cac cac bullring bullring bullring bullting
    //       weather weather weather weather cac cac cac cac cac hsbc hsbc hsbc hsbc
    //       weather weather weather weather sky sky sky sky sky hsbc hsbc hsbc hsbc';

    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(20, 1fr);
    aspect-ratio: 5/3;
    display: grid;
    gap: 0.5em;

    div.section-grid {
      border-radius: 14px;
      --section-bg-color: blue;
      background-color: var(--section-bg-color);
      background-size: contain;
      background-repeat: no-repeat;
      // transition: filter 0.2s ease;
      transition: background-position 0.2s ease, filter 0.2s ease;


      &:hover {
        filter: brightness(0.95);
        cursor: pointer;
      }

      &:where(:nth-child(2n)) {
        // aspect-ratio: 4/3;
        // background: black;
        --section-bg-color: black;


      }

      &:where(:nth-child(2n-1)) {
        // aspect-ratio: 4/3;
        // background: blue
        --section-bg-color: blue;
        ;

      }

      &--barclays {
        grid-row: 1/span 8;
        grid-column: 1/span 6;
        --section-bg-color: #f7fcfe;
        background-position: -40px 10px;
        // --section-bg-color: #5f95b3;
        // background: color-mix(in srgb, var(--section-bg-color), #f7fcfe 80%);
        // background: black;

        &:hover {
          background-position: 0 10px;
        }
      }

      &--james-bond {
        grid-row: span 5;
        grid-column: span 12;
        background-size: cover;
        background-position: 0 -100px;
      }

      &--bullring {
        grid-row: span 12;
        grid-column: span 6;
        background-size: cover;
        background-position: right 0;
      }

      &--weather {
        grid-row: 9/span 12;
        grid-column: 1/span 6;
        --section-bg-color: #e0dfe1;
        background-position: 0 75px;

        &:hover {
          background-position: 0% 50px;

        }

        // background: black;
      }

      &--hsbc {
        grid-row: 13/span 8;
        grid-column: 19/span 6;
        --section-bg-color: #dd9fa2;
        background-size: cover;
        background-position: 50px 50px;

        &:hover {
          background-position: 20px 40px;

        }

      }

      &--cac {
        grid-row: 6/span 11;
        grid-column: 7/span 12;
        --section-bg-color: #e8e0de;
        background-position: -60px 0;

        &:hover {
          background-position: 0 0;
        }

      }

      &--sky {
        grid-row: 17/span 4;
        grid-column: 7/span 12;
        background-size: cover;
        background-position: 0 center;
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

      // &--barclays {
      //   padding-block: 10px;

      // }

      &:hover {
        // height: 135px;
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
      width: 95vw;
      aspect-ratio: 5/4;


    }

    .section-partial {
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;

      .logo {
        height: 100px;
      }
    }

  }
}

@media only screen and (max-width: 900px) {
  .section {
    .section-main {
      width: 90vw;
      aspect-ratio: 4/3;

      // aspect-ratio: 5/4;


    }

  }
}
</style>