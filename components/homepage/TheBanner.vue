<template>
  <header class="px-5 bg-black">
    <div>
      <p class="opacity-50 tracking-[0.62rem]">NEW PRODUCT</p>
      <h1 class="font-bold uppercase text-[2.3rem] leading-10 mt-4 mb-6">XX99 Mark II<br> HeadphoneS</h1>
      <p class="opacity-75 mb-7">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <div class="flex justify-center">
        <SharedButtonLink cta-link="/" cta-text="SEE PRODUCT" class="orange btn-link"/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    @apply h-[500px] bg-[url('/images/home/mobile/image-header.jpg')] 
    bg-cover bg-center bg-no-repeat flex items-center;

    h1, p { 
      @apply text-center text-light;
    }

    p {
      font-size: 14px;
    }
  }
</style>