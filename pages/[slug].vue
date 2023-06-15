<template>
    <SharedPageLayout>
        <template #header>
            <ProductTheHeader :title="category" />
        </template>

        <div>
            <div class="px-5 pt-10 lg:pt-24" v-for="(item, index) in products" :key="index">
                <ProductTheProduct class="container" :product="item" :class="{'flex-row-reverse': index % 2 }"/>
            </div>
        </div>
    </SharedPageLayout>
</template>

<script setup>
import { ref } from 'vue';
import data from '~/data.json'

const pageData = ref(data).value

const route = useRoute();
const { slug } = route.params
const category = slug

const products = pageData.map(item => {
  if (item.category === slug) {
    return item;
  }
  return null;
}).filter(item => item !== null);

console.log(category, typeof category)
</script>