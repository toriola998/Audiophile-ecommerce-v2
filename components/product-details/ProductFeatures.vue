<template>
    <section class="px-5 py-20">
        <div class="container features">
            <div class="flex flex-col gap-28 lg:flex-row">
                <div class="lg:w-[55%]">
                    <h2>FEATURES</h2>
                    <div class="opacity-50 text-[.94rem] md:text-[1rem]" v-html="product.features" />
                </div>
                <div class="sm:flex gap-48 lg:flex-col lg:gap-0">
                    <h3>IN THE BOX</h3>
                    <ul class="flex flex-col gap-2">
                        <li v-for="(item, index) in product.includes" :key="index">
                            <span class="font-bold text-deep-orange mr-5">{{ item.quantity }}x</span>
                            <span class="opacity-50 text-[.94rem] md:text-[1rem]">{{ item.item }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="gallery">
                <picture v-for="(item, key) in product.gallery" :key="key">
                    <source media="(min-width: 1000px)" :srcset="`/images/${item.desktop}`">
                    <source media="(min-width: 630px)" :srcset="`/images/${item.tablet}`">
                    <img :src="`/images/${item.mobile}`" alt="" class="rounded-lg">
                </picture>
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
.features{
    h2, h3 {
        @apply text-[1.5rem] md:text-[2rem] mb-7 font-bold;
    }
}
</style>