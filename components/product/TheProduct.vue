<template>
    <section class="mb-[120px] each-product">
        <img src="" alt="" />
        <div class="">
            <p class="tracking-[0.62rem] text-deep-orange text-sm">NEW PRODUCT</p>
            <h2 class="font-bold text-[1.75rem] md:text-[2.2rem] my-6">YX1 WIRELESS EARPHONES</h2>
            <p class="opacity-50 text-[15px]">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
            Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
            <div class="flex justify-center lg:justify-start mt-6">
                <SharedButtonLink cta-link="/" cta-text="SEE PRODUCT" class="orange btn-link"/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({
    product:{
        type: Object,
        default: () => {},
    },
})
</script>

<style scoped lang="scss">
.each-product {
    h2, p {
        @apply text-center lg:text-start; 
    }
}
</style>