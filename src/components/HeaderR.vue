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

   

    window.addEventListener("scroll", function(){
        var header = this.document.querySelector("nav");
        header.classList.toggle("stickyy", window.scrollY > 0)
    })
</script>


<template>
    <nav class="p-2 fixed bg-[#11111F] w-screen top-0 left-0 duration-500 z-10">
        <div class="flex justify-between mx-5 bg-mainc items-center ">
            <p class="text-white font-bold relative duration-500 tracking-wider">RECIPE REALEM </p>
            <!-- Use PascalCase for component name -->
            <SearchBar />
            <ul class="flex gap-7  h-fit text-white p-2 px-14 rounded-lg items-center tracking-wide">
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

<style>

nav.stickyy {
    padding:4px 10px;
    background-color: #fff;
}
nav.stickyy p {
    letter-spacing: 0.1em;
}
nav.stickyy p,
nav.stickyy a{
    color:#000;
    
}

</style>