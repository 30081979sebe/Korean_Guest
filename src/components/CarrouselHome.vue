<template>
    <div class="relative xl:w-full lg:w-full min-[375px]:w-full mx-auto  mb-8 mt-1 shadow-md border-solid rounded-lg z-0">
      <div class="flex overflow-hidden">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full flex-shrink-0  transform transition-transform duration-500 xl:h-[400px] lg:h-[300px] md:h-[250px]"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img :src="image" class="w-full xl:h-[800px] lg:h-[600px] md:h-[500px] object-cover">
        </div>
      </div>
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
      >
        &#10094;
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 opacity-30"
      >
        &#10095;
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          'https://picsum.photos/id/42/800/400?text=Slide+1',
          'https://picsum.photos/id/553/800/400?text=Slide+2',
          'https://picsum.photos/id/599/800/400?text=Slide+3'
        ]
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .carouselHome {
    transition: transform 0.5s ease-in-out;
  }
  </style>
  
