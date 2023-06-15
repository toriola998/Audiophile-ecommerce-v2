<template>
    <div class="bg-black">
        <h1 class="uppercase text-light text-[1.75rem] md:text-[2.7rem] text-center 
        font-bold h-40 md:h-60 lg:h-64 flex items-center justify-center">{{ title }}
        </h1>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'PRODUCT',
    }
})
</script>