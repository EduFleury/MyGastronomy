import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import authService from "../../service/auth"
import orderService from "../../service/order"
import styles from './page.module.css'
import { LuLogOut, LuTimer, LuCircleAlert, LuSquareCheckBig   } from "react-icons/lu";
import Loading from "../loading/page"

export default function Profile(){

    const navigate = useNavigate()
    const { logout } = authService()
    const { getUserOrders, orderLoading, refectOrders, ordersList } = orderService()

    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() =>{
        if(!authData){
             navigate('/auth')
        }else if (refectOrders){
            getUserOrders(authData?.user?._id)
        }
    }, [authData])

    if(orderLoading){
        return(<Loading/>)
    }

    const handleLogout = () =>{
        logout()
        navigate('/')
    }

    console.log(ordersList)

    return (
        <div className={styles.pageContainer}>
            
            <div className={styles.userContainer}>
                <h1>{authData?.user?.fullname}</h1>
                <h2>{authData?.user?.email}</h2>
            </div>

            <button className={styles.logout} onClick={handleLogout}>Logout<LuLogOut/></button>

            {ordersList.length > 0 ? 
                <div className={styles.ordersContainer}>
                    {ordersList.map((order) =>(
                        <div key={order._id} className={styles.orderContainer}>
                            <div className={styles.orderHeader}>
                                {order.pickupStatus === 'Pending' && <p className={`${styles.pickupStatus} ${styles.pending}`} ><LuTimer/>{order.pickupStatus}</p>}
                                {order.pickupStatus === 'Completed' && <p className={`${styles.pickupStatus} ${styles.completed}`} ><LuSquareCheckBig />{order.pickupStatus}</p>}
                                {order.pickupStatus === 'Canceled' && <p className={`${styles.pickupStatus} ${styles.canceled}`} ><LuCircleAlert />{order.pickupStatus}</p>}
                                <span className={styles.pickupTime}>{order.pickupTime}</span>
                            </div>
                            <div className={styles.orderItems}>
                                {order.orderItems.map((items) =>(
                                    <div key={items.plateId}>
                                        <h4 className={styles.orderItemName}>{items.itemDetails[0].name}</h4>
                                        <p className={styles.orderItemQuantity}>Quantity: {items.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            :
                <div className={styles.noOrders}>
                    You do not have orders yet.
                    <Link to={'/plates'} className={styles.platesLink}>Click here and see our specialities!</Link>
                </div>
            }
        </div>

    )
}