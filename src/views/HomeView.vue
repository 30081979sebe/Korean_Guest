<script>
import CardCenter from '@/components/CardCenter.vue';
import CarrouselHome from '@/components/CarrouselHome.vue';
import FooterItems from '@/components/FooterItems.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    CarrouselHome,CardCenter,
    NavBar,FooterItems
  }
};
</script>


<template>
  <NavBar/>
  <div class="container mx-auto">
    <CarrouselHome />
    <CardCenter/>
  </div>
  <FooterItems/>
</template>


<style scoped>
</style>

