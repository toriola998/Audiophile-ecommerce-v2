<template>
    <div class="mb-8 checkout">
        <p class="title">{{ title }}</p>
        <div class="mb-4" v-for="(item, index) in details" :key="index">
            <label for="">{{ item.label }}</label><br>
            <input id="" :type="item.type" :placeholder="item.placeholder" class="input-wrap"/>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title:{
        type: String,
        default: '',
    },
    details:{
        type: Array,
        default: () => [],
    },
})
</script>
