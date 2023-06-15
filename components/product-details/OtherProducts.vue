<template>
    <section class="px-5 pt-8 pb-16">
        <h2 class="md:text-[2rem]">YOU MAY ALSO LIKE</h2>
        <div class="container flex flex-col gap-14 md:flex-row md:gap-3 lg:gap-8">
            <div v-for="(item, index) in product.others" :key="index">
                <picture>
                    <source media="(min-width: 1000px)" :srcset="`/images/${item.image.desktop}`">
                    <source media="(min-width: 768px)" :srcset="`/images/${item.image.tablet}`">
                    <img :src="`/images/${item.image.mobile}`" alt="" class="rounded-lg">
                </picture>

                <h3 class="uppercase my-7">{{ item.name }}</h3>
                <div class="flex justify-center">
                    <SharedButtonLink 
                        :cta-link="`/product/${item.slug}`" 
                        cta-text="SEE PRODUCT" 
                        class="orange btn-link" 
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    h2, h3 {
       @apply text-[1.5rem] font-bold text-center mb-7;
    }
</style>

<script setup>
defineProps({
    product:{
        type: Object,
        default: () => {},
    },
})
</script>