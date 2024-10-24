<template>
  <header class="bg-black bg-opacity-50 backdrop-filter backdrop-blur-md sticky top-0 w-full z-50">
    <nav class="container mx-auto px-4 nav-height flex items-center">
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center text-3xl font-bold text-korea-gold">
            <img src="/src/assets/images/Logos/Logo_Nav_Bar.png" alt="Logo" class="h-[140px] md:h-[150px] md:mr-5">
          </router-link>
        </div>
        <ul class="hidden md:flex space-x-6">
          <li><router-link to="/" class="text-korea-gold">Accueil</router-link></li>
          <li><router-link to="/rooms" class="text-white hover:text-korea-gold transition">Chambres</router-link></li>
          <li><router-link to="/gallery" class="text-white hover:text-korea-gold transition">Galerie</router-link></li>
          <li><router-link to="/about" class="text-white hover:text-korea-gold transition">À Propos</router-link></li>
          <li><router-link to="/contact" class="text-white hover:text-korea-gold transition">Contact</router-link></li>
        </ul>
        <div class="flex items-center space-x-4">
          <button id="login-button" class="text-korea-gold hover:text-white transition hidden md:block">
            <i class="fas fa-user"></i>
          </button>
          <div
            class="hamburger-menu md:hidden"
            :class="{ 'open': isMobileMenuOpen }"
            @click="toggleMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
    <div class="md:hidden" :class="{ 'hidden': !isMobileMenuOpen }" id="mobile-menu">
      <ul class="space-y-2 px-4">
        <li><router-link to="/" class="block text-korea-gold">Accueil</router-link></li>
        <li><router-link to="/rooms" class="block text-white hover:text-korea-gold transition">Chambres</router-link></li>
        <li><router-link to="/gallery" class="block text-white hover:text-korea-gold transition">Galerie</router-link></li>
        <li><router-link to="/about" class="block text-white hover:text-korea-gold transition">À Propos</router-link></li>
        <li><router-link to="/contact" class="block text-white hover:text-korea-gold transition">Contact</router-link></li>
        <li>
          <button id="mobile-login-button" class="text-korea-gold hover:text-white transition flex items-center mt-2">
            <i class="fas fa-user mr-2"></i>
            Connexion
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>


body {
  font-family: 'Noto Serif KR', serif;
  background: linear-gradient(135deg, var(--korea-blue), var(--korea-blue-1));
  color: white;
}

.nav-height {
  height: 120px;
}

/* Hamburger Menu Animation */
.hamburger-menu {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.hamburger-menu span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--korea-gold);
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger-menu span:nth-child(1) {
  top: 0px;
}

.hamburger-menu span:nth-child(2),
.hamburger-menu span:nth-child(3) {
  top: 8px;
}

.hamburger-menu span:nth-child(4) {
  top: 16px;
}

.hamburger-menu.open span:nth-child(1) {
  top: 8px;
  width: 0%;
  left: 50%;
}

.hamburger-menu.open span:nth-child(2) {
  transform: rotate(45deg);
}

.hamburger-menu.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.hamburger-menu.open span:nth-child(4) {
  top: 8px;
  width: 0%;
  left: 50%;
}
</style>
