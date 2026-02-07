<template>
  <div class="home">
    <div class="theme-toggle-container">
      <button class="theme-toggle" @click="cycleTheme" :title="`Cycle Theme (${currentMode})`">
        <svg class="theme-icon" viewBox="0 0 24 24">
          <path :d="icons[currentMode]" />
        </svg>
      </button>
      <span class="theme-label">{{ currentMode }}</span>
    </div>

    <canvas id="physics-canvas"></canvas>

    <progressMenu />
    <BioSection />
    <FeaturedSection />
    <ProjectSection />

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
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Matter from "matter-js";
import BioSection from "@/components/BioSection.vue";
import ProjectSection from "@/components/PersonalProjects.vue";
import FeaturedSection from "@/components/FeaturedSection.vue";
import progressMenu from "@/components/progress.vue";

// Theme Management
const currentMode = ref(localStorage.getItem("portfolio-theme") || "auto");
const icons = {
  light:
    "M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2l0,2 c0,0.55,0.45,1,1,1s1-0.45,1-1l0-2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20l0,2c0,0.55,0.45,1,1,1s1-0.45,1-1l0-2 c0-0.55-0.45-1-1-1S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z",
  dark: "M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z",
  auto: "M20 18H4V6h16v12zm0-14H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM13 19h-2v2h2v-2z",
};

const updateTheme = () => {
  const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  document.body.classList.remove("theme-dark");

  if (
    currentMode.value === "dark" ||
    (currentMode.value === "auto" && isDarkPreferred)
  ) {
    document.body.classList.add("theme-dark");
  }

  localStorage.setItem("portfolio-theme", currentMode.value);
};

const cycleTheme = () => {
  if (currentMode.value === "auto") currentMode.value = "light";
  else if (currentMode.value === "light") currentMode.value = "dark";
  else currentMode.value = "auto";
  updateTheme();
};

watch(currentMode, updateTheme);

// Physics Engine
let engine, render, runner;
const initPhysics = () => {
  const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } =
    Matter;
  engine = Engine.create();
  engine.gravity.y = 0.6;

  const canvas = document.getElementById("physics-canvas");
  if (!canvas) return;

  render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: "transparent",
    },
  });

  const skills = [
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Vue",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Angular",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "HTML",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Sass",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      name: "Python",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Electron",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
    },
    {
      name: "Webpack",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
    },
    {
      name: "Figma",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "GSAP",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/greensock/greensock-original.svg",
    },
  ];

  const ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 50,
    window.innerWidth,
    100,
    { isStatic: true, label: "ground" }
  );
  const leftWall = Bodies.rectangle(
    -50,
    window.innerHeight / 2,
    100,
    window.innerHeight,
    { isStatic: true, label: "leftWall" }
  );
  const rightWall = Bodies.rectangle(
    window.innerWidth + 50,
    window.innerHeight / 2,
    100,
    window.innerHeight,
    { isStatic: true, label: "rightWall" }
  );

  const pebbleSize = 50;
  const startX = 100;
  const startY = window.innerHeight - 100;

  skills.forEach((skill, index) => {
    const img = new Image();
    img.onload = () => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const x = startX + col * (pebbleSize + 10) + row * 15;
      const y = startY - row * (pebbleSize + 10);

      const pebble = Bodies.circle(x, y, pebbleSize / 2, {
        restitution: 0.5,
        friction: 0.1,
        frictionAir: 0.03,
        render: {
          sprite: {
            texture: skill.url,
            xScale: pebbleSize / 128,
            yScale: pebbleSize / 128,
          },
        },
      });
      Composite.add(engine.world, pebble);
    };
    img.src = skill.url;
  });

  Composite.add(engine.world, [ground, leftWall, rightWall]);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.15,
      render: { visible: false },
    },
  });
  Composite.add(engine.world, mouseConstraint);

  Render.run(render);
  runner = Runner.create();
  Runner.run(runner, engine);
};

const handleResize = () => {
  if (render) {
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;

    const ground = engine.world.bodies.find((b) => b.label === "ground");
    const leftWall = engine.world.bodies.find((b) => b.label === "leftWall");
    const rightWall = engine.world.bodies.find((b) => b.label === "rightWall");

    if (ground)
      Matter.Body.setPosition(ground, {
        x: window.innerWidth / 2,
        y: window.innerHeight + 50,
      });
    if (leftWall)
      Matter.Body.setPosition(leftWall, {
        x: -50,
        y: window.innerHeight / 2,
      });
    if (rightWall)
      Matter.Body.setPosition(rightWall, {
        x: window.innerWidth + 50,
        y: window.innerHeight / 2,
      });
  }
};

onMounted(() => {
  updateTheme();
  initPhysics();
  window.addEventListener("resize", handleResize);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateTheme);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  if (runner) Matter.Runner.stop(runner);
  if (render) {
    Matter.Render.stop(render);
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
  }
});
</script>

<style lang="scss" scoped>
@import "./../styles/theme.scss";

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: min(1400px, 100vw);
  margin: 0 auto;
  grid-gap: 1em 0;
  transition: background-color var(--transition-speed),
    color var(--transition-speed);
  min-height: 100vh;
}

#physics-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  opacity: var(--canvas-opacity);
  transition: opacity var(--transition-speed) ease;
}

.theme-toggle-container {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.theme-toggle {
  background: var(--highlight-bg);
  color: var(--highlight-text);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color var(--transition-speed) ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
}

.theme-label {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--subtitle-color);
  background: rgba(128, 128, 128, 0.1);
  padding: 2px 8px;
  border-radius: 10px;
}

.contact-section {
  width: 100%;
  display: flex;
  grid-gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background: rgba(0, 0, 0, 0.05);

  i {
    color: green;
  }
}

a {
  color: var(--text-main);

  &:hover {
    text-decoration: underline;
  }
}
</style>
