<template>
  <div class=" h-[200vh] mt-24">
    <nav class="z-10  pl-12 top-14 bg-white w-full sticky">
      <div class="flex  px- w-fit">
        <div class=" relative py-1 group">
          <a href="" class=" px- py-1  ">Food Catagory</a>
          <div class="hidden absolute left-2 group-hover:block">
            <ul class="bg-white text-center ">
              <li class="border px-10 py-1 "><a href="">Vegiterian</a></li>
              <li class="border px-10 py-1">Vegiterian</li>
              <li class="border px-10 py-1">Vegiterian</li>
              
             
              
            </ul>
          </div>
        </div>
        <div class=" px-2 py-1 relative group">
          <a href="" class=" px-3 py-1">Ingredient</a>
          <div class="hidden absolute group-hover:block">
            <ul class="bg-white text-center">
              <li class="border py-1">Vegiterian</li>
              <li class="border py-1">Vegiterian</li>
              <li class="border py-1">Vegiterian</li>
              <li>Vegiterian</li>
             
              
            </ul>
          </div>
        </div>
        <div class=" px-2 py-1 relative group">
          <a href="" class=" px-3 py-1">Creator</a>
          <div class="hidden absolute group-hover:block">
            <ul class="bg-white text-center">
              <li class="border px-3 py-1">Vegiterian</li>
              <li class="border px-3 py-1">Vegiterian</li>
              <li class="border px-3 py-1">Vegiterian</li>
              <li>Vegiterian</li>
             
              
            </ul>
          </div>
        </div>
        <div class=" px-2 py-1 relative group">
          <a href="" class=" px-3 py-1">Preparation Time</a>
          <div class="hidden absolute group-hover:block">
            <ul class="bg-white text-center">
              <li class="border py-1">Vegiterian</li>
              <li class="border py-1">Vegiterian</li>
              <li class="border py-1">Vegiterian</li>
              <li>Vegiterian</li>
             
              
            </ul>
          </div>
        </div>
        
      </div>
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
  
  export default {
    components: {
      'recipe-item': RecipeItem
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
  