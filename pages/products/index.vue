  <template>
<div class="hidden md:block">
      <div class="w-screen min-h-screen backgroundColor text-white p-10">

      <div class=" flex justify-center align-middle pt-8">
        <header class="bg-white p-6 shadow-sm text-center rounded-lg ">
          <h1 class="text-3xl font-bold text-gray-800 cursor-pointer">✨View our Latest Categories</h1>
          <p class="text-gray-500 mt-2 cursor-pointer">Discover the season’s newest arrivals</p>
          <p class="text-gray-500 mt-1 text-xs hover:underline hover:opacity-75"> <nuxt-link to="/products/items">Click to view all Items </nuxt-link></p> 
        </header>
      </div>
      <div class="pt-10 mb-6 flex justify-end">
      <input type="text" class=" pl-4 rounded-md p-1  bg-blue-950 w-80" placeholder="Search categories" @input="search" v-model="searchItem">
      </div>
      <div class=" border p-2 rounded-md border-[#334155] ">
        <div v-if="loading" class="text-center py-12 text-gray-500">
          Loading products...
        </div>
         <div v-if="isResult" class="text-center py-12 text-gray-500">
          No Results...
        </div>
      <div class=" grid grid-cols-5 gap-3 p-5 ">
        <div v-for="item in items":key="item.name">
          <div class=" rounded-lg border-2 m-1 h-28 hover:shadow-2xl flex flex-col justify-between  ">
            <div>
              <p class="text-center font-bold pt-2 cursor-pointer p-4">{{ item.name }}</p>
            </div>
            <nuxt-link :to="`/products/${item.name}`" class=""> <p  class="text-center bg-blue-950 p-1 rounded-b-lg hover:bg-blue-900 active:bg-green-700 text-xs ">View Content</p></nuxt-link>
          </div>
        </div>
      </div>
      </div>
    </div>
</div>
<div class=" block md:hidden">
      <div class="w-screen min-h-screen backgroundColor text-white p-5">

      <div class=" flex justify-center align-middle pt-3">
        <header class="bg-white p-6 shadow-sm text-center rounded-lg ">
          <h1 class="text-2xl font-bold text-gray-800 cursor-pointer">Welcome {{username}}✨ Our Latest Categories</h1>
          <p class="text-black mt-2 cursor-pointer text-sm">Discover the season’s newest arrivals</p>
          <p class="text-gray-500 mt-1 text-xs hover:underline hover:opacity-75"> <nuxt-link to="/products/items">Click to view all Items </nuxt-link></p> 
        </header>
      </div>
      <div class="pt-10 mb-6 flex justify-end">
      <input type="text" class=" pl-4 rounded-md p-1  bg-blue-950 w-64" placeholder="Search categories" @input="search" v-model="searchItem">
      </div>
      <div class=" border p-2 rounded-md border-[#334155] ">
        <div v-if="loading" class="text-center py-12 text-gray-500">
          Loading products...
        </div>
         <div v-if="isResult" class="text-center py-12 text-gray-500">
          No Results...
        </div>
      <div class=" flex flex-col gap-3 p-5 ">
        <div v-for="item in items":key="item.name">
          <div class=" rounded-lg border-2 m-1 lg:w-56 md:h-28 hover:shadow-2xl  ">
          <div class="flex justify-between">
            <p class="text-center font-bold pt-2 cursor-pointer p-4">{{ item.name }}</p>
            <nuxt-link :to="`/products/${item.name}`">
              <div class=" bg-blue-950 p-2 px-4 hover:bg-blue-900 active:bg-green-700 text-lg font-bold"> 
               &rarr;
              </div>
            </nuxt-link>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
</div>
  </template>

  <script setup>
  definePageMeta({
    layout: false,
  })
  const username = useCookie('username',{default:()=>''})
  const items = ref('');
  const {data, loading , error} = await useFetch('https://dummyjson.com/products/categories')
  items.value = data.value
  const searchedItem = ref(null)
  const isResult = ref(false)
  const searchItem = ref('');
  const search =()=>{
  if(searchItem.value){
    isResult.value = false
    searchedItem.value = data.value.filter((item)=>{
      return item.name.toLowerCase().includes(searchItem.value.toLowerCase())
  })
  if(searchedItem.value.length === 0 ){
    isResult.value = true
  }
  }
  else{
    searchedItem.value = data.value
     isResult.value = false
  }
  items.value = [...searchedItem.value];
  console.log(searchedItem.value, items.value);
  }
  </script>
  <style>
  header{
    width: 1000px;
  }


  </style>