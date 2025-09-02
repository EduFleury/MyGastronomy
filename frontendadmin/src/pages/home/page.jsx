import styles from './page.module.css'
import { MdOutlineMenuBook } from "react-icons/md";
import { FaPlateWheat } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'

export default function Home(){
    return (
    <div className={styles.dashboardContainer}>
     
        <Link to={'/orders'}>
            <div className={styles.card}>
            <MdOutlineMenuBook className={styles.cardIcon} />
            <p>Orders</p>
            </div>
        </Link> 

        <Link to={'/plates'}>
            <div className={styles.card}>
              <FaPlateWheat className={styles.cardIcon} />
              <p>Plates</p>
            </div>
        </Link>

        <Link to={'/users'}>
            <div className={styles.card}>
              <FaUsers className={styles.cardIcon} />
              <p>Users</p>
            </div>
        </Link>

        <Link to={'/profile'}>
            <div className={styles.card}>
              <CgProfile className={styles.cardIcon} />
              <p>Profile</p>
            </div>
        </Link>
    </div>
    )
}