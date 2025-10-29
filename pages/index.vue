<template>
<div class=" backgroundColor w-lvw h-lvh text-white">
 <div class=" flex p-3 justify-center te"><p class=" font-bold p-2">Name of Purchaser</p>
 <form action="" @submit.prevent="openProductPage"><input type="text" placeholder="Search" class=" rounded-lg p-2 bg-blue-950 w-72" v-model="nameInp"></form>
  </div>
  <div class=" relative">
 <div class=" absolute top-20 left-1/3">
   <h2 class=" text-center "><span class=" text-2xl font-bold ">Welcome to</span> <br/><span class=" font-bold text-5xl"> Dasshing Stores </span></h2>
 </div>
 <div class=" absolute top-56 left-10">  
   <div class="grid grid-cols-3 text-xl">
   <div class=" ">
      <p class=" p-3 font-bold w-96 ">Effortless Style. Everyday Comfort.
      Discover timeless pieces made to fit your lifestyle. Shop our latest arrivals and redefine your wardrobe with essentials that never go out of style
      </p>
   </div>
    <div class=" ">
      <p class=" p-3 font-bold w-96 ">Effortless Style. Everyday Comfort.
      Discover timeless pieces made to fit your lifestyle. Shop our latest arrivals and redefine your wardrobe with essentials that never go out of style
      </p>
   </div>
    <div class=" ">
      <p class=" p-3 font-bold w-96 ">Effortless Style. Everyday Comfort.
      Discover timeless pieces made to fit your lifestyle. Shop our latest arrivals and redefine your wardrobe with essentials that never go out of style
      </p>
   </div>
  </div>

 </div>
</div>
 
</div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: function(to, from){
   const username = useCookie('username',{default:()=>''})
   username.value = null;
  }
})
const nameInp = ref('');
const username = useCookie('username',{default:()=>''})
const openProductPage = ()=>{ 
  username.value = nameInp.value[0].toLocaleUpperCase() +  nameInp.value.slice(1)
  return navigateTo('/products')
}
</script>

<style>

</style>