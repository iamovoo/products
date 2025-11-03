import { defineStore } from "pinia";
import { addDoc, collection, doc,deleteDoc , getDocs, updateDoc  } from "firebase/firestore";
export const useCartStores = defineStore("cart",()=>{
    const cart = ref([])

    const addCart = async(product )=>{
    const {$db} = useNuxtApp()
    const docRef = await addDoc(collection($db,"cart"), product, product.id);
    cart.value.push({id:docRef.id, ...product,productId: product.id})
    }

    const fetchCart = async()=>{
    const {$db} = useNuxtApp()
    const data = await getDocs(collection($db,"cart"));
    cart.value = data.docs.map((item)=>({...item.data(), id: item.id}))
    }

   const deleteCart = async(id)=>{
   const {$db} = useNuxtApp()
   await deleteDoc(doc($db,"cart", id))
   cart.value = cart.value.filter((item)=>item.id !== id)
    }

    const total =computed(()=>cart.value.length)

    const totalPrice =computed(()=>
      cart.value.reduce((acc, curr)=>acc + curr.price,0)
  )
    return{cart, addCart, fetchCart,deleteCart, total,totalPrice}
})
