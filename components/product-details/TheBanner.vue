<template>
    <div class="px-5 pb-10">
        <div class="container md:flex items-center gap-20">
            <picture class="md:w-[45%]">
                <source media="(min-width: 1000px)" 
                        :srcset="`/images/${product.image.desktop}`">
                <source media="(min-width: 768px)" 
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
                
                <!-- <SharedAddToCart /> -->
                <div class="flex gap-3">
                    <div class="flex justify-between items-center bg-grey-1 px-4 w-28">
                        <button class="text-sm opacity-25" @click="decrement(payload)">-</button>
                        <p>{{ payload.quantity  }}</p>
                        <button class="text-sm opacity-25" @click="increment(payload)">+</button>
                    </div>
                    <button class="orange btn-link" @click="addToCart(payload)">ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useCartStore } from '~/store/cart'
import { storeToRefs } from 'pinia'

const props = defineProps({
    product:{
        type: Object,
        default: () => {},
    },
})

const store = useCartStore();
//const { quantity } = storeToRefs(store)
const { decrement } = store;
const {  increment } = store

const { addToCart } = store
const { cart } = storeToRefs(store)
console.log(cart)

let payload = reactive({
    id: props.product.id,
    quantity: 0,
    name: props.product.name,
    price: props.product.price,
    image: props.product.slug
})
</script>