<template>
<div>
 <nav class=" flex justify-between p-5 background align-middle fixed w-screen border-b-2 border-[#334155] z-10 " @click="cancel">
  <div >
    <h2 class=" font-bold lg:text-xl md:text-lg sm:text-sm"><nuxt-link to="/">Dasshing Stores</nuxt-link></h2>
  </div>
  <div  class=" relative">
  <input type="text" class=" pl-2 rounded-md p-1  bg-blue-950" placeholder="Search Items" @input="search" v-model="searchItem">
  <div class=" overflow-y-scroll h-48 rounded-xl py-2 w-96 searchbar bg-[#131e36] z-10 scroll-smooth" v-if="isShowSearchbar">
    <div><p class="absolute top-20 text-white" v-if="isResult">no result</p></div>
    <div v-for="item in products" :key="item.id">
       <nuxt-link :to="`/products/items/${item.id}`"><div class=" p-2 border-b text-xs text-white active:bg-blue-900 hover:opacity-80" @click="cancel">{{ item.title }}</div></nuxt-link>
    </div>
    </div>
  </div>
  <div class="link flex justify-between gap-5 pr-7">
    <nuxt-link to="/products" class="sm:text-sm">Home</nuxt-link>
   <div> <p class="sm:text-sm hover:underline hover:opacity-90 cursor-pointer"><nuxt-link to="/products/items">Products</nuxt-link></p></div>
    <div class=" font-bold border-l-2 sm:text-sm "><span  class=" text-md">👋🏻</span> {{username}}</div>
  </div>
</nav>
   </div>

<div class="p-4  background w-screen min-h-screen " @click="cancel" >
  <slot />
</div>
</template>
<script setup>
const username = useCookie('username',{default:()=>''})
const searchItem = ref('')
const products = ref('')
const isResult = ref(false)
const cancel = function(){
 isShowSearchbar.value = false
 searchItem.value = ''
}

const isShowSearchbar = ref(false)
const search = async ()=>{
  if(searchItem.value){
    console.log(searchItem.value);
    isShowSearchbar.value = true
    isResult.value = false
    const {data:items} = await useFetch(`https://dummyjson.com/products/search?q=${searchItem.value}`)
    products.value = await items.value.products
    console.log(products.value)
    if(!items){
      isResult.value = true
    }
  }
  else if(!searchItem.value){
     isShowSearchbar.value = false
  }

}
</script>
<style>
input{
  width: 380px;
}
.background{
  background-color:  #0F172A;
   color:#F1F5F9 ;
   width: 100vw;
}
nav{
  background-color:  #1E293B;
  color:#F1F5F9 ;
  width: 200px;
}
.searchbar{
  position: absolute;
  top:43px;
}
/* @media (max-width:880px) {
input{
  width: 200px;
}
}
@media (max-width:887.33px) {
.searchbar{
  position: absolute;
  top: 12%;
  left: 10%;

}
}
@media (max-width:1029.33px) {
.searchbar{
  position: absolute;
  top: 12%;
  left: 30%;

}
}
@media (max-width:881px) {
.searchbar{
width: 290px;
 left: 31%;
}
}
@media (max-width:762px) {
.searchbar{
width: 290px;
 left: 26%;
 height: 180px;
}
} */
/* A. Dark Mode
Background: #0F172A
Nav/Footer: #1E293B
Text: #F1F5F9
Card: #1E293B
Accent: #38BDF8 (sky blue)

B. Warm Fashion Store (Boutique Style)
Background: #FAF5F0
Nav/Footer: #FFFFFF
Accent: #D97706 (amber)
Card: #FFFFFF with soft shadow
Text: #3B3B3B */

</style>