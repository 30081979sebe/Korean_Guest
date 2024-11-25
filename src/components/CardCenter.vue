<script setup>
</script>


<template>
  <template>
  <section class="container mx-auto px-4 mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center text-korea-gold">Nos Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white bg-opacity-10 p-6 rounded-lg text-center"
      >
        <i :class="service.icon" class="text-4xl text-korea-gold mb-4"></i>
        <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardCenter.vue",
  data() {
    return {
      services: [
        {
          icon: "fas fa-bed",
          title: "Chambres Traditionnelles",
          description: "Dormez dans le confort d'un authentique hanok",
        },
        {
          icon: "fas fa-utensils",
          title: "Cuisine Coréenne",
          description: "Dégustez des plats traditionnels faits maison",
        },
        {
          icon: "fas fa-spa",
          title: "Expériences Culturelles",
          description:
            "Participez à des ateliers et des cérémonies traditionnelles",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>

  

</template> 