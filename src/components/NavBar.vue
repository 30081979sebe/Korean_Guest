<!-- ./src/components/NavBar.vue -->
<script setup>
import { RouterLink } from 'vue-router';


document.addEventListener('DOMContentLoaded', function() {
            const btn = document.getElementById('menu-btn');
            const mobileMenu = document.querySelector('.mobile-menu');

            btn.addEventListener('click', function() {
                btn.classList.toggle('open');
                mobileMenu.classList.toggle('hidden');
            });
});

</script>

<template>
  <nav class="glassy-black sticky top-0 w-full z-10 h-[100px]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div class="flex items-center justify-between h-full">
                <!-- Logo -->
                <div class="flex-shrink-0 order-2 md:order-1">
                    <img src="/src/assets/images/Logos/Logo_Nav_Bar.png" class="h-[140px] w-[140px]" alt="">
                </div>

                <!-- Menu central pour desktop -->
                <div class="hidden md:block flex-grow order-3 md:order-2">
                    <div class="flex justify-center items-center h-full space-x-2">
                      <RouterLink to="/" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Accueil</RouterLink>
                      <RouterLink to="/" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Hanoks</RouterLink>
                      <RouterLink to="/connexion"  class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Connexion</RouterLink>
                      <RouterLink to="/about"  class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Contact</RouterLink>
                    </div>
                </div>

                <!-- Réseaux sociaux -->
                <div class="hidden md:flex items-center space-x-6 order-3">
                    <a href="https://facebook.com" class="text-white hover:text-blue-400 transition duration-300">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                    </a>
                    <a href="https://instagram.com" class="text-white hover:text-pink-400 transition duration-300">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                    </a>
                    <a href="https://pinterest.com" class="text-white hover:text-red-500 transition duration-300">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"></path>
                        </svg>
                    </a>
                </div>

                <!-- Bouton hamburger animé pour mobile -->
                <div class="md:hidden flex items-center order-1 md:order-3">
                    <button type="button" id="menu-btn" class="hamburger block focus:outline-none">
                        <span class="hamburger-top"></span>
                        <span class="hamburger-middle"></span>
                        <span class="hamburger-bottom"></span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Menu mobile -->
        <div class="mobile-menu hidden md:hidden bg-Primary-Black bg-opacity-95">
            <div class="px-2 pt-2 pb-3 flex flex-col space-y-1 sm:px-3">
              <RouterLink to="/" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Accueil</RouterLink>
              <RouterLink to="/connexion" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Connexion</RouterLink>
              <RouterLink to="/"  class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">À propos</RouterLink>
              <RouterLink to="/about"  class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition duration-300">Contact</RouterLink>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center justify-center space-x-6 px-5">
                    <a href="https://facebook.com" class="text-white hover:text-blue-400 transition duration-300">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                    </a>
                    <a href="https://instagram.com" class="text-white hover:text-pink-400 transition duration-300">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                    </a>
                    <a href="https://pinterest.com" class="text-white hover:text-red-500 transition duration-300">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
  .glassy-black {
            background: rgba(0, 0, 0, 0.901);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hamburger {
            cursor: pointer;
            width: 30px;
            height: 30px;
            transition: all 0.25s;
            position: relative;
        }
        .hamburger-top,
        .hamburger-middle,
        .hamburger-bottom {
            position: absolute;
            width: 30px;
            height: 3px;
            top: 0;
            left: 0;
            background: #ffffff;
            transform: rotate(0);
            transition: all 0.5s;
        }
        .hamburger-middle {
            transform: translateY(10px);
        }
        .hamburger-bottom {
            transform: translateY(20px);
        }
        .open {
            transform: rotate(90deg);
        }
        .open .hamburger-top {
            transform: rotate(45deg) translateY(6px) translateX(6px);
        }
        .open .hamburger-middle {
            display: none;
        }
        .open .hamburger-bottom {
            transform: rotate(-45deg) translateY(6px) translateX(-6px);
        }
</style>
  
