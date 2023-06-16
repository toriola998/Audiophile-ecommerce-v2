<template>
     <div class="flex items-start justify-between my-8">
        <div class="flex items-center gap-4">
            <img :src="`/images/cart/image-${product.image}.jpg`" alt="" width="64" height="64" class="rounded"/>
            <div>
                <p class="text-[.93rem] font-bold mb-1">{{ product.name }}</p>
                <p class="text-dark opacity-50 font-bold">{{ product.price }}</p>
            </div>
        </div>
       <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    product:{
        type: Array,
        default: () => [],
    },
})
</script>