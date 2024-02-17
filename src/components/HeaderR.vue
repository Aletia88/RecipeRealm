<script setup>
    import { ref, computed } from 'vue'
    import Home from './pages/Home.vue';
    import BrowseRecipe from './pages/BrowseRecipe.vue';
    import CreateRecipe from './pages/CreateRecipe.vue';
    import About from './pages/About.vue';

    const routes = {
        '/':Home,
        '/browse': BrowseRecipe,
        '/create': CreateRecipe,
        '/about': About,

    }

    const currentPath = ref(window.location.hash)

    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })

    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || NotFound
    })
</script>


<template>
    <nav class="p-2 bg-[#11111F]">
        <div class="flex justify-between mx-5 bg-mainc items-center ">
            <img src="../../logo2.PNG" alt="" class="w-32">
            <!-- Use PascalCase for component name -->
            <SearchBar />
            <ul class="flex gap-7  h-fit text-white p-2 px-14 rounded-lg items-center">
                <li><a href="#/">Home</a></li>
                <li><a href="#/browse">Browse Recipe</a></li>
                <li><a href="#/create">Create Recipe</a></li>
                <li><a href="#/about">About</a></li>
                <li class="bg-[#F4CE14] px-3 py-1 text-black rounded "><a href="">Sign In</a></li>
               
            </ul>
        </div>
    </nav>
</template>

<script>
// Import the SearchBar component
import SearchBar from './SearchBar.vue';

export default {
    components: {
        SearchBar // Register the SearchBar component
    }
}
</script>
