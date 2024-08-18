<script>
import FooterItems from '@/components/FooterItems.vue';
import NavBar from '@/components/NavBar.vue';
import ConnexionComp from '@/components/ConnexionComp.vue';

export default {
  components: {
    NavBar,
    FooterItems,
    ConnexionComp
  }
};


</script>

<template>
  <NavBar />
  <ConnexionComp/>
  <FooterItems />
</template>