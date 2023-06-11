<template>
    <main class="bg-grey-2 pb-20 checkout">
        <GoBack />
        <div class="px-5">
            <div class="container">
                <section class="rounded-lg bg-light py-5 lg:py-10 px-3">
                    <h1 class="text-[1.5rem] md:text-[2rem] pb-7 font-bold">CHECKOUT</h1>
                    
                    <div class="mb-8">
                        <p class="title">BILLING DETAILS</p>
                        <div class="mb-4" v-for="(item, index) in billingDetails" :key="index">
                            <label for="">{{ item.label }}</label><br>
                            <input id="" :type="item.type" :placeholder="item.placeholder" />
                        </div>
                    </div>

                    <div class="mb-8">
                        <p class="title">SHIPPING INFO</p>
                        <div class="mb-4" v-for="(item, index) in shippingInfo" :key="index">
                            <label for="">{{ item.label }}</label><br>
                            <input id="" :type="item.type" :placeholder="item.placeholder" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    <SharedTheFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const billingDetails = ref([
    {
        label: 'Name',
        placeholder: 'Alexa Ward',
        type: 'text',
        value: '',
    },
    {
        label: 'Email Address',
        placeholder: 'alexei@mail.com',
        type: 'text',
        value: '',
    },
    {
        label: 'Phone number',
        placeholder: '+1 202-555-0136',
        type: 'number',
        value: '',
    }
]).value

const shippingInfo = ref([
    {
        label: 'Your Address',
        placeholder: '1137 Williams Avenue',
        type: 'text',
        value: '',
    },
    {
        label: 'ZIP Code',
        placeholder: '100-1',
        type: 'number',
        value: '',
    },
    {
        label: 'City',
        placeholder: 'New York',
        type: 'type',
        value: '',
    },
    {
        label: 'Country',
        placeholder: 'United States',
        type: 'text',
        value: '',
    }
]).value
</script>

<style scoped lang="scss">
.checkout {
   .title {
        @apply text-deep-orange font-bold text-[0.82rem] mb-4;
   }
}

label {
    @apply font-bold text-[0.75rem];
}

input {
    @apply pl-6 py-3 rounded-md mt-2 w-full;
    border: 1px solid #CFCFCF;

        &:focus,
        &:hover {
            outline: 1px solid #D87D4A;
        }

        &::placeholder {
            @apply text-sm opacity-40 font-bold;
            color: black;
    }
}
</style>