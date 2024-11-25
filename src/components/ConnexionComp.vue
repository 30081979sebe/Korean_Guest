<script setup>


</script>

<template>
  <div class="bg-Primary-blue h-screen flex items-center justify-center">
    <div class="bg-Primary-White p-8 rounded-lg shadow-md bg-opacity-10">
    <div class="flex space-x-32 ">
      <h1 class="text-2xl font-bold mb-6 text-start text-Primary-White">Connexion</h1>
      <h1 class="text-2xl font-bold mb-6 text-start text-Primary-White">Inscription</h1>
    </div>
    <div class="flex flex-row space-x-10">
    <form class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-Primary-White">Adresse e-mail</label>
        <input type="email" id="email" name="email" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Primary-Gold focus:border-Primary-Gold">
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-Primary-White">Mot de passe</label>
        <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Primary-Gold focus:border-Primary-Gold">
      </div>
      
      <div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-Primary-Blue bg-Primary-Gold hover:bg-Primary-Gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Primary-Gold">
          Se connecter
        </button>
      </div>
    </form>
    <form class="space-y-4">
      <div class="flex space-x-40">
        <label for="name" class="block text-sm font-medium text-Primary-White">Nom</label>
        <label for="name" class="block text-sm font-medium text-Primary-White">Prénom</label>
      </div>
      <div class="flex space-x-2">
        <input type="text" id="nom" name="nom" required class="mt-1 block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Primary-Gold focus:border-Primary-Gold text-Primary-Blue">
        <input type="text" id="prenom" name="prenom" required class="mt-1 block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Primary-Gold focus:border-Primary-Gold">
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-Primary-White">Mot de passe</label>
        <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Primary-Gold focus:border-Primary-Gold">
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-Primary-White">Confirmer le mot de passe</label>
        <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Primary-Gold focus:border-Primary-Gold">
      </div>
      <div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-Primary-Blue bg-Primary-Gold hover:bg-Primary-Gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Primary-Gold">
          Se connecter
        </button>
      </div>
    </form>

    </div>
    
    
    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">Ou continuez avec</span>
        </div>
      </div>
      
      <div class="mt-6 grid grid-cols-2 gap-3">
        
      </div>
    </div>
  </div>
  </div> 
</template>

<style scoped>

</style>