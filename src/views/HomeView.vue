<template>
  <div class="home">
    <BioSection />
    <WorkSection />
    <ResumeSection />
    <!-- <BioSection />
    <BioSection /> -->

    <div class="contact-section" id="contact">
      <h1 class="contact">Contact Me</h1>
      <a href="tel:+447427476129" class="phone">
        <div class="phone"><i class="las la-phone"></i> +447427476129</div>
      </a>
      <a href="mailto:samuel.ademola43+dev@gmail.com" class="email">
        <div class="email">
          <i class="las la-at"></i> samuel.ademola43+dev@gmail.com
        </div>
      </a>
    </div>
  </div>
  <!-- <div class="design-reference-section">
    <p>
      The design reference for this portfolio design can be found
      <a
        href="https://dribbble.com/shots/15376990-Portfolio-page-for-Java-Developer"
        target="_blank"
        rel="noopener"
        >here.</a
      >
    </p>
  </div> -->
</template>

<script>
import { computed, ref } from "@vue/reactivity";
// @ is an alias to /src
import { widthFunction } from "@/composables/Mobile";
import BioSection from "@/components/BioSection.vue";
import WorkSection from "@/components/WorkSection.vue";
import ResumeSection from "@/components/ResumeSection.vue";
// import WorkSection from "@/components/WorkSection.vue";

export default {
  name: "HomeView",
  components: {
    BioSection,
    WorkSection,
    ResumeSection,
    // BioSection,
  },
  setup(props) {
    const { width, setMobile, getScreenCategory } = widthFunction();

    return {
      getScreenCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/theme.scss";

.home {
  display: grid;
  place-items: center;
  width: 100%;
  max-width: min(1400px, 95vw);
  margin: 20px auto;
  grid-gap: 40px;
  & > div {
    width: 100%;
  }

  .contact-section {
    display: flex;
    grid-gap: 15px;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.0666666667);

    i {
      color: green;
    }
  }

  a {
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
