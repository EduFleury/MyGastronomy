import orderService from "../../service/order.jsx"
import authService from "../../service/auth"
import styles from './page.module.css'
import Loading from "../loading/page"
import { LuLogOut, LuTimer, LuCircleAlert, LuSquareCheckBig   } from "react-icons/lu";
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Orders(){

    const { getOrder, orderLoading, refectOrders, ordersList } = orderService()
    const { logout } = authService()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() =>{
        if(!authData){
             navigate('/auth')
        }else if (refectOrders){
            getOrder(authData?.user?._id)
        }
    }, [authData])

    if(orderLoading){
            return(<Loading/>)
        }
    
    const handleLogout = () =>{
        logout()
        navigate('/auth')
    }


    return (
        <div>
            {ordersList.length > 0 ? 
                <div className={styles.ordersTableWrapper}>
                    <table className={styles.ordersTable}>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Pickup Time</th>
                                <th>User</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersList.map((order) =>(
                                <tr key={order._id}>
                                    <td>
                                        {order.pickupStatus === 'Pending' && <span className={`${styles.pickupStatus} ${styles.pending}`} ><LuTimer/>{order.pickupStatus}</span>}
                                        {order.pickupStatus === 'Completed' && <span className={`${styles.pickupStatus} ${styles.completed}`} ><LuSquareCheckBig />{order.pickupStatus}</span>}
                                        {order.pickupStatus === 'Canceled' && <span className={`${styles.pickupStatus} ${styles.canceled}`} ><LuCircleAlert />{order.pickupStatus}</span>}
                                    </td>
                                    <td>{order.pickupTime}</td>
                                    <td>{order.userDetails[0].fullname}</td>
                                    <td>
                                        {order.orderItems.map((items) =>(
                                            <div key={items.plateId} className={styles.orderItem}>
                                                <strong>{items.itemDetails[0].name}</strong> x {items.quantity}
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            :
                <div className={styles.noOrders}>
                    You do not have orders yet.
                </div>
            }
        </div>
    )
}