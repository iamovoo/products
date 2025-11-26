  <template>
  <div class="hidden lg:block ">
  <nav class=" flex justify-between p-5 background align-middle fixed w-screen border-b-2 border-[#334155] z-10 " @click="cancel">
    <div >
      <h2 class=" font-bold lg:text-xl md:text-lg sm:text-sm"><nuxt-link to="/">Dasshing Stores</nuxt-link></h2>
    </div>
    <div  class=" relative">
    <input type="text" class=" pl-2 rounded-md p-1  bg-blue-950" placeholder="Search Items" @input="search" v-model="searchItem">
    <div class=" overflow-y-scroll h-48 rounded-xl py-2 w-96 searchbar bg-[#131e36] z-10 scroll-smooth" v-if="isShowSearchbar">
      <div><p class="absolute top-20 text-gray-500 left-40" v-if="isResult">no result</p></div>
      <div v-for="item in products" :key="item.id">
        <nuxt-link :to="`/products/items/${item.id}`"><div class=" p-2 border-b text-xs text-white active:bg-blue-900 hover:opacity-80" @click="cancel">{{ item.title }}</div></nuxt-link>
      </div>
      </div>
    </div>
    <div class="link flex justify-between gap-5 pr-7">
      <nuxt-link to="/products" class="text-lg hover:underline hover:opacity-90 cursor-pointer font-semibold">Home</nuxt-link>
    <div> 
      <p class="text-lg hover:underline hover:opacity-90 cursor-pointer font-semibold"><nuxt-link to="/products/items">Products</nuxt-link></p>
    </div>
       <nuxt-link to="/cart">
          <div class="relative cursor-pointer hover:underline hover:opacity-90">
            <div class=" bg-red-700 rounded-3xl w-5 absolute text-xs  text-center right-0 top-0">{{ cart.total }}</div> 
            <p class= "font-bold pb-2 text-lg ">Cart</p>
          </div>
        </nuxt-link>
      <div class=" font-bold border-l-2 text-lg  "><span  class=" text-md">👋🏻</span> {{username}}</div>
    </div>
  </nav>
  </div>
  <div class="hidden md:block lg:hidden">
  <nav class=" flex justify-between p-5 background align-middle fixed w-screen border-b-2 border-[#334155] z-10 " @click="cancel">
    <div >
      <h2 class=" font-bold lg:text-xl md:text-lg sm:text-sm"><nuxt-link to="/">Dasshing Stores</nuxt-link></h2>
    </div>
    <div  class=" relative">
    <input type="text" class=" pl-2 rounded-md p-1  bg-blue-950 w-72" placeholder="Search Items" @input="search" v-model="searchItem">
    <div class=" overflow-y-scroll h-48 rounded-xl py-2 w-96 searchbar bg-[#131e36] z-10 scroll-smooth absolute left-[-35px]" v-if="isShowSearchbar">
      <div><p class="absolute top-20 text-gray-500 left-40" v-if="isResult">no result</p></div>
      <div v-for="item in products" :key="item.id">
        <nuxt-link :to="`/products/items/${item.id}`"><div class=" p-2 border-y  text-xs text-white active:bg-blue-900 hover:opacity-80" @click="cancel">{{ item.title }}</div></nuxt-link>
      </div>
      </div>
    </div>
    <div class="link flex justify-between gap-5 pr-7">
      <nuxt-link to="/products" class="text-lg hover:underline hover:opacity-90 cursor-pointer font-semibold">Home</nuxt-link>
    <div> 
      <p class="text-lg hover:underline hover:opacity-90 cursor-pointer font-semibold"><nuxt-link to="/products/items">Products</nuxt-link></p>
    </div>
        <nuxt-link to="/cart">
        <div class="relative cursor-pointer hover:underline hover:opacity-90">
          <div class=" bg-red-700 rounded-3xl w-5 absolute text-xs  text-center right-0 top-0">0</div> 
          <p class= "font-bold pb-2 text-lg ">Cart</p>
        </div>
        </nuxt-link>
      <div class=" font-bold border-l-2 text-lg  "><span  class=" text-md">👋🏻</span> {{username}}</div>
    </div>
  </nav>
  </div>
   <div class="block md:hidden">
  <nav class=" flex justify-between py-5 px-4 background align-middle fixed w-screen border-b-2 border-[#334155] z-10 " @click="cancel">
    <!-- <div >
      <h2 class=" font-bold text-lg "><nuxt-link to="/">D-S</nuxt-link></h2>
    </div> -->
    <div  class=" relative">
    <input type="text" class=" pl-2 rounded-md p-1  bg-blue-950 w-64" placeholder="Search Items" @input="search" v-model="searchItem">
    <div class=" overflow-y-scroll h-48 rounded-xl py-2 w-96 searchbar bg-[#131e36] z-10 scroll-smooth" v-if="isShowSearchbar">
      <div><p class="absolute top-20 text-gray-500 left-40" v-if="isResult">no result</p></div>
      <div v-for="item in products" :key="item.id">
        <nuxt-link :to="`/products/items/${item.id}`"><div class=" p-2 border-b text-xs text-white active:bg-blue-900 hover:opacity-80" @click="cancel">{{ item.title }}</div></nuxt-link>
      </div>
      </div>
    </div>
    <div class=" p-1 relative">
      <div class=" flex gap-3 px-1 justify-center" @click="">
       <div class=" bg-blue-950 p-1"> <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/50/align-justify.png" alt="align-justify"/></div> 
      </div>
      <div class=" absolute top-[45px] left-[2px]" >
        <div class="link  bg-blue-950">
         <nuxt-link to="/products" class="text-sm hover:opacity-85 cursor-pointer font-semibold px-4 py-2">Home</nuxt-link>
         <p class=" text-sm  hover:opacity-85 cursor-pointer font-semibold border-b px-4 py-3"><nuxt-link to="/products/items">Products</nuxt-link></p>
           <nuxt-link to="/cart">
           <div class="relative px-4 py-2 ">
             <div class=" bg-red-700 rounded-3xl w-5 absolute text-xs  text-center right-6 top-0">{{cart.total}}</div> 
             <p class= " pb-2 text-sm ">Cart</p>
           </div>
           </nuxt-link>
          </div>
        </div>
      </div>
      <div class=" font-bold"><span  class=" text-md">👋🏻</span> {{username}}</div>

  </nav>
  </div>
  <div class="p-4  background w-screen min-h-screen " @click="cancel" >
    <slot />
  </div>
  </template>
  <script setup>
// const totalCart = useCookie('cart', {default:()=>0})
import {useCartStores} from "~/stores/cartScores"
const cart = useCartStores()

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
      if(products.value.length === 0){
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
  </style>