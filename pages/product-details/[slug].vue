<template>
   <SharedPageLayout>
        <template #header>
            <GoBack />
            <div v-for="(item, index) in products" :key="index">
                <ProductDetailsTheBanner :product="item"/>
                <ProductFeatures :product="item"/>
                <ProductDetailsOtherProducts :product="item"/>
            </div>
        </template>
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
  if (item.slug === slug) {
    return item;
  }
  return null;
}).filter(item => item !== null);

console.log(category, typeof category)
</script>