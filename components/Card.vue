<template>
  <div class="p-10">
    <p class=" font-bold text-2xl p-4 pt-7 mb-4">{{ id }}</p> 
    <div class=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <div v-for="item in products" :key="item.id">
        <div class="rounded-3xl border-[#334155] bg-[#1E293B] border-2 mb-4 overflow-hidden p-2 ">
        <nuxt-link :to="`/products/items/${item.id}`">
          <div class="relative h-46 overflow-hidden hover:scale-105 transition-full duration-500 rounded-md">
            <img :src="item.images[0]" alt="" class="w-full h-full object-cover hover:scale-100 transition-full duration-500"/>
            <div class=" absolute bottom-0 top-0 left-0 right-0 bg-black bg-opacity-35"></div>
            <div class="absolute top-2 right-2 bg-[#0F172A] text-xs px-2 py-1 rounded-full text-white">
              ${{ item.price }}
            </div>
          </div>
        </nuxt-link>
        <div class=" p-4 border-2 border-[#334155] rounded-lg mt-2 cursor-pointer">
          <!-- <p class=" truncate"> Category<span class=" font-bold"> : {{item.category}}</span></p> -->
          <p class="text-sm py-2 px-2 truncate "><span class=" font-bold truncate">{{item.title}}</span></p>
         <nuxt-link :to="`/products/items/${item.id}`"><p class="text-xs px-2 truncate hover:underline hover:opacity-85 "><span class=" font-bold truncate">Click for more info..</span></p></nuxt-link>
          <div class=" bg-blue-900 text-center p-2 rounded-xl mt-3 flex gap-3 text-xs font-bold hover:bg-blue-950 active:opacity-75 transition-all duration-100"><img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/add-shopping-cart.png" alt="add-shopping-cart"/> Add to Cart</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
const prop = defineProps({
  products:{
    type:Array
  },
    id:{
    type:String
  }

})
</script>