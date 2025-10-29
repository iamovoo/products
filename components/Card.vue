<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container mx-auto bg-gray-100">
    <div  v-for="product in products":key="product.id"  class="flex justify-center flex-col align-middle">
     <div class=" border-2 w-80 h-96 p-8  m-9 bg-white rounded-md">
       <nuxt-link :to="`/products/${product.id}`"> 
          <div class="  overflow-hidden w-44 h-44 rounded-lg border-black">
            <img :src="product.images[0]" alt="" class="object-contain p-5"></img>
          </div>
        </nuxt-link>
       <div class=" shadow-lg border-black my-1 w-64 rounded-xl flex flex-col gap-2 p-3 bg-gray-100">
        <nuxt-link :to="`/products/${product.id}`">
          <p class="font-bold cursor-pointer w-56">{{ product.title }}</p>
        </nuxt-link>
        <div class="flex">
          <p class=" font-medium "><span class=" font-semibold">Price:</span> ${{ product.price }}</p>
        </div>
      </div>
    </div>
     </div>
  </div>
</template>
<script setup>
const prop = defineProps(['products'])
</script>