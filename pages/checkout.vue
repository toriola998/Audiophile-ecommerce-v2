<template>
    <SharedNavBar />
    <main class="bg-grey-2 pb-20">
        <GoBack />
        <div class="px-5">
            <form class="container flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-5">
                <div class="rounded-lg bg-light py-5 lg:p-10 px-5 lg:w-[65%]">
                    <h1 class="text-[1.5rem] md:text-[2rem] pb-7 font-bold">CHECKOUT</h1>
                    
                    <p class="title">BILLING DETAILS</p>
                    <CheckoutDetails :details="billingDetails" class="sm:grid grid-cols-2 gap-x-4"/>

                    <p class="title">SHIPPING INFO</p>
                    <CheckoutDetails :details="shippingInfo" class="shipping-info"/>
                    
                    <div class="mb-8">
                        <p class="title">PAYMENT DETAILS</p>
                        <div class="sm:grid grid-cols-2 justify-between gap-x-4">
                            <p class="font-bold text-[0.75rem] my-4">Payment Methods</p>
                            <div>
                                <div class="mb-4 items-center flex gap-2 input-wrap " v-for="(item, index) in paymentDetails" :key="index">
                                    <input :id="item.id" type="radio" class="radio-input" v-model="payment" :value="item.id"/>
                                    <label :for="item.id" class="font-bold text-sm">{{ item.label }}</label><br>
                                </div>
                            </div>
                        </div>

                        <CheckoutDetails 
                            :details="paymentMethods" 
                            class="sm:grid grid-cols-2 gap-x-4 mt-2"
                            v-if="payment === 'e-Money'"
                        />

                        <div class="flex flex-col gap-3 mt-8 sm:flex-row sm:gap-8 sm:items-center"  v-if="payment === 'cash-on-delivery'">
                            <img src="/images/Shape.png" alt="" role="presentation" height="48" width="48" />
                            <p class="opacity-50 text-[.95rem]">The 'Cash on Delivery' option enables you to pay in cash when our delivery 
                            courier arrives at your residence. Just make sure your address is correct so 
                            that your order will not be cancelled.</p>
                        </div>
                    </div>
                </div>

                <OrderSummary class="lg:w-[30%]" @submit="submit()"/>
            </form>
            <ThankYouCard v-if="pay === true"/>
        </div>
    </main>
    <SharedTheFooter />
</template>

<script setup>
import { ref } from 'vue';
const payment = ref('e-Money')
let pay = ref(false)
//let pay = false;
console.log(pay.value)

const billingDetails = ref([
    {
        label: 'Name',
        placeholder: 'Alexa Ward',
        type: 'text',
        id: 'name',
        value: '',
        isError: false,
    },
    {
        label: 'Email Address',
        placeholder: 'alexei@mail.com',
        type: 'text',
        id: 'email',
        value: '',
        isError: false,
    },
    {
        label: 'Phone number',
        placeholder: '+1 202-555-0136',
        type: 'number',
        id: 'phone-number',
        value: '',
        isError: false,
    }
]).value

const shippingInfo = ref([
    {
        label: 'Your Address',
        placeholder: '1137 Williams Avenue',
        type: 'text',
        id: 'address',
        value: '',
        isError: false,
    },
    {
        label: 'ZIP Code',
        placeholder: '100-1',
        type: 'number',
        id: 'zip-code',
        value: '',
        isError: false,
    },
    {
        label: 'City',
        placeholder: 'New York',
        type: 'type',
        id: 'city',
        value: '',
        isError: false,
    },
    {
        label: 'Country',
        placeholder: 'United States',
        type: 'text',
        id: 'country',
        value: '',
        isError: false,
    }
]).value

const paymentDetails = ref([
    {
        label: 'e Money',
        value: '',
        id: 'e-Money'
    },
    {
        label: 'Cash on Delivery',
        value: '',
        id: 'cash-on-delivery'
    },
]).value

const paymentMethods = ref([
    {
        label: 'e-Money Number',
        placeholder: '238521993',
        type: 'number',
        id: 'e-money-number',
        value: '',
        isError: false,
    },
    {
        label: 'e-Money PIN',
        placeholder: '6891',
        type: 'number',
        id: 'e-money-pin',
        value: '',
        isError: false,
    },
]).value

function submit() {
    let checkoutDetails = [...billingDetails, ...shippingInfo, ...paymentMethods]

    checkoutDetails.forEach( (item) => {
        if(item.value === '') {
            item.isError = true;
            pay.value = false;
        }else {
            item.isError = false;
        }

        if (!checkoutDetails.some((item) => item.value === '')) {
            pay.value = true;  // Set pay to true if no item value is empty
        }
    })
}
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

.shipping-info {
    @apply sm:grid grid-cols-2 gap-x-4;
}
</style>