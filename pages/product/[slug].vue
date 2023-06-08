<template>
    <ProductTheHeader />
    <main class="bg-grey-2">
        <div class="px-5 pt-10 lg:pt-24" v-for="(item, index) in products" :key="index">
            <ProductTheProduct class="container" :product="item"/>
        </div>
        <SharedProductCategory />
        <SharedAboutUs />
    </main>
    <SharedTheFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import data from '~/data.json'

const pageData = ref(data).value
console.log(pageData)

const route = useRoute();
const { slug } = route.params

const products = pageData.map(item => {
  if (item.category === slug) {
    return item;
  }
  return null;
}).filter(item => item !== null);

console.log(slug, products)
</script>