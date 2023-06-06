<template>
    <section aria-label="Categories of our products" class="px-5 py-20 md:py-28 lg:py-32">
        <div class="flex flex-col gap-16 sm:flex-row sm:gap-3">
            <div class="bg-grey-1 py-3 pt-20 rounded-lg relative sm:w-[33%]"
                v-for="(item, index) in products"
                :key="index">
                <img 
                    :src="`/images/shared/desktop/${item.image}.png`" 
                    alt="" 
                    height="200" 
                    width="140" 
                    class="mx-auto block absolute -top-12 left-0 right-0"/>
                <p class="font-bold text-center mb-4">{{ item.product  }}</p>

                <NuxtLink :to="item.link" class="flex items-center gap-3 justify-center">
                    <span class="opacity-50 font-bold text-[0.8rem]">SHOP</span> 
                    <img src="/images/shared/desktop/icon-arrow-right.svg" alt="" role="presentation" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref([
    {
        product: 'HEADPHONES',
        link: '/',
        image: 'image-category-thumbnail-headphones'
    },
    {
        product: 'SPEAKERS',
        link: '/',
        image: 'image-category-thumbnail-speakers'
    },
    {
        product: 'EARPHONES',
        link: '/',
        image: 'image-category-thumbnail-earphones'
    }
]).value
</script>