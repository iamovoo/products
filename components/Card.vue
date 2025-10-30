<template>
  <div class="p-10">
    <p class=" font-bold text-2xl p-4 pt-7 mb-4">{{ id }}</p> 
    <div class=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <div v-for="item in products">
        <div class="rounded-3xl border-[#334155] bg-[#1E293B] border-2 mb-4 overflow-hidden ">
          <div class="relative h-56 overflow-hidden hover:scale-105 transition-full duration-500">
            <img :src="item.images[0]" alt="" class="w-full h-full object-cover hover:scale-100 transition-full duration-500"/>
            <div class="absolute top-2 right-2 bg-[#0F172A] text-xs px-2 py-1 rounded-full text-white">
              ${{ item.price }}
            </div>
            <div class=" absolute bottom-0 top-0 left-0 right-0 bg-black bg-opacity-35"></div>
            <!-- <div class=" py-4 px-2 text-xs absolute bottom-5 "> -->
            <!-- <p class=" truncate"> Category<span class=" font-bold"> : {{item.category}}</span></p> -->
            <!-- <p class=" truncate absolute bottom-5">{{item.category}}</p> -->
            <p class=" absolute bottom-3 text-sm py-4 px-2 truncate text-center w-56"><span class=" font-bold truncate">{{item.title}}</span></p>
          <!-- </div> -->
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