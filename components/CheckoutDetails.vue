<template>
    <div class="mb-8 checkout">
        <div class="mb-4" v-for="(item, index) in details" :key="index">
            <label :for="item.id">{{ item.label }}</label><br>
            <input :id="item.id" :type="item.type" :placeholder="item.placeholder" class="input-wrap"/>
        </div>
    </div>
</template>

<script setup>
defineProps({
    details:{
        type: Array,
        default: () => [],
    },
})
</script>
