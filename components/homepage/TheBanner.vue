<template>
    <header class="px-5 bg-dark-1">
        <div class="container">
        <div class="max-w-[379px] mx-auto lg:mx-[unset]">
            <p class="opacity-50 tracking-[0.62rem]">NEW PRODUCT</p>
            <h1 class="font-bold uppercase text-[2.3rem] md:text-[3.35rem] leading-10 md:leading-[3.5rem] mt-4 mb-6"
            >
            XX99 Mark II<br> HeadphoneS
            </h1>
            <p class="opacity-75 mb-7">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <div class="flex justify-center lg:justify-start">
                <SharedButtonLink cta-link="/product/xx99-mark-two-headphones" cta-text="SEE PRODUCT" class="orange btn-link"/>
            </div>
        </div>
    </div>
    </header>
</template>

<style scoped lang="scss">
  .container {
    @apply h-[500px] bg-cover bg-center bg-no-repeat flex items-center bg-dark-1
    bg-[url('/images/home/mobile/image-header.jpg')] 
    sm:h-[650px] sm:bg-[url('/images/home/tablet/image-header.jpg')] 
    lg:h-[650px] lg:bg-[url('/images/home/desktop/image-hero.jpg')];

    h1, p { 
      @apply text-center text-light lg:text-start;
    }

    p {
      font-size: 14px;
    }
  }
</style>