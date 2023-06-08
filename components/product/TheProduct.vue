<template>
    <section class="mb-16 each-product lg:flex items-center gap-36">
        <picture class="lg:w-[45%]">
            <source media="(min-width: 1000px)" 
                    :srcset="`/images/${product.categoryImage.desktop}`">
            <source media="(min-width: 600px)" 
                    :srcset="`/images/${product.categoryImage.tablet}`">
            <img :src="`/images/${product.categoryImage.mobile}`" 
                    :alt="product.name"
                    class="rounded-lg">
        </picture>
        <div class="lg:w-[45%] xl:w-[40%]">
            <p class="tracking-[0.62rem] text-deep-orange text-sm" v-if="product.new">NEW PRODUCT</p>
            <h2 class="font-bold text-[1.75rem] md:text-[2.2rem] my-6 uppercase lg:max-w-[300px]">{{ product.name }}</h2>
            <p class="opacity-50 text-[15px] md:text-[1rem] leading-6">{{ product.description }}</p>
            <div class="flex justify-center lg:justify-start mt-6">
                <SharedButtonLink cta-link="/" cta-text="SEE PRODUCT" class="orange btn-link"/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// defineProps({
//     product:{
//         type: Object,
//         default: () => {},
//     },
// })
defineProps([ 'product' ])
</script>

<style scoped lang="scss">
.each-product {
    h2, p {
        @apply text-center lg:text-start; 
    }
}
</style>