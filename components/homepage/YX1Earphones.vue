<template>
    <section class="yz1-earphone px-5">
        <div class="container flex flex-col gap-7 md:grid grid-cols-2">
            <picture>
                <source media="(min-width: 1000px)" 
                        srcset="/images/home/desktop/image-earphones-yx1.jpg">
                <source media="(min-width: 700px)" 
                        srcset="/images/home/tablet/image-earphones-yx1.jpg">
                <img src="/images/home/mobile/image-earphones-yx1.jpg" 
                        alt="YZ1 earphones"
                        class="rounded-lg w-full">
            </picture> 
            <div class="bg-grey-1 rounded-lg px-7 py-10 flex items-center">
                <div>
                    <h2 class="text-[1.75rem] font-bold mb-7">YX1 EARPHONES</h2>
                    <SharedButtonLink cta-link="/product/yx1-earphones" cta-text="SEE PRODUCT" class="outlined-black btn-link"/>
                </div>
            </div>
        </div>
    </section>
</template>