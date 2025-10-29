<template>
  <p class=" p-14"> id:{{ id }}</p>
  <p>{{ data.title }}</p>
  
</template>
<script setup>
const {id } = useRoute().params
//  https://dummyjson.com/products/{id}
const {data, loading , error} = await useFetch(`https://dummyjson.com/products/${id}`)
console.log(data.value);

</script>


<style lang="css" scoped>
  
</style>
