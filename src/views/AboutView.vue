<script>
import ContactForm from '@/components/ContactForm.vue';
import FooterItems from '@/components/FooterItems.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
    FooterItems,
    ContactForm
  }
};
</script>




<template>
  <NavBar />
  <ContactForm />
  <FooterItems />
</template>


<style scoped>

</style>

