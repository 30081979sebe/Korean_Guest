<template>
    <footer class="bg-Primary-Black text-white text-center py-4 mt-8 h-40 flex flex-col divide-x-2 justify-center items-center md:flex-row md:justify-center">
      <div class="w-[32%] h-full flex justify-center items-center xl:text-[20px] lg:text-[20px] md:text-[15px] min-[375px]:text-[12px]">
        <p>Copyright 2024</p>
        
      </div>
      <div class="bg-Primary-Black w-[32%]  h-full flex flex-col">
        <div class="w-full h-1/2 flex justify-center items-center xl:text-[20px] lg:text-[20px] md:text-[15px] min-[375px]:text-[12px]">
            <RouterLink to="/about" class="text-gray-300">Nous Contacter</RouterLink>
        </div>
        <hr class="w-[80%] mx-auto">
        <div class="bg-Primary-Black w-full h-1/2">
        </div>

      </div>
      <div class="w-[32%] h-full flex justify-center items-center xl:text-[20px] lg:text-[20px] md:text-[15px] min-[375px]:text-[12px]">
        <p>@KoréanGuest-house</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterItems'
  };
  </script>
  
  <style scoped>
  footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
  </style>
  