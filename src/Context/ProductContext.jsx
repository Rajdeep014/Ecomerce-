import { createContext,useContext, useState } from "react";

export const ProductContext=createContext()
const [cart, setCart] = useState([])

export const ProductProvider=({children})=>{

    const addToCart=(product)=>{
        setCart((prevCart)=>[...prevCart,product])
    }
  const BuyNow=(product)=>{
    console.log('Buying Product:',product)
  }
  const removeFromCart=(productId)=>{
setCart((prevCart)=>prevCart.filter(product=> product.id !==productId))
  }

    return (
    <ProductContext.Provider value={{ cart, addToCart, BuyNow, removeFromCart }}>
    {children}
  </ProductContext.Provider>
    )


}







 export const useProduct=()=>{
    useContext(ProductContext)
}