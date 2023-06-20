<template>
    <div class="rounded-lg bg-light p-5">
        <h2 class="text-[1.15rem] font-bold text-dark mb-4">SUMMARY</h2>

        <CartProduct v-for="(item, index) in cart" :key="index" :product="item">
            <p class="text-[.93rem] font-bold opacity-50">x{{ item.quantity }}</p>
        </CartProduct>
        
        <ul class="pricing">
            <li>
                <span>TOTAL</span>
                <span>${{ cartTotalAmount }}</span>
            </li>
            <li>
                <span>SHIPPING</span>
                <span>$ {{ shippingFee }}</span>
            </li>
            <li>
                <span>VAT (INCLUDED)</span>
                <span>$ {{ vatFee }}</span>
            </li>
            <li class="mt-8">
                <span>GRAND TOTAL</span>
                <span class="text-deep-orange">$ {{ grandTotalAmount }}</span>
            </li>
        </ul>

        <button-link class="orange btn-link w-full flex justify-center mt-8" type="button">CONTINUE & PAY</button-link>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart'
import { storeToRefs } from 'pinia'

const store = useCartStore();

const { cart } = storeToRefs(store);
const { cartTotalAmount } = storeToRefs(store);
const { vatFee } = storeToRefs(store);
const { shippingFee } = storeToRefs(store);
const { grandTotalAmount } = storeToRefs(store);
</script>

<style scoped lang="scss">
.pricing {
    li {
        @apply flex justify-between mb-2;

        span:nth-child(1) {
            @apply font-medium opacity-50 text-dark text-[.93rem];
        }

        span:nth-child(2) {
            @apply font-bold text-[1.1rem];
        }
    }
}
</style>