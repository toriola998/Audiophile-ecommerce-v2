<template>
    <footer class="bg-dark-1 px-5 pb-10">
        <div class="container relative">
            <div class="lg:flex justify-between items-center lg:mb-10">
                <NuxtLink to="/" class="flex justify-center footer-logo sm:justify-start">
                    <img src="/images/shared/desktop/logo.svg" alt="Home - Audiophile" />
                </NuxtLink>

                <nav>
                    <ul class="flex flex-col gap-5 md:gap-10 my-12 sm:flex-row lg:my-0">
                        <li class="text-center w-auto" v-for="(item, index) in links" :key="index">
                            <NuxtLink 
                                :to="item.link"
                                exact
                                active-class="active-link"  
                                class="text-light font-bold text-[13px] hover:text-deep-orange"
                                >{{ item.cta }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <p class="md:max-w-[540px]">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
            to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            <div class="sm:flex justify-between items-center sm:mt-20">
                <p class="font-bold py-12 sm:py-0">Copyright {{ new Date().getFullYear() }}. All Rights Reserved</p>
                <div class="flex justify-center gap-5 sm:justify-start social-icons">
                    <NuxtLink to="" v-for="(item, index) in socialLinks" :key="index">
                        <img :src="`/images/shared/desktop/icon-${item}.svg`" :alt="`Follow audiophile on ${item}`" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useNavLinks } from '~/composables/useNavLinks';
const { links } = useNavLinks();

const socialLinks = ref([ 'facebook', 'twitter', 'instagram', ]).value
</script>

<style scoped lang="scss">
footer {
    div.container {
        &::before {
            content: '';
            @apply bg-deep-orange block h-1 w-28 mx-auto mb-14 lg:mx-[unset];
        }
    }

    p {
        @apply text-[15px] opacity-50 text-light text-center sm:text-start;
    }

    .social-icons {
        @apply lg:relative -top-16 right-0;

        img:hover {
            //filter: sepia(100%) hue-rotate(-90deg);
            cursor: pointer;
        }
    }
}
</style>