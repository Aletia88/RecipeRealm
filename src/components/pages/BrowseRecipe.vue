<template>
  <div class=" h-[200vh] pt-20 ">
    <nav class=" border-b-[#F4CE14] border-solid border-b-1 z-10  pl-12 top-14 bg-white w-full sticky flex justify-around py-2 ">
      <div class="flex  w-fit">
        <div class=" relative py-1 group">
          <a href="" class=" px- py-1 tracking-wide visited:bg-black">Food Catagory</a>
          <div class="hidden absolute left-2 group-hover:block">
            <ul class="bg-white text-start border-t-2 border-t-[#11111f] ">
              <li class="border-b hover:border-b-[#f4ce14]  py-1"><a class=" px-10 w-full " href="">Breakfast</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Lunch</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Appetizers</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Salads</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Soups</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Desserts</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Breads</a></li>
           
            </ul>
          </div>
        </div>
        <div class=" px-2 py-1 relative group">
          <a href="" class=" px-3 py-1 tracking-wide">Ingredient</a>
          <div class="hidden absolute group-hover:block">
            <ul class="bg-white text-center ">
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
           
            </ul>
          </div>
        </div>
        <div class=" px-2 py-1 relative group">
          <a href="" class=" px-3 py-1 tracking-wide">Creator</a>
          <div class="hidden absolute group-hover:block">
            <ul class="bg-white text-center ">
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
           
            </ul>
          </div>
        </div>
        <div class=" px-2 py-1 relative group">
          <a href="" class=" px-3 py-1 tracking-wide">Preparation Time</a>
          <div class="hidden absolute group-hover:block">
            <ul class="bg-white text-center ">
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
              <li class="border-b  py-1"><a class=" px-10 w-full " href="">Vegiterian</a></li>
           
            </ul>
          </div>
        </div>
        
      </div>
      <SearchBar />
    </nav>
    <div class="flex w-full justify-center flex-wrap top-14 relative">
      <recipe-item 
        v-for="(recipe, index) in recipes"
        :key="index"
        :image-url="recipe.imageUrl"
        :image-alt="recipe.imageAlt"
        :description="recipe.description"
        :title="recipe.title"
      ></recipe-item>
      
    </div>
  </div>
    
  </template>
  
  <script>
  import RecipeItem from '../RecipeItem.vue';
  import SearchBar from '../SearchBar.vue';

  export default {
    components: {
      'recipe-item': RecipeItem,
      SearchBar
    },
    data() {
      return {
        recipes: [
          {
            imageUrl: [
              '/public/jeff-sheldon-6MT4_Ut8a3Y-unsplash.jpg',
              '/public/kristine-tumanyan-lXTOsdII3DE-unsplash.jpg'
          ],
            imageAlt: 'Delicious Recipe 1',
            description: 'Description for Recipe 1 Description for Recipe 1Description for Recipe 1 Description for Recipe 1 ',
            title: 'PASTA'
          },
          {
            imageUrl:[
              '/public/jeff-sheldon-6MT4_Ut8a3Y-unsplash.jpg',
              '/public/kristine-tumanyan-lXTOsdII3DE-unsplash.jpg'
          ],
            imageAlt: 'Delicious Recipe 1',
            description: 'Description for Recipe 1',
            title: 'Biscut'
          },
          {
            imageUrl:[
              '/public/jeff-sheldon-6MT4_Ut8a3Y-unsplash.jpg',
              '/public/kristine-tumanyan-lXTOsdII3DE-unsplash.jpg'
          ],
            imageAlt: 'Delicious Recipe 1',
            description: 'Description for Recipe 1',
            title: 'sandwich'
          },
          {
            imageUrl:[
              '/public/jeff-sheldon-6MT4_Ut8a3Y-unsplash.jpg',
              '/public/kristine-tumanyan-lXTOsdII3DE-unsplash.jpg'
          ],
            imageAlt: 'Delicious Recipe 1',
            description: 'Description for Recipe 1',
            title: 'doro wat'
          },
          // Add more recipe items as needed
        ]
      };
    },
    
  }
  </script>
  