
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 xl:text-[17px]">
      <div class="rounded-lg p-8 max-w-md w-full">
        <h1 class="text-2xl font-bold mb-1">Nous contacter</h1>
        <hr class="bg-black h-1 mb-6">
        <p class="mb-1">Notre adresse postale est:</p>
        <p class="mb-1">177 Walkerhill-ro, Gwangjin-gu</p>
        <p class="mb-12">Tél. : +82 1670 0005</p>
        <p class="mb-10">“Une grande vision sans des gens formidables n'a pas d'importance.Travaillons ensemble”</p>
        
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Votre nom</label>
            <input type="text" id="name" v-model="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>
          
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Votre email</label>
            <input type="email" id="email" v-model="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>
          
          <div class="mb-4">
            <label for="message" class="block text-gray-700">Votre message</label>
            <textarea id="message" v-model="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          
          <button type="submit" class="w-full py-2 px-4 bg-Gold text-black rounded-md shadow-md hover:bg-Primary-Green focus:outline-none focus:ring-2 focus:ring-Primary-Green focus:ring-opacity-50">Envoyer</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Logique d'envoi du formulaire
        console.log({
          name: this.name,
          email: this.email,
          message: this.message
        });
        // Réinitialiser le formulaire après l'envoi
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style>
  
  </style>
  