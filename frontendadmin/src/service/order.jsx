import { useState } from "react";

export default function orderService(){
    const [orderLoading, setOrderLoading] = useState(false)
    const [refectOrders, setrefectOrders] = useState(true)
    const [ordersList, setordersList] = useState([])
    
    const url = 'http://localhost:3000/orders'

    const getUserOrders = (Userid) =>{
        setOrderLoading(true)
        fetch(`${url}/userorders/${Userid}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }, 
        }).then(
            (response) => response.json()
            .then((result) =>{
                    if(result.success){
                        setordersList(result.body)
                    }else{
                        console.log(result)
                    }
                })
            .catch((error) =>{
                console.log("Erro: ",error)
            })
        ).finally(() =>{
            setOrderLoading(false)
            setrefectOrders(false)
        })
    }

    const getOrder = () =>{
        setOrderLoading(true)
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
                        setordersList(result.body)
                    }else{
                        console.log(result)
                    }
                })
            .catch((error) =>{
                console.log("Erro: ",error)
            })
        ).finally(() =>{
            setOrderLoading(false)
            setrefectOrders(false)
        })
    }

     const sendOrder = (orderData) =>{
        setOrderLoading(true)
        fetch(`${url}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(orderData)
        }).then(
            (response) => response.json()
            .then((result) =>{
                    console.log(result)
                })
            .catch((error) =>{
                console.log("Erro: ",error)
            })
        ).finally(() =>{
            setOrderLoading(false)
            setrefectOrders(false)
        })
    }

    return { getUserOrders, getOrder, orderLoading, refectOrders, ordersList, sendOrder }
}