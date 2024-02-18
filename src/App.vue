<script setup>
import HeaderR from "./components/HeaderR.vue";
import { ref, computed } from "vue";
import Home from "./components/pages/Home.vue";
import BrowseRecipe from "./components/pages/BrowseRecipe.vue";
import CreateRecipe from "./components/pages/CreateRecipe.vue";
import About from "./components/pages/About.vue";
import FooterR from "./components/FooterR.vue";

const routes = {
  "/": Home,
  "/browse": BrowseRecipe,
  "/create": CreateRecipe,
  "/about": About,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <header>
    <HeaderR />
  </header>
  <main>
    <component :is="currentView" />
  </main>
  <footer>
    <FooterR />
  </footer>
</template>
