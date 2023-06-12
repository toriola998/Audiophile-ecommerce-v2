<template>
    <main class="bg-grey-2 pb-20">
        <GoBack />
        <div class="px-5">
            <div class="container">
                <section class="rounded-lg bg-light py-5 lg:py-10 px-3">
                    <h1 class="text-[1.5rem] md:text-[2rem] pb-7 font-bold">CHECKOUT</h1>
                    <CheckoutDetails title="BILLING DETAILS" :details="billingDetails" />
                    <CheckoutDetails title="SHIPPING INFO" :details="shippingInfo" />
                    
                    <div class="mb-8">
                        <p class="title">PAYMENT DETAILS</p>
                        <div class="mb-4 items-center flex gap-2 input-wrap " v-for="(item, index) in paymentDetails" :key="index">
                            <input id="" type="radio" class="radio-input"/>
                            <label for="" class="font-bold text-[0.75rem]">{{ item.label }}</label><br>
                        </div>

                        <CheckoutDetails title="" :details="paymentMethods" class="mt-8" />

                        <div class="flex flex-col gap-3 mt-8">
                            <img src="/images/Shape.png" alt="" role="presentation" height="48" width="48" />
                            <p class="opacity-50 text-[.95rem]">The 'Cash on Delivery' option enables you to pay in cash when our delivery 
                            courier arrives at your residence. Just make sure your address is correct so 
                            that your order will not be cancelled.</p>
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

const paymentDetails = ref([
    {
        label: 'Payment Method',
        value: '',
    },
    {
        label: 'Cash on Delivery',
        value: '',
    },
]).value

const paymentMethods = ref([
    {
        label: 'e-Money Number',
        placeholder: '238521993',
        type: 'number',
        value: '',
    },
    {
        label: 'e-Money PIN',
        placeholder: '6891',
        type: 'number',
        value: '',
    },
]).value
</script>

<style scoped lang="scss">
div.input-wrap {
    
    &:hover {
        border: 1px solid #D87D4A;
        cursor: pointer;
    }
}

.radio-input {
    accent-color: #D87D4A;
}
</style>