    <template>
      <!-- <p class=" p-14"> id:{{ id }}</p> -->
    <main class=" mt-12">
      <div class=" layout pt-10 px-5 cursor-pointer">
        <div class=" flex gap-3 border-2 border-[#334155] rounded-xl p-3 m-3 ">
          <div>
            <p class="font-bold text-xl py-4 px-1 uppercase">{{data.category}}</p>
            <div class="w-96 overflow-hidden border border-[#334155] rounded-xl relative group">
              <img :src="data.thumbnail" alt="" class="group-hover:scale-105 transition-all duration-500">
              <div class=" bg-black bg-opacity-30 absolute left-0 right-0 bottom-0 top-0"></div>
              <p class=" font-bold text-sm absolute bottom-6 right-6 group-hover:scale-105 transition-all ">{{data.availabilityStatus }}</p>
            </div>
           <div class="border-2 border-[#334155] rounded-xl mt-3 p-3">
             <div class="flex mt-2 gap-2">
              <div v-for="image in img">
                <div class=" border border-[#334155] rounded-md w-14 ">
                  <img :src="image" alt="" class=" object-contain">
                </div>
              </div>
            </div>
            <div class=" flex gap-2 my-3">
              <div v-for="tag in data.tags">
                  <p class=" bg-[#334155] bg-opacity-50 px-2 py-1 rounded-full text-xs">{{tag}}</p>
                </div>
            </div>
           </div>
          <h2 class=" font-bold text-xl py-2">Dimensions</h2>
          <div class=" flex">
            <p class="text-sm"> Width- <span class="font-bold">{{data.dimensions.width }}</span> </p>
            <p class="text-sm">, Height- <span class="font-bold">  {{data.dimensions.height }} </span> </p>
            <p class="text-sm">, Depth- <span class="font-bold"> {{data.dimensions.depth }}</span> </p>
            </div>
          
          </div>
          <div class=" p-3 border border-[#334155] m-2 rounded-xl flex flex-col justify-between ">
          <div>
              <p class=" text-lg font-bold text-center mb-2">{{data.title }} ( Brand-{{data.brand }})</p>
            <div class=" border-2 py-4 px-2 border-[#334155] rounded-md">
              <p class=" font-bold text-sm py-1  ">Description :<span class=" font-normal ">{{data.description }}</span></p>
            </div>
            <div class=" flex gap-2">
            <p class=" font-bold text-2xl py-2 "> ${{data.price }}</p>
            <p  class=" font-bold text-sm py-3 ">( -{{data.discountPercentage}} % <span  class=" date">discount</span> )</p>
            </div>
            <div class=" w-36 bg-blue-900 text-center p-2 rounded-xl mt-3 flex gap-3 text-xs font-bold hover:bg-blue-950 active:opacity-75 transition-all duration-100"><img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/add-shopping-cart.png" alt="add-shopping-cart"/> Add to Cart</div>

            <h2 class="my-3  text-lg font-bold text-center"> Other Informations ...</h2>
            <div class="mt-4 border-2 py-4 px-2 border-[#334155] rounded-md">
            <p><span class=" font-semibold text-sm">Ratings-</span> {{data.rating }}⭐</p>
            <p class=" text-sm "><span class="font-bold text-sm">Shipping Information</span>: {{data.shippingInformation }}- (Enjoy cheaper shipping fees when you select a pickup station at checkout)</p>
            <!-- <p class=" text-xs"></p> -->
            <p class=" font-bold text-sm">Warranty <span class="font-normal">: {{data.warrantyInformation }}</span></p>
            <p class=" text-xs py-1">[ {{data.minimumOrderQuantity }} Minimum Order Quantity ]</p>
            </div>
          </div>
            <div class="mt-4">
              <div class="flex flex-row gap-4 ">
                <img width="50" height="50" :src="data.meta.qrCode"/>
                <div>
                  <p class="date">{{data.meta.barcode }}</p>
                  <p class=" font-bold text-sm pb-1"> {{data.returnPolicy}} </p>
                  <p class=" date">{{createdAtdate }}</p>
                  </div>
                </div> 
             </div>
          </div>
        </div>
      <section class="border-2 border-[#334155]  rounded-lg p-3 ml-2">
        <div class=" p-3 ">
          <h1 class=" font-bold text-sm">Dasshing Stores</h1>
          <div class="p-3 border-2 border-[#334155] m-2 rounded-xl">
            <p class=" text-xs "><span class="  font-bold">Delivery & Returns</span> <br/>
             The BEST products, delivered faster. Now PAY on DELIVERY, Cash or Bank Transfer Anywhere, Zero Wahala! Details
            </p>
         </div>
        </div>
        <div class="p-3 border border-[#334155] m-2 rounded-xl">
          <p class=" text-sm font-bold">Recent Reviews...</p>
          <div v-for="review in data.reviews">
              <div class="my-2  p-2 bg-white rounded-lg text-black">
               <div class=" flex gap-2">
                 <div class=" flex gap-2">
                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/user-male-circle.png" alt="user-male-circle"/>
                    <p class=" font-bold text-xs w-28">{{review.reviewerName }}</p>
                 </div>
                 <p class="font-bold date truncate">{{review.reviewerEmail }}</p>
                </div>
                <p class=" text-xs font-bold">{{ data.title }}</p>
                <p class=" text-xs"><span class=" font-bold">Ratings</span>: {{review.rating }}⭐</p>
                <p class=" text-xs"><span class=" font-bold">Comment</span>: {{review.comment }}</p>
                <p class=" date pt-1 ">{{review.date }}</p>
              </div>
            </div>
          </div>
          <nuxt-link :to="`/products/${data.category}`"><p class="text-xs font-bold pl-4 ">Others like - <span class=" hover:underline date hover:opacity-75 font-normal">{{ data.title }}</span></p></nuxt-link>
      </section>
      </div>
      </main>

    </template>
    <script setup>
    // const date = data.value.meta.createdAt
    const img = ref([])
    const {id } = useRoute().params
    const {data, loading , error} = await useFetch(`https://dummyjson.com/products/${id}`)
    const createdAtdate =new Date(data.value.meta.createdAt)
    // const reviewdate =new Date(data.value.meta.createdAt)
    console.log(createdAtdate);
    console.log(data.value);

    for(let i = 0 ; i < 3 ; i++){
      // console.log(i);
      console.log(data.value.images[i]);
      if(data.value.images[i]){
        img.value.push(data.value.images[i])
        console.log(img.value);
      }
      
      
      data.value.images[i]
    }

    </script>


    <style >
      /* .images{
        width: 400px;
      } */
      .layout{
        display: grid;
        grid-template-columns: 1fr 350px;
      }
      .date{
        font-size: 10px;
      }
    </style>
