import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const filtersList = ref(['youtube', 'twitch'])

  function addValueToFilterList(value) {
    filtersList.value.push(value)
  }
  return { addValueToFilterList, filtersList }
})
