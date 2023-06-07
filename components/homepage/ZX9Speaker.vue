<template>
    <section class="zx9-speaker px-5">
        <div class="container">
            <div class="max-w-[350px] mx-auto lg:max-w-[unset] flex flex-col lg:flex-row gap-8 md:gap-16">
                <picture>
                    <source media="(min-width: 1000px)" 
                            srcset="/images/home/desktop/image-speaker-zx9.png">
                    <source media="(min-width: 700px)" 
                            srcset="/images/home/tablet/image-speaker-zx9.png">
                    <img src="/images/home/mobile/image-speaker-zx9.png" 
                            alt="ZX9 speaker"
                            class="mx-auto h-[180px] md:h-[220px]">
                </picture>
                <div>
                    <h2 class="font-bold text-[2.2rem] md:text-[3.4rem] leading-10 md:leading-[3.5rem]">ZX9 <br> SPEAKER</h2>
                    <p class="font-medium py-6 opacity-75 text-[15px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div class="flex justify-center lg:justify-start">
                        <SharedButtonLink cta-link="/" cta-text="SEE PRODUCT" class="black btn-link"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.zx9-speaker > .container {
    @apply h-[550px] sm:h-[650px] md:h-[550px] bg-cover bg-center bg-no-repeat flex items-center bg-deep-orange rounded-lg px-5
    bg-[url('/images/home/desktop/pattern-circles.svg')]; 

    h2, p { 
        @apply text-center lg:text-start text-light;
    }
} 
</style>