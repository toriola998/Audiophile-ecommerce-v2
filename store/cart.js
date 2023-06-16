import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
    let quantity = ref(0)
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

return {
    quantity, increment, decrement
}
})
