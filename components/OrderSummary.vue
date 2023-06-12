<template>
    <div class="rounded-lg bg-light p-5">
        <h2 class="text-[1.15rem] font-bold text-dark">SUMMARY</h2>

        <div class="flex items-start justify-between my-8">
            <div class="flex items-center gap-4">
                <img src="/images/cart/image-xx59-headphones.jpg" alt="" width="64" height="64" class="rounded"/>
                <div>
                    <p class="text-[.93rem] font-bold mb-1">XX99 MK II</p>
                    <p class="text-dark opacity-50 font-bold">$ 2,999</p>
                </div>
            </div>
            <p class="text-[.93rem] font-bold opacity-50">x1</p>
        </div>

        <ul class="pricing">
            <li>
                <span>TOTAL</span>
                <span>$ 5,396</span>
            </li>
            <li>
                <span>SHIPPING</span>
                <span>$ 5,396</span>
            </li>
            <li>
                <span>VAT (INCLUDED)</span>
                <span>$ 50</span>
            </li>
            <li class="mt-8">
                <span>GRAND TOTAL</span>
                <span class="text-deep-orange">$ 5,396</span>
            </li>
        </ul>

        <button-link class="orange btn-link w-full flex justify-center mt-8">CONTINUE & PAY</button-link>
    </div>
</template>

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