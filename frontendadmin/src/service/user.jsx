import { useState } from "react";

export default function UserService(){
    const [userLoading, setUserLoading] = useState(false)
    const [refectUsers, setrefectUsers] = useState(true)
    const [usersList, setusersList] = useState([])
    
    const url = 'http://localhost:3000/users'

    const getUsers = () =>{
        setUserLoading(true)
        fetch(`${url}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }, 
        }).then(
            (response) => response.json()
            .then((result) =>{
                    if(result.success){
                        setusersList(result.body)
                        console.log(result.body)
                    }else{
                        console.log(result)
                    }
                })
            .catch((error) =>{
                console.log("Erro: ",error)
            })
        ).finally(() =>{
            setUserLoading(false)
            setrefectUsers(false)
        })
    }

    return { getUsers, userLoading, refectUsers, usersList }

}