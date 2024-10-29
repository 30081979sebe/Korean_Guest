<script>
import FooterItems from '@/components/FooterItems.vue';
import NavBar from '@/components/NavBar.vue';
import CalendarButton from '@/components/CalendarButton.vue';

export default {
  components: {
    NavBar,
    FooterItems,
    CalendarButton
  }
};
</script>




<template>
  <NavBar />
  <CalendarButton />
  <FooterItems />
</template>


<style scoped>

</style>

