import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({children}){

    const [cartItems, setCartItems] = useState([])
    
    const addToCart = (itemToAdd)=>{
        const checkItemAlredy = cartItems.find((cartItem) =>{
            return cartItem._id === itemToAdd._id
        })

        if(!checkItemAlredy){
            itemToAdd.quantity = 1
            setCartItems([...cartItems, itemToAdd])
            console.log("Item add correctly")
        }else{
            console.log("Item is already on cart")
        }
    }

    const removeToCart = (itemId) =>{

        const cartItemsSanitized = cartItems.filter((item) =>{
            return item._id !== itemId
        })

         setCartItems(cartItemsSanitized)

    }

    const updateCartItems = (items) =>{
        setCartItems(items)
    }


    const clearCart = ()=>{
        setCartItems([])
    }

    return(
        <CartContext.Provider value={{removeToCart, addToCart, updateCartItems, cartItems, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const userCartContext = () =>{
    const context = useContext(CartContext)

    if(!context){
        console.log("You are out of cart context")
    }

    return context
}