<template>
  <!-- <p class="font-bold text-2xl p-5 mt-14">Cart</p> -->
  <div class="p-6 gridLayout pb-1">
    <div class="">
      <p class="font-bold text-6xl py-5 mt-14 mb-3">Shopping Cart</p>
     <div class="border-[#334155]  mt-3">
       <!-- <p class="font-bold py-">Account Bank: Access Bank </p> -->
      </div>
      
      <p class="font-bold text-sm">Payment Method</p>
      <p class="font-bold text-xs py-1">Only Mastercard and Verve
      </p>
      <div class="flex justify-between flex-col gap-4 h-44 w-96 border-2 border-[#334155] p-4 rounded-lg mt-4 ">
       <div class="flex gap-10 border-b border-[#334155] ">
         <p class=" font-bold pt-2">Number</p> <input type="text" name="" id="" placeholder="Required" class=" background p-2 placeholder:text-sm">
        </div>
        <div class="flex gap-10 border-b border-[#334155] ">
          <p class=" font-bold pt-2 w-36">Expires</p> <input type="date" name="" id="" placeholder="Required" class="p-2 background text-sm">
        </div>
        <div class="flex  gap-10">
          <p class=" font-bold pt-2 pl-1 w-36">Cvv</p> <input type="text" name="" id="" placeholder="Required"  class=" p-2 background placeholder:text-sm ">
        </div>
      </div>
      <!-- <p class="font-bold text-xs py-1 mt-10">Complete your purchase today and treat yourself!</p>
      <p class="font-bold text-xs">“Hurry! Your selected items are selling quickly.”</p> -->

      
    </div>
    <div class="border-y-2 border-[#334155] p-4 pb-0 mt-14">
      <div class=" overflow-y-scroll h-96 " >
         <div v-for="item in cart.cart":key="item.id">
        <div class=" border-b border-[background] flex  gap-3 mb-3 rounded-md">
          <nuxt-link :to="`products/items/${item.productId}`">
            <div class=" overflow-hidden w-20 ml-2">
              <img :src="item.thumbnail" alt="" class=" object-contain">
            </div>
         </nuxt-link>
          <div class=" flex-col justify-between p-2">
            <p class=" font-bold text-xs p-1">{{ item.title }}</p>
            <p class=" text-xs p-1">${{ item.price }}</p>
            
            <p class=" truncate w-72  text-xs p-1">{{ item.description }}</p>
          </div>
         <div class=" text-center"> <button @click="cart.deleteCart(item.id)" class=" bg-red-800 font-bold px-2 py-1 rounded-lg  text-xs mt-6 ">delete</button></div>
        </div>
      </div>
    
      </div>
      <p class=" font-bold p-2 text-xs"> Total Amount :[ ${{cart.totalPrice.toFixed()}} ]</p>
    </div>
  </div>
</template>
<script  setup>

import {useCartStores} from "~/stores/cartScores"
const cart = useCartStores()
console.log(cart);

onMounted(() => {
   cart.fetchCart()
})
</script>


<style >
  .gridLayout{
    display: grid;
    grid-template-columns: 600px 1fr;
  }
</style>
