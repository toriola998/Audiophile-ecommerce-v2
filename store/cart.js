import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
    //ADDING PRODUCT TO CART
    let cart = ref([])
    function addToCart(payload) {
        let cartProduct = cart.value.find((item) => item.id === payload.id);

        if(!cartProduct && payload.quantity >=1) {
            cart.value.push(payload);
        }else {
            return  
        }
    }

    //REMOVE ALL PRODUCTS FROM CART
    function removeAll() {
        cart.value = [];
    }

    //INCREMENT/DECREMENT OF PRODUCT QUANTITY
    function decrement(payload) {
        if(payload.quantity !== 0) {
            payload.quantity--
        }else {
            return 0;
        }
    }

    function increment(payload) {
        payload.quantity++;
    }

    const cartTotalAmount =  computed(() => {
        return cart.value.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    })

    return {
        increment, decrement, cart, addToCart, removeAll, cartTotalAmount
    }
})
