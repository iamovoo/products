<template>
<div class=" backgroundColor w-lvw min-h-screen text-white ">
<div class=" hidden lg:block">
    <div class=" flex w-screen min-h-screen p-8 gap-10">
    <div class=" flex flex-col gap-5">
      <div class=" w-96 overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
        <img src="/assets/background.jpg" alt="" class=" object-contain">
      </div>
      <div class=" w-96 overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
        <img src="/assets/young-woman-shopping-clothes.jpg" alt="" class=" object-contain">
      </div>
    </div>
    <div class=" p-10 border-2 rounded-2xl border-[#334155] cursor-pointer shadow-xl">
      <p class="  text-3xl font-bold p-2 text-end mt-20">Welcome to <span class="">Dasshing Stores</span> </p>
      <p class=" font-bold text-lg text-end pt-4">Buy from  Our Website</p>
     <div class=" text-end"> <p class=" text-end ">Effortless Style. Everyday Comfort.
      Discover timeless pieces made to fit your lifestyle. Shop our latest arrivals and redefine your wardrobe with essentials that never go out of style <br/>
      Welcome to Dasshing Stores a place where shopping feels effortless and exciting. Whether you’re discovering new favorites or finding something that feels perfectly you, we’ve got everything you need all in one spot. Take your time, explore our collections, and enjoy a shopping experience designed to make you smile.
      </p></div>
      <div class=" text-end py-4">
        <form action="" @submit.prevent="openProductPage"><input type="text" placeholder="what is your Name" class=" rounded-lg p-2 bg-blue-950  font-normal w-96" v-model="nameInp"></form>
      </div>
    </div>
  </div>
</div>
 <div class=" lg:hidden md:block">
    <div class=" flex flex-col w-screen min-h-screen p-8 gap-10">
    <div class=" flex flex-col gap-5">
      <div class=" flex gap-4">
        <div class=" w-96 overflow-hidden rounded-lg hover:scale-95 transition-all duration-300">
          <img src="/assets/background.jpg" alt="" class=" object-contain">
        </div>
        <div class=" w-96 overflow-hidden rounded-lg hover:scale-95 transition-all duration-300 h-52">
          <img src="/assets/young-woman-shopping-clothes.jpg" alt="" class=" object-contain">
        </div>
      </div>
       <div class=" flex gap-4">
         <div class=" w-96 overflow-hidden rounded-lg hover:scale-95 transition-all duration-300 h-52">
           <img src="/assets/young-woman-shopping-clothes.jpg" alt="" class=" object-contain">
         </div>
        <div class=" w-96 overflow-hidden rounded-lg hover:scale-95 transition-all duration-300 h-52">
          <img src="/assets/perfume.jpg" alt="" class=" object-contain">
        </div>
      </div>
    </div>
    <p class="  text-2xl font-bold p-6 text-center mt-10">Welcome to <br/> <span class=" p-1 text-4xl">Dasshing Stores</span> </p>
    <div class=" p-8 border-2 rounded-2xl border-[#334155] cursor-pointer shadow-xl">
      <p class=" font-bold text-xl text-center py-2">Buy from  Our Website</p>
     <div class=" text-center"> <p class=" text-center text-lg ">Effortless Style. Everyday Comfort.
      Discover timeless pieces made to fit your lifestyle. Shop our latest arrivals and redefine your wardrobe with essentials that never go out of style <br/>
      Welcome to Dasshing Stores a place where shopping feels effortless and exciting. Whether you’re discovering new favorites or finding something that feels perfectly you, we’ve got everything you need all in one spot. Take your time, explore our collections, and enjoy a shopping experience designed to make you smile.
      </p></div>
      <div class=" text-center py-4">
        <form action="" @submit.prevent="openProductPage"><input type="text" placeholder="what is your Name" class=" rounded-lg p-2 bg-blue-950  font-normal w-96" v-model="nameInp"></form>
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
/* @media (max-width:880px) {
  input{
    width: 200px;
  }
} */
</style>