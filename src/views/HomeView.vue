<script>

import CarrouselHome from '@/components/CarrouselHome.vue';
import FooterItems from '@/components/FooterItems.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    CarrouselHome,
    NavBar,FooterItems
  }
};
</script>


<template>
  <NavBar/>
  <div class="container mx-auto h-screen">
    <CarrouselHome />
  </div>
  <FooterItems/>
</template>


<style scoped>
</style>

