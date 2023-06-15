<template>
    <section class="mb-16 each-product lg:flex items-center gap-20 xl:gap-32">
        <picture class="lg:w-[45%]">
            <source media="(min-width: 1000px)" 
                    :srcset="`/images/${product.categoryImage.desktop}`">
            <source media="(min-width: 500px)" 
                    :srcset="`/images/${product.categoryImage.tablet}`">
            <img :src="`/images/${product.categoryImage.mobile}`" 
                    :alt="product.name"
                    class="rounded-lg">
        </picture>
        <div class="lg:w-[45%] xl:w-[40%]">
            <p class="tracking-[0.62rem] text-deep-orange text-sm mt-10 lg:mt-0" v-if="product.new">NEW PRODUCT</p>
            <h2 class="font-bold text-[1.75rem] md:text-[2.2rem] pt-6 uppercase lg:max-w-[300px]">{{ product.name }}</h2>
            <p class="opacity-50 text-[15px] md:text-[1rem] leading-6 mp-6 lg:py-8">{{ product.description }}</p>
            <div class="flex justify-center lg:justify-start mt-2">
                <SharedButtonLink :cta-link="`/product/${product.slug}`" cta-text="SEE PRODUCT" class="orange btn-link"/>
            </div>
        </div>
    </section>
</template>

<script setup>
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