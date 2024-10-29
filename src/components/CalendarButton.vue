<template>
    <div class="flex justify-center items-center h-screen">
      <!-- Bouton de réservation -->
      <div>
        <button
          @click="openPopup"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Réserver
        </button>
      </div>
  
      <!-- Pop-up de réservation -->
      <div
        v-if="isPopupOpen"
        class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 class="text-xl font-bold mb-4">Choisissez une période de réservation</h2>
  
          <!-- Sélection du calendrier -->
          <DatePicker
            v-model="selectedRange"
            :range="true"
            :model-config="{ start: 'startDate', end: 'endDate' }"
            :enableTimePicker="false"
            input-class="border rounded-lg px-3 py-2 w-full"
          />
  
          <!-- Boutons du pop-up -->
          <div class="flex justify-end mt-4 space-x-2">
            <button
              @click="closePopup"
              class="px-4 py-2 bg-gray-300 text-black rounded-lg"
            >
              Annuler
            </button>
            <button
              @click="validerReservation"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  
  export default {
    components: {
      DatePicker,
    },
    data() {
      return {
        isPopupOpen: false,
        selectedRange: {
          startDate: null,
          endDate: null,
        }, // Stocke la période sélectionnée
      };
    },
    methods: {
      openPopup() {
        this.isPopupOpen = true;
      },
      closePopup() {
        this.isPopupOpen = false;
      },
      validerReservation() {
        const { startDate, endDate } = this.selectedRange;
  
        // Vérifie si la plage de dates est complète
        if (startDate !== null && endDate !== null) {
          const start = new Date(startDate).toLocaleDateString(); // Conversion correcte en Date
          const end = new Date(endDate).toLocaleDateString(); // Conversion correcte en Date
  
          // Alerte pour confirmer la sélection
          alert(`Réservation du ${start} au ${end} validée.`);
          
          // Ferme le pop-up après validation
          this.closePopup();
        } else {
          // Si les dates ne sont pas complètes, afficher un message d'erreur
          alert('Veuillez sélectionner une période de réservation complète.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Pas de styles supplémentaires, juste du Tailwind */
  </style>
  