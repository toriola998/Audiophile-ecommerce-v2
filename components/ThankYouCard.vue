<template>
    <div class="overlay flex items-center justify-center">
        <div class="rounded-lg bg-light px-5 py-8 sm:px-8 sm:w-[520px] z-40">
            <div class="bg-deep-orange rounded-full flex justify-center items-center w-16 h-16 mb-8">
                 <img src="/images/completed.png" alt="" role="presentation" />
            </div>
            <p class="font-bold text-[1.5rem]">THANK YOU <br> FOR YOUR ORDER</p>
            <p class="opacity-50 pt-4 pb-6">You will receive an email confirmation shortly.</p>

            <div class="sm:flex">
                <div class="bg-grey-1 rounded-t-lg sm:rounded-r-none sm:rounded-l-lg px-8 py-7 sm:px-5 sm:w-[60%]">
                    <CartProduct class="mt-0" v-for="(item, index) in cart.slice(0, 3)" :key="index" :product="item">
                        <p class="text-[.93rem] font-bold opacity-50">x{{ item.quantity }}</p>
                    </CartProduct>

                    <p class="text-center other-item font-bold opacity-50 text-sm" v-if="cart.length > 3">and {{ cart.length - 3 }} other item(s)</p>
                </div>
                <div class="bg-dark rounded-b-lg sm:rounded-l-none sm:rounded-r-lg px-8 sm:flex items-end sm:w-[40%]">
                    <p class="py-4 text-light flex flex-col gap-4">
                        <span class="text-[.93rem] opacity-50">GRAND TOTAL</span>
                        <span class="font-bold text-[1.1rem]">$ {{ grandTotalAmount }}</span>
                    </p>
                </div>
            </div>

            <button class="orange btn-link w-full flex justify-center mt-6" @click="goHome()">BACK TO HOME</button>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '~/store/cart'
    import { storeToRefs } from 'pinia'

    const store = useCartStore();
    const { cart } = storeToRefs(store);
    const { grandTotalAmount } = storeToRefs(store);
    const { goHome } = store
</script>

<style scoped lang="scss">
    .other-item {
        &::before{
            content: '';
            @apply block bg-dark w-full opacity-[0.08] h-[1px] my-3;
        }
    }
</style>