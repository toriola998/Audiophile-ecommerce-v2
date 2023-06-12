<template>
    <div class="overlay">
        <div class="rounded bg-light px-5 sm:absolute right-5 top-5 py-8 sm:w-[400px] z-40">
            <div class="flex justify-between">
                <p class="text-[1.15rem] font-bold">CART (3)</p>
                <button class="text-dark opacity-50 font-medium text-[.94rem] underline">Remove all</button>
            </div>

            <CartProduct>
                <div class="flex justify-between items-center bg-grey-1 px-4 py-2 w-28">
                    <button class="text-sm opacity-25">-</button>
                    <p class="font-bold">2</p>
                    <button class="text-sm opacity-25">+</button>
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