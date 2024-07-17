<!-- ./src/components/NavBar.vue -->
<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="sticky top-0 bg-gray-800 w-[99%] mx-auto rounded-md shadow-xl sm:h-28 ">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 sm:h-24">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Bouton pour mobile -->
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span class="sr-only">Menu</span>
            <div v-if="!isMenuOpen">
              <span class="block w-6 h-0.5 bg-current mb-1"></span>
              <span class="block w-6 h-0.5 bg-current mb-1"></span>
              <span class="block w-6 h-0.5 bg-current"></span>
            </div>
            <div v-else>
              <span class="block w-6 h-0.5 bg-current transform rotate-45 translate-y-2"></span>
              <span class="block w-6 h-0.5 bg-current transform -rotate-45 -translate-y-2"></span>
            </div>
          </button>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="flex-shrink-1 order-2 sm:order-1 w-1/3 items-start">
            <img :class="{'hidden': isMenuOpen, 'block': !isMenuOpen, 'sm:hidden': isMenuOpen}" class=" xl:h-[200px] xl:w-[200px] xl:mt-4 md:h-[150px] md:w-[150px] ml-4 sm:h-32 sm:w-32 min-[375px]:ml-[120px]
            min-[425px]:ml-[140px] min-[768px]:ml-[20px] min-[320px]:ml-[100px] " src="/src/assets/images/Logos/Logo_Nav_Bar.png" alt="Logo">
          </div>
          <div class="hidden sm:flex sm:space-x-4  flex-1 order-1 sm:order-2 w-1/3 justify-start">
            <RouterLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home</RouterLink>
            <RouterLink to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Contact</RouterLink>
            <RouterLink to="/connexion" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Connexion</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center h-full divide-y ">
        <img class="h-[150px] w-[150px] mb-4" src="/src/assets/images/Logos/Logo_Nav_Bar.png" alt="Logo">
        <RouterLink to="/" class="w-30 justify-center text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2  text-lg font-medium">Home</RouterLink>
        <RouterLink to="/about" class="text-gray-300 hover:bg-amber-400 hover:text-white block px-3 py-2  text-base font-lg">Contact</RouterLink>
        <RouterLink to="/connexion" class="text-gray-300 hover:bg-sky-600 hover:text-white block px-3 py-2  text-base font-lg">Connexion</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Ajoutez des styles spécifiques à votre composant ici */
</style>
