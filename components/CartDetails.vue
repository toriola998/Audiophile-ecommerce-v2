<template>
    <div class="overlay" @click.self="$emit('close')">
        <div class="container relative">
            <div class="rounded bg-light px-5 absolute w-full top-32 py-8 sm:w-[400px] z-40 sm:right-0">
                <div class="flex justify-between">
                    <p class="text-[1.15rem] font-bold">CART ({{ cart.length }})</p>
                    <button v-if="cart.length !== 0" class="text-dark opacity-50 font-medium text-[.94rem] underline" @click="removeAll()">Remove all</button>
                </div>
                
                <div v-if="cart.length === 0" class="py-16">
                    <img src="/images/empty-box.png" alt="" role="presentation" height="60" width="60" class="block mx-auto"/>
                    <p class="font-bold text-center mt-4">Opps! Your cart is empty!</p>
                </div>
                
                <div v-else>
                    <CartProduct v-for="(item, index) in cart" :key="index" :product="item">
                        <div class="flex justify-between items-center bg-grey-1 px-4 py-2 w-28">
                            <button class="text-sm opacity-25" @click="decrement(item)">-</button>
                            <p class="font-bold">{{ item.quantity  }}</p>
                            <button class="text-sm opacity-25" @click="increment(item)">+</button>
                        </div>
                    </CartProduct>
                    
                    <p class="mt-8 mb-7 flex justify-between">
                        <span class="font-medium opacity-50 text-dark text-[.93rem]">TOTAL</span>
                        <span class="font-bold text-[1.1rem]">$ 5,396</span>
                    </p>

                    <button-link class="orange btn-link w-full flex justify-center">CHECKOUT</button-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart'
import { storeToRefs } from 'pinia'

const props = defineProps({
    product:{
        type: Object,
        default: () => {},
    },
})

const store = useCartStore();
const { decrement } = store;
const {  increment } = store
const {  removeAll } = store

const { cart } = storeToRefs(store)
console.log(cart)
</script>