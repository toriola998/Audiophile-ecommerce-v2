<template>
    <NuxtLink :to="ctaLink" class="btn-link">{{ ctaText }}</NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    ctaLink:{
        type: String,
        default: '',
    },
    ctaText:{
        type: String,
        default: '',
    },
})
</script>
