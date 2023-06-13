<template>
    <nav class="px-5 h-[90px] bg-dark-1 z-40 w-full">
        <div class="flex justify-between h-[inherit] items-center border-b border-grey-4 container">
            <button class="md:hidden">
                <img src="/images/shared/tablet/icon-hamburger.svg" alt="" height="16" width="16"/>
            </button>

            <NuxtLink to="/">
                <img src="/images/shared/desktop/logo.svg" alt="Home - Audiophile" />
            </NuxtLink>

            <ul class="md:flex md:gap-10 my-12 lg:my-0 hidden">
                <li class="text-center w-auto" v-for="(item, index) in links" :key="index">
                    <NuxtLink :to="item.link" class="text-light font-bold text-[13px]">{{ item.cta }}</NuxtLink>
                </li>
            </ul>

            <button class="flex items-center">
                <img src="/images/icons/cart.svg" alt="Cart" />>
            </button>
        </div>
    
        <!-- <div class="bg-light nav-bar z-40 relative">
            <SharedProductCategory />
        </div> -->
    </nav>
</template>

<style scoped lang="scss">
.nav-bar {
    &::before {
        background: rgba(0, 0, 0, 0.6);
        @apply fixed px-5 top-0 left-0 right-0 bottom-0 z-10 h-full;
        content: '',
    }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
    {
        cta: 'HOMES',
        link: '/',
    },
    {
        cta: 'HEADPHONES',
        link: '/',
    },
    {
        cta: 'SPEAKERS',
        link: '/',
    },
    {
        cta: 'EARPHONES',
        link: '/',
    }
]).value
</script>