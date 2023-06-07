<template>
    <section class="zx7-speaker px-5 my-8">
        <div class="container">
            <div class="flex flex-col gap-8">
            <h2 class="text-[1.75rem] font-bold">ZX7 SPEAKER</h2>
            <SharedButtonLink cta-link="/" cta-text="SEE PRODUCT" class="outlined-black btn-link"/>
        </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.zx7-speaker > .container{
    @apply h-[320px] bg-cover bg-center bg-no-repeat flex items-center rounded-lg px-8
    bg-[url('/images/home/mobile/image-speaker-zx7.jpg')]
    md:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')]
    lg:bg-[url('/images/home/desktop/image-speaker-zx7.jpg')]
    ; 
}
</style>