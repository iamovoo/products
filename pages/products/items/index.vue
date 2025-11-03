<template>
<div class="hidden md:block">
<p class=" font-bold mt-20 px-10 text-2xl pb-0 ">All items</p>
<div class=" flex justify-end mr-10">
  <input type="text" class=" pl-2 rounded-md p-1  bg-blue-950 w-80" placeholder="Search items" v-model="searchItem">
</div>
<Card :products="items" />
</div>
</template>
<script setup>

const items = ref([])
const allItems = ref([])
const {data} = await useFetch(`https://dummyjson.com/products?limit=0`)
allItems.value = data.value?.products
items.value = allItems.value
console.log(allItems.value)
// watch(data, (res) => console.log(res))

const searchedItem = ref(null)
const searchItem = ref('');
watch(searchItem, (res) =>{ console.log(res)
if(searchItem.value){
   searchedItem.value = allItems.value.filter((item)=>{
    return item.title.toLowerCase().includes(searchItem.value.toLowerCase())
})
}
else{
   searchedItem.value = allItems.value
}
items.value = [...searchedItem.value];
console.log(searchedItem.value, items.value);
})
</script>