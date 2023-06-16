<template>
    <div class="overlay" @click="$emit('close')">
        <div class="rounded bg-light px-5 sm:absolute right-5 top-5 py-8 sm:w-[400px] z-40">
            <div class="flex justify-between">
                <p class="text-[1.15rem] font-bold">CART ({{ cart.length }})</p>
                <button class="text-dark opacity-50 font-medium text-[.94rem] underline">Remove all</button>
            </div>

            <CartProduct v-for="(item, index) in cart" :key="index" :product="item">
                <div class="flex justify-between items-center bg-grey-1 px-4 py-2 w-28">
                    <button class="text-sm opacity-25" @click="decrement()">-</button>
                    <p class="font-bold">{{ quantity  }}</p>
                    <button class="text-sm opacity-25" @click="increment()">+</button>
                </div>
            </CartProduct>
            
            <p class="mt-8 mb-7 flex justify-between">
                <span class="font-medium opacity-50 text-dark text-[.93rem]">TOTAL</span>
                <span class="font-bold text-[1.1rem]">$ 5,396</span>
            </p>

            <button-link class="orange btn-link w-full flex justify-center">CHECKOUT</button-link>
        </div>
    </div>
</template>

<script setup>
//import { reactive } from 'vue';
import { useCartStore } from '~/store/cart'
import { storeToRefs } from 'pinia'

const props = defineProps({
    product:{
        type: Object,
        default: () => {},
    },
})

const store = useCartStore();
const { quantity } = storeToRefs(store)
const { decrement } = store;
const {  increment } = store

// const { addToCart } = store
const { cart } = storeToRefs(store)
console.log(cart)

// let payload = reactive({
//     id: props.product.id,
//     quantity: quantity,
//     name: props.product.name,
//     price: props.product.price,
// })
</script>