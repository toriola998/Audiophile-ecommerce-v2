import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
    //INCREMENT/DECREMENT OF PRODUCT QUANTITY
    function decrement(payload) {
        if(payload.quantity.value !== 0) {
            payload.quantity--
        }else {
            return 0;
        }
    }
    function increment(payload) {
        payload.quantity++
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
    }

    return {
        increment, decrement, cart, addToCart
    }
})
