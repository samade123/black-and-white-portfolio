<template>
  <div class="bio-section section" id="bio">
    <div class="banner-container">
      <div class="image-wrapper">
        <img :src="profileImage" alt="Sam's Portrait" />
      </div>

      <div class="content">
        <h1>Hey there! <br />I'm Sam and I'm a</h1>
        <div class="role-container">
          <span class="highlight-box">
            <span ref="roleRef" class="highlight-text">{{ roles[currentIndex] }}</span>
          </span>
          <div class="remaining-roles" :class="{ visible: showRemaining }">
            {{ remainingRolesText }}
          </div>
        </div>
        <p class="subtitle">Innovating Through Code & Architecture</p>

        <div class="buttons-div">
          <a href="#contact" class="btn btn-contact">Contact Me</a>
          <a href="#work" class="btn btn-work">Check my work</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { widthFunction } from "@/composables/Mobile";

const { getScreenCategory } = widthFunction();

const roles = [
  "Frontend Developer",
  "Solutions Architect",
  "Product Engineer",
  "AI Developer",
  "UX Consultant",
  "Accessibility Consultant",
];

const currentIndex = ref(0);
const showRemaining = ref(false);
const roleRef = ref(null);
let cyclesCompleted = 0;

const profileImage = computed(() => {
  return require(`@/assets/${getScreenCategory()}/me.webp`);
});

const remainingRolesText = computed(() => roles.slice(1).join(" | "));

onMounted(() => {
  const revolvingInterval = setInterval(() => {
    if (!roleRef.value) return;

    roleRef.value.style.opacity = "0";
    roleRef.value.style.transform = "skewX(5deg) translateY(40px)";

    setTimeout(() => {
      currentIndex.value++;
      if (currentIndex.value >= roles.length) {
        currentIndex.value = 0;
        cyclesCompleted++;
      }

      if (roleRef.value) {
        roleRef.value.style.transition = "none";
        roleRef.value.style.transform = "skewX(5deg) translateY(-40px)";
        roleRef.value.offsetHeight; // trigger reflow

        roleRef.value.style.transition = "all 0.6s cubic-bezier(0.76, 0, 0.24, 1)";
        roleRef.value.style.opacity = "1";
        roleRef.value.style.transform = "skewX(5deg) translateY(0)";
      }

      if (cyclesCompleted === 1 && currentIndex.value === 0) {
        clearInterval(revolvingInterval);
        showRemaining.value = true;
      }
    }, 600);
  }, 3000);
});
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/bio-section.scss";

.bio-section {
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;

  .banner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 60px;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }

  .image-wrapper {
    width: 320px;
    height: 420px;
    overflow: hidden;
    background: #ddd;
    animation: morph-complex 14s ease-in-out infinite;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%) contrast(1.1);
      display: block;
      transform: scale(1.2);
      transition: filter var(--transition-speed) ease;
    }
  }

  .content {
    text-align: left;
    flex-grow: 1;
    max-width: 800px;

    h1 {
      font-size: 3.5rem;
      margin: 0;
      line-height: 1.1;
      font-weight: 800;
      text-wrap: balance;
    }
  }

  .role-container {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .highlight-box {
    background: var(--highlight-bg);
    color: var(--highlight-text);
    padding: 12px 40px;
    display: inline-flex;
    transform: skewX(-5deg);
    min-height: 1.2em;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    min-width: 650px;
    justify-content: center;
    align-items: center;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .highlight-text {
    display: block;
    transform: skewX(5deg);
    transition: all 0.6s cubic-bezier(0.76, 0, 0.24, 1);
    white-space: nowrap;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 4px;
  }

  .remaining-roles {
    margin-top: 15px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--subtitle-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.6;
    opacity: 0;
    transform: translateY(10px);
    transition: all 1s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .subtitle {
    margin: 30px 0 40px 0;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--subtitle-color);
  }

  .buttons-div {
    justify-content: flex-start;
    max-width: 500px;
  }

  @keyframes morph-complex {

    0%,
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    20% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    40% {
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }

    60% {
      border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    80% {
      border-radius: 39% 61% 74% 26% / 64% 32% 68% 36%;
    }
  }

  @media (max-width: 1100px) {
    .banner-container {
      flex-direction: column;
      text-align: center;
      gap: 40px;
    }

    .content {
      text-align: center;
    }

    .role-container {
      align-items: center;
    }

    .highlight-box {
      min-width: 90%;
      padding: 10px 20px;
    }

    .highlight-text,
    h1 {
      font-size: 2.2rem;
    }

    .buttons-div {
      margin: 0 auto;
    }
  }
}

body.theme-dark {
  .bio-section .image-wrapper img {
    filter: grayscale(100%) contrast(1.2) brightness(0.8);
  }
}
</style>
