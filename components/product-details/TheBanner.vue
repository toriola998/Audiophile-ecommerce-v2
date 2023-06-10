<template>
    <div class="px-5 pb-10">
        <div class="container md:flex items-center gap-20">
            <picture class="md:w-[45%]">
                <source media="(min-width: 1000px)" 
                        :srcset="`/images/${product.image.desktop}`">
                <source media="(min-width: 500px)" 
                        :srcset="`/images/${product.image.tablet}`">
                <img :src="`/images/${product.image.mobile}`" 
                        :alt="product.name"
                        class="rounded-lg">
            </picture>
            <div class="md:w-[45%] xl:w-[40%]">
                <p class="tracking-[0.62rem] text-deep-orange text-sm mt-10 lg:mt-0" v-if="product.new">NEW PRODUCT</p>
                <h2 class="font-bold text-[1.75rem] lg:text-[2.5rem] pt-6 uppercase lg:max-w-[300px] leading-[2.5rem]">{{ product.name }}</h2>
                <p class="opacity-50 text-[15px] md:text-[1rem] leading-6 mt-6 lg:mb-10">{{ product.description }}</p>
                <p class="font-bold text-[1.12rem] my-8">$ {{ product.price }}</p>
                
                <SharedAddToCart />
            </div>
        </div>
    </div>
</template>

<script setup >
defineProps({
    product:{
        type: Object,
        default: () => {},
    },
})
</script>