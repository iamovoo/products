<template>
<Card :products="products" :id="id"/>
</template>

<script setup>
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