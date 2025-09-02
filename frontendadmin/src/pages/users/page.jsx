import styles from './page.module.css'
import { useEffect } from "react"
import UserService from "../../service/user.jsx"

export default function Users(){
    const { getUsers, userLoading, refectUsers, usersList } = UserService()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() =>{
        if(!authData){
             navigate('/auth')
        }
    }, [authData])

    useEffect(() => {
        if (refectUsers) {
          getUsers()
        }
    }, [refectUsers])

    if (userLoading) {
        return <p>Loading users...</p>
    }

    return (
        <div className={styles.usersContainer}>
            {usersList.length > 0 ? (
                usersList.map((user) => (
                    <div key={user._id} className={styles.userCard}>
                        <h3>{user.fullname}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>ID:</strong> {user._id}</p>
                    </div>
                ))
            ) : (
                <p className={styles.noUsers}>No users found.</p>
            )}
        </div>
    )
}