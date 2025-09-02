import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import authService from "../../service/auth"
import styles from './page.module.css'
import { LuLogOut, LuTimer, LuCircleAlert, LuSquareCheckBig   } from "react-icons/lu";

export default function Profile(){

    const navigate = useNavigate()
    const { logout } = authService()

    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() =>{
        if(!authData){
             navigate('/auth')
        }
    }, [authData])


    const handleLogout = () =>{
        logout()
        navigate('/')
    }

    return (
        <div className={styles.pageContainer}>
            
            <div className={styles.userContainer}>
                <h1>{authData?.user?.fullname}</h1>
                <h2>{authData?.user?.email}</h2>
            </div>

            <button className={styles.logout} onClick={handleLogout}>Logout<LuLogOut/></button>
        </div>

    )
}