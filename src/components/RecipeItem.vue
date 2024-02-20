<template>
  <div
    class="container border w-[300px] justify-center items-center rounded-lg m-4 "
  >
    <div class="rounded-lg relative flex justify-center">
      <div class="cover duration-700 w-full h-full absolute opacity-30 cursor-pointer"></div>
      <!-- Star ratings -->
      <transition name="slide">
        <img
          :src="imageUrl[currentIndex]"
          :alt="imageAlt"
          class="w-full  rounded-t p-0 m-0 cursor-pointer"
        />
      </transition>
      <ul class="flex absolute bg-white bg-opacity-60 p-1 rounded z-1 top-0 left-0 gap-1">
        <li class="cursor-pointer">
          <img src="/star-svgrepo-com.svg" class="w-5 " alt="" />
        </li>
        <li class="cursor-pointer">
          <img src="/star-svgrepo-com.svg" class="w-5" alt="" />
        </li>
        <li class="cursor-pointer">
          <img src="/star-svgrepo-com.svg" class="w-5" alt="" />
        </li>
        <li class="cursor-pointer">
          <img src="/star-svgrepo-com.svg" class="w-5" alt="" />
        </li>
        <li class="cursor-pointer">
          <img src="/star-svgrepo-com.svg" class="w-5" alt="" />
        </li>
      </ul>
      <!-- Recipe image -->

      <!-- Description -->
      <p
        class="description absolute delay-500 hidden bg-white bg-opacity-70 max-h-full text-center text-md py-4 tracking-wide rounded w-[90%] self-center justify-self-center"
      >
        {{ description }}
      </p>
      <!-- Title (if needed) -->
      <p
        v-if="title"
        class="absolute bottom-10 font-bold text-2xl px-2 uppercase shadow-md left-0 text-[] bg-white bg-opacity-90 w-full py-1"
      >
        {{ title }}
      </p>
      <div class="absolute flex bottom-2 right-2">
        <img src="/heart-alt-svgrepo-com.svg" alt="" class="heart w-[24px]" />
        <p class="pr-1 text-[#a3a3a3]">23</p>
        <img src="/bookmark-svgrepo-com.svg" alt="" class="w-[24px]" />
      </div>
    </div>
    <button
      class="bg-[#F4CE14] px-3 py-1 text-black w-full font-bold rounded-b"
    >
      Show Recipe
    </button>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: Array,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Recipe Image",
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "", // or remove this prop if not needed
    },
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      autoSlideDelay: 3000,
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
    },
  },
};
</script>
