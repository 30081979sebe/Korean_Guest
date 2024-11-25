<template>
  <header class="bg-korea-blue bg-opacity-50 backdrop-filter backdrop-blur-md sticky top-0 w-full z-50">
    <nav class="container mx-auto px-4 nav-height flex items-center">
      <div class="flex justify-between items-center w-full">
        <!-- Section Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center text-3xl font-bold text-korea-gold">
            <img src="/src/assets/images/Logos/Logo_Nav_Bar.png" alt="Logo" class="h-[120px] md:h-[150px] md:mr-5">
          </router-link>
        </div>

        <!-- Menu Principal Centré -->
        <ul class="hidden md:flex space-x-12 mx-auto">
          <li><router-link to="/" class="korea-white hover:bg-white hover:text-blue-500 px-1 py-2 rounded-md text-sm font-medium transition duration-300">Accueil</router-link></li>
          <li><router-link to="/rooms" class="korea-white hover:bg-white hover:text-blue-500 px-1 py-2 rounded-md text-sm font-medium transition duration-300">Hanoks</router-link></li>
          <li><router-link to="/gallery" class="korea-white hover:bg-white hover:text-blue-500 px-1 py-2 rounded-md text-sm font-medium transition duration-300">Galerie</router-link></li>
          <li><router-link to="/about" class="korea-white hover:bg-white hover:text-blue-500 px-1 py-2 rounded-md text-sm font-medium transition duration-300">À Propos</router-link></li>
          <li><router-link to="/contact" class="korea-white hover:bg-white hover:text-blue-500 px-1 py-2 rounded-md text-sm font-medium transition duration-300">Contact</router-link></li>
        </ul>

        <!-- Section Icône Utilisateur -->
        <div class="flex items-center mr-4 ml-6">
          <router-link to="/login" class="hidden md:block">
            <img src="/src/assets/images/white-user.png" alt="Icône Utilisateur" class="h-10 w-10">
          </router-link>
          <!-- Hamburger Menu pour Mobile -->
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

    <!-- Menu Mobile -->
    <div class="md:hidden" :class="{ 'hidden': !isMobileMenuOpen }" id="mobile-menu">
      <ul class="space-y-2 px-4">
        <li><router-link to="/" class="block text-korea-white">Accueil</router-link></li>
        <li><router-link to="/rooms" class="block text-white hover:text-korea-gold transition">Hanoks</router-link></li>
        <li><router-link to="/gallery" class="block text-white hover:text-korea-gold transition">Galerie</router-link></li>
        <li><router-link to="/about" class="block text-white hover:text-korea-gold transition">À Propos</router-link></li>
        <li><router-link to="/contact" class="block text-white hover:text-korea-gold transition">Contact</router-link></li>
        <li><router-link to="/contact" class="block text-white hover:text-korea-gold transition">Se connecter</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
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
  font-family: 'laila', serif;
  background: var(--korea-blue);
  color: korea-white;
}

.nav-height {
  height: 120px;
}

/* Centrage des éléments */
nav .flex {
  align-items: center;
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

