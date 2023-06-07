<template>
    <section class="about-us px-5 pb-32">
        <div class="container flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:justify-between">
            <picture>
                <source media="(min-width: 1000px)" 
                        srcset="/images/shared/desktop/image-best-gear.jpg">
                <source media="(min-width: 600px)" 
                        srcset="/images/shared/tablet/image-best-gear.jpg">
                <img src="/images/shared/mobile/image-best-gear.jpg" 
                        alt=""
                        class="rounded-lg"
                        role="presentation">
            </picture>
            <div class="max-w-[570px] mx-auto lg:mx-[unset] lg:max-w-[unset] lg:w-[50%] xl:w-[40%]">
                <h2 class="uppercase font-bold text-[1.75rem] md:text-[2.2rem] mb-8">Bringing you the<br>
                    <span class="text-deep-orange">best</span> audio gear
                </h2>
                <p class="font-medium text-[.94rem] opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div> 
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-us {
    h2, p {
        @apply text-center lg:text-start
    }
}
</style>