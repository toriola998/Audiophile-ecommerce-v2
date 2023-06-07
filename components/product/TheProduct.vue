<template>
    <section class="mb-[120px] each-product">
        <picture>
            <source media="(min-width: 1000px)" 
                    :srcset="`image/${product.image.desktop}`">
            <source media="(min-width: 600px)" 
                    :srcset="`image/${product.image.tablet}`">
            <img :src="`image/${product.image.mobile}`" 
                    :alt="product.name"
                    class="rounded-lg">
        </picture>
        <div class="">
            <p class="tracking-[0.62rem] text-deep-orange text-sm" v-if="product.new">NEW PRODUCT</p>
            <h2 class="font-bold text-[1.75rem] md:text-[2.2rem] my-6">{{ product.name }}</h2>
            <p class="opacity-50 text-[15px]">{{ product.description }}</p>
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