<template>
    <div class="h-[200vh] bg-[#11111f] p-5 ">
      <div class="w-full h-[100vh] flex items-center">
        <div class="w-1/2 bg-[#fff] mx-3 p-7 py-24 bg-opacity-0 hover:bg-opacity-20 rounded-lg duration-700 items-center flex flex-col justify-center shadow-lg shadow-white/20 ">
            <p class="anim mb-4 text-6xl font-extrabold tracking-[0.2em]">welcome</p>
          <p class="text-white protest text-center font-extrabold text-5xl ">Unleash Your Inner <span class="text-[#F4CE14]">Chef</span>, Explore Infinite Tastes</p>
          <div class="flex space-x-4 mt-5 font-bold">
            <button class="tracking-wide bg-[#F4CE14] px-3 py-1 rounded">Create Recipe</button>
            <button class="bg-[#F4CE14] px-3 py-1 text-black rounded">Sign In</button>
          </div>
        </div>
  
        <div class=" w-1/2">
          <transition name="slide" mode="out-in">
            <img :key="currentIndex" :src="images[currentIndex]" alt="Slide" class="rounded-lg w-full object-cover h-[450px] shadow-sm shadow-white/20">
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          '/toa-heftiba-_hqV-h2sQHM-unsplash.jpg',
          '/public/jeff-sheldon-6MT4_Ut8a3Y-unsplash.jpg',
          '/public/kristine-tumanyan-lXTOsdII3DE-unsplash.jpg'
        ],
        currentIndex: 0,
        intervalId: null, // To store interval ID
        autoSlideDelay: 8000 // Delay in milliseconds between slides
      };
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      this.stopAutoSlide();
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      startAutoSlide() {
        this.intervalId = setInterval(this.nextSlide, this.autoSlideDelay);
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      }
    }
  };
  </script>
  
  <style scoped>
  .image-slider {
    text-align: center;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }
  </style>
  