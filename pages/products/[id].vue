<template>
  <div class="p-14">
    <p class=" font-bold text-2xl p-4 mb-4">{{ id }}</p>
    <div class=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <div v-for="item in products">
        <div class="rounded-3xl border-[#334155] bg-[#1E293B] border-2 mb-4 overflow-hidden ">
          <div class="relative h-48 overflow-hidden">
            <img :src="item.images[0]" alt="" class="w-full h-full object-cover hover:scale-110 transition-full duration-500"/>
            <div class="absolute top-2 right-2 bg-[#0F172A] text-xs px-2 py-1 rounded-full">
              ${{ item.price }}
            </div>
          </div>
          <div class=" p-4 border-t-2 text-xs">
            <p class=" truncate"> Category<span class=" font-bold"> : {{id}}</span></p>
            <!-- <p class=" truncate">{{item.brand}}</p> -->
            <p class=" truncate">Name<span class=" font-bold"> : {{item.title}}</span></p>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script setup>
// import { useRoute } from 'vue-router';
const products = ref('')
const {id} = useRoute().params
const {data, loading , error} = await useFetch(`https://dummyjson.com/products/category/${id}`)
products.value = data.value.products
console.log(data.value);
</script>
<style>
/* .card{
  border-radius: 50px;
} */
</style>