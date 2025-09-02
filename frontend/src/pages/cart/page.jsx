import { useState } from "react";
import { userCartContext } from "../../contexts/useCartContext"
import styles from './page.module.css'
import { AiOutlineMinusCircle } from "react-icons/ai";
import ConfirmOrderPopUp from "../../components/confirmOrderPopUp/confirmOrderPopUp";
import { useNavigate } from "react-router-dom"
import orderService from "../../service/order";

export default function Cart(){

    const { cartItems, updateCartItems, removeToCart, clearCart } = userCartContext()
    const [confirmPopUpOpen, setConfirmPopUpOpen ] = useState(false)
    const {sendOrder} = orderService()
    const navigate = useNavigate()

    console.log(cartItems)

    const handleChangeItemQty = (mode, itemId) =>{
        const updatedCartItem = cartItems.map((item) =>{
            if(item._id === itemId){

                if(mode === 'more'){

                    item.quantity += 1;

                }else if(mode === 'less' && item.quantity > 1){

                    item.quantity -= 1;
                }
            }
          return item
        })

        updateCartItems(updateCartItems)
    }

    const handleOpenPopUp = (e) =>{
        e.preventDefault()
        setConfirmPopUpOpen(!confirmPopUpOpen)
    }

    const handleConfirmOrder = (orderData) =>{
       orderData.items = cartItems.map((item) =>{
        return {plateId: item._id, quantity: item.quantity}
       })

       console.log("Order data: ", orderData)
       sendOrder(orderData)
       setConfirmPopUpOpen(!confirmPopUpOpen)
       clearCart()
    }

    if(!cartItems.length){
        return(
        <div>
            <h1>Your cart is empty...:/</h1>
            <button onClick={() => {navigate('/plates')}}>See our specialities</button>
        </div>
        )
    }

    return (
        <>
            <div className={styles.pageContainer}>
            <h1>Your Items: </h1>
            <section>
                <div className={styles.itemsListContainer}>
                    {cartItems.map((item) =>(
                        <div className={styles.itemContainer} key={item._id}>
                            <img src={item.imgUrl}></img>
                            <div className={styles.itemContent}>
                                <h2>{item.name}</h2>
                                <p>{String(item.ingredients)}</p>
                                <p>{item.description}</p>
                                <div className={styles.portions}>
                                    <p>Portions: </p>
                                    <p>{item.quantity}</p>
                                    <div className={styles.portionsButtons}>
                                        <button onClick={() => {handleChangeItemQty('less', item._id)}}>-</button>
                                        <button onClick={() => {handleChangeItemQty('more', item._id)}}>+</button>
                                    </div>
                                </div>
                                <button onClick={() => {removeToCart(item._id)}}><AiOutlineMinusCircle /> Remove item</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <button className={styles.confirmButton} onClick={handleOpenPopUp}>Confirm your Order!</button>
            </div>

            <ConfirmOrderPopUp open={confirmPopUpOpen} onClose={handleOpenPopUp} onCofirm={handleConfirmOrder}/>
        </>
    )
}