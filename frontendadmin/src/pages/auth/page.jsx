import { useEffect, useState } from "react"
import { TextField, Button } from '@mui/material'
import styles from './page.module.css'
import authService from "../../service/auth"
import { useNavigate } from "react-router-dom"
import { LuLogIn } from "react-icons/lu";

export default function Auth(){

    const [formType, setFormType] = useState('login')
    const [formData, setformData] = useState(null)
    const { login, authLoading, singup} = authService()
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() =>{
        if(authData){
             navigate('/home')
        }
    }, [authData])

    const handleChangeFormType = () =>{

        setformData(null)
        
        if(formType === 'login'){
            setFormType('singup')
        }else{
            setFormType('login')
        }
    }

    const handleFormDataChange = (e) =>{
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) =>{
        e.preventDefault()

        switch (formType) {
            case 'login':
                login(formData)
                break;
            case 'singup':
                console.log("formdata", formData)
                if(formData.password !== formData.confirmPassword){
                    console.log("senha incorreta")
                    return
                }
                singup(formData)
                break;
        }
    }

    if(authLoading){
        return(
            <h1>Loading....</h1>
        )
    }

      return (
        <div className={styles.authPageContainer}>
            {formType === 'login' ? (
                <>
                    <h1>Login</h1>
                    <button onClick={handleChangeFormType}>Don't you have an account? Click here</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                        />
                        <button type="submit">Login<LuLogIn/></button>
                    </form>
                </>
            ) : null}

            {formType === 'singup' ? (
                <>
                    <h1>Signup</h1>
                    <button onClick={handleChangeFormType}>Already have an account? Click here</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField 
                        required
                        label="Fullname"
                        type="fullname"
                        name="fullname"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                        />
                        <TextField 
                        required
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        onChange={handleFormDataChange}
                        />
                        <button type="submit">Signup<LuLogIn/></button>
                    </form>
                </>
            ) : null}
        </div>
    )

}