<script setup>
import HeaderR from "./components/HeaderR.vue";
import { ref, computed } from "vue";
import Home from "./components/pages/Home.vue";
import BrowseRecipe from "./components/pages/BrowseRecipe.vue";
import CreateRecipe from "./components/pages/CreateRecipe.vue";
import About from "./components/pages/About.vue";
import FooterR from "./components/FooterR.vue";
import LoginPage from "./components/views/LoginPage.vue";
import RegisterationPage from "./components/views/RegisterationPage.vue";

const routes = {
  "/": Home,
  "/browse": BrowseRecipe,
  "/create": CreateRecipe,
  "/about": About,
  "/login": LoginPage,
  "/register": RegisterationPage
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});

const showHeaderFooter = computed(() => {
  return currentPath.value !== "#/login" && currentPath.value !==  "#/register";
})
</script>



<template>
<div>
  <header v-if="showHeaderFooter">
    <HeaderR />
  </header>
  <main>
    
    <component :is="currentView" />
  </main>
  <footer v-if="showHeaderFooter">
    <FooterR />
  </footer>
</div>
  
</template>