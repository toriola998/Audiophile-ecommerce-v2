<template>
    <nav class="px-5 h-[90px] z-40 w-full" :class="bgColor">
        <div class="flex justify-between h-[inherit] items-center border-b border-grey-4 container">
            <button class="md:hidden" @click="showNav = true">
                <img src="/images/shared/tablet/icon-hamburger.svg" alt="" height="16" width="16"/>
            </button>

            <NuxtLink to="/">
                <img src="/images/shared/desktop/logo.svg" alt="Home - Audiophile" />
            </NuxtLink>
            
            <!--DESKTOP NAV LINKS--->
            <ul class="md:flex md:gap-10 my-12 lg:my-0 hidden">
                <li class="text-center w-auto" v-for="(item, index) in links" :key="index">
                    <NuxtLink 
                        :to="item.link"
                        exact
                        active-class="active-link"  
                        class="text-light font-bold text-[13px] hover:text-deep-orange"
                        >
                        {{ item.cta }}
                    </NuxtLink>
                </li>
            </ul>

            <button class="flex items-center">
                <img src="/images/icons/cart.svg" alt="Cart" />>
            </button>
        </div>
        
        <!--MOBILE NAV LINKS--->
        <div class="md:hidden" v-if="showNav === true">
            <div class="overlay" @click="showNav = false" />
            <SharedProductCategory class="bg-light absolute w-full right-0 left-0 rounded-b-lg z-50"/>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useNavLinks } from '~/composables/useNavLinks';
const { links } = useNavLinks();

let showNav = ref(null);

defineProps({
    bgColor:{
        type: String,
        default: 'bg-black',
    },
})
</script>
