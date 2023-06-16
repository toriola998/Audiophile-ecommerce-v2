import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {

    //INCREMENT/DECREMENT OF PRODUCT QUANTITY
    let quantity = ref(0);
    function decrement() {
        if(quantity.value !== 0) {
            quantity.value--
        }else {
            return 0;
        }
    }
    function increment() {
        quantity.value++
    }

    //ADDING PRODUCT TO CART
    let cart = ref([])
    function addToCart(payload) {
        let cartProduct = cart.value.find((item) => item.id === payload.id);

        if(cartProduct) {
            console.log('its there')
            cartProduct.quantity++;
        }else {
            console.log('not there')
            cart.value.push(payload);
        }
       // cart.value.push(payload)
    }

    return {
        quantity, increment, decrement, cart, addToCart
    }
})
