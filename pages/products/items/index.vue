<template>

<p class=" font-bold mt-20 px-10 text-2xl pb-0 ">All items</p>
<div class=" flex justify-end mr-10">
  <input type="text" class=" pl-2 rounded-md p-1  bg-blue-950 w-72" placeholder="Search items" @input="search" v-model="searchItem">
</div>
<Card :products="items" />
</template>
<script setup>

const items = ref([])
const {data} = await useFetch(`https://dummyjson.com/products?limit=0`)
items.value = data.value?.products
watch(data, (res) => console.log(res))

const searchedItem = ref(null)
const searchItem = ref('');
const search =()=>{
if(searchItem.value){
   searchedItem.value = data.value.products.filter((item)=>{
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