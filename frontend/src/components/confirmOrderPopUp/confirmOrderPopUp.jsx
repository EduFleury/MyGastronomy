import Dialog from '@mui/material/Dialog'
import styles from './confirmOrderPopUp.module.css'
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"

export default function ConfirmOrderPopUp({open, onClose, onCofirm}){

    const [formData, setformData] = useState(null)
    const authData = JSON.parse(localStorage.getItem('auth'))
    const navigate = useNavigate()

    const handleConfirm = (e) =>{
        e.preventDefault()
        if(!authData?.user?._id){
            return navigate('/auth')
        }else{
            if(!formData.pickupTime){
                return
            }else{
                const orderData = {
                    userId: authData?.user?._id,
                    pickupTime: formData?.pickupTime
                }
                onCofirm(orderData)
            }
        }
    }

    const handleFormDataChange = (e) =>{
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <Dialog open={open} onClose={onClose}>
            <div className={styles.popupContainer}>
                <h2>We're almost there...</h2>
                <p>Confirm your order with the current date: <strong>{(new Date()).toLocaleDateString()}</strong>. What time will you come to pick up your order?</p>
                <form className={styles.formContainer}>
                    <TextField
                    onChange={handleFormDataChange}
                    required
                    type="time"
                    name='pickupTime'
                    />
                    <div className={styles.confirmBtns}>
                        <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                        <button onClick={handleConfirm}>Confirm</button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
} 