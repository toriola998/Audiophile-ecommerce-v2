<template>
    <div class="mb-8 checkout">
        <div class="mb-4" v-for="(item, index) in details" :key="index">
            <label :for="item.id"  :class="{'text-red': item.isError }" class="flex justify-between">
                <span>{{ item.label }}</span>
                <span v-if="item.isError" >{{ item.id }} can't be empty</span> 
            </label>
            
            <input 
                :id="item.id" 
                :type="item.type" 
                :placeholder="item.placeholder" 
                :name="item.id" 
                v-model="item.value" 
                class="input-wrap"
                :class="{'error-class': item.isError }"
            />
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

<style scoped>
.error-class {
    border: 2px solid #CD2C2C;
}
</style>
