import { useState } from "react";

export default function plateService(){
    const [plateLoading, setPlateLoading] = useState(false)
    const [refectPlates, setrefectPlates] = useState(true)
    const [platesList, setplatesList] = useState([])
    
    const url = 'http://localhost:3000/plates'

    const getAvailablesPlates = () =>{
        setPlateLoading(true)
        fetch(`${url}/availables`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }, 
        }).then(
            (response) => response.json()
            .then((result) =>{
                    if(result.success){
                        setplatesList(result.body)
                        console.log(result.body)
                    }else{
                        console.log(result)
                    }
                })
            .catch((error) =>{
                console.log("Erro: ",error)
            })
        ).finally(() =>{
            setPlateLoading(false)
            setrefectPlates(false)
        })
    }

    return { getAvailablesPlates, plateLoading, refectPlates, platesList }
}