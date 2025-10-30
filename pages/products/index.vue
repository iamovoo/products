  <template>
    <div class="w-screen min-h-screen backgroundColor text-white p-10">

      <div class=" flex justify-center align-middle pt-8">
        <header class="bg-white p-6 shadow-sm text-center rounded-lg ">
          <h1 class="text-3xl font-bold text-gray-800 cursor-pointer">✨ Our Latest Categories</h1>
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
      <div class=" grid grid-cols-5 gap-3 p-5 ">
        <div v-for="item in items":key="item.name">
          <div class=" rounded-lg border-2 m-1 lg:w-56  hover:shadow-2xl card">
          <div>
            <p class="text-center font-bold pt-2 cursor-pointer p-4">{{ item.name }}</p>
            </div>
            <nuxt-link :to="`/products/${item.name}`"> <p  class="text-center bg-blue-950 p-1 rounded-b-lg hover:bg-blue-900 active:bg-green-700 text-xs ">View Content</p></nuxt-link>
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
  const items = ref('');
  const {data, loading , error} = await useFetch('https://dummyjson.com/products/categories')
  items.value = data.value
  const searchedItem = ref(null)
  const searchItem = ref('');
  const search =()=>{
  if(searchItem.value){
    searchedItem.value = data.value.filter((item)=>{
      return item.name.toLowerCase().includes(searchItem.value.toLowerCase())
  })
  }
  else{
    searchedItem.value = data.value
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