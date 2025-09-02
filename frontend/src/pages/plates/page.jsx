import plateService from "../../service/plates"
import { useEffect, useState } from "react"
import Loading from "../loading/page"
import PlateCard from "../../components/plateCard/plateCard"
import styles from './page.module.css'
import PlatePopUp from "../../components/platePopUp/platePopUp"
import { userCartContext } from "../../contexts/useCartContext"

export default function Plates(){
        
    const { getAvailablesPlates, plateLoading, refectPlates, platesList  } = plateService()
    const [plateSelected, setPlateSelected] = useState(null)
    const { addToCart } = userCartContext()

     useEffect(() =>{
            if(refectPlates){
               getAvailablesPlates()
            }
    }, [refectPlates])

    const handlePlateSelected = (plate) =>{
        setPlateSelected(plate)
    }

    const handleClosePopUp = () =>{
        setPlateSelected(null)
    }

    const handleAddToCart = (itemToAdd) =>{
        addToCart(itemToAdd)
        handleClosePopUp()

    }

    if(plateLoading){
        return(<Loading/>)
    }

    return (
        <>
            <div className={styles.pageContainer}>
            {platesList.map((plate) => (
                <div className={styles.cardContainer} key={plate._id} onClick={() =>{handlePlateSelected(plate)}}>
                    <PlateCard plateData={plate}></PlateCard>
                </div>
            ))}
            </div>

            {plateSelected && (
                <>
                    <PlatePopUp plateData={plateSelected} 
                    onClose={handleClosePopUp}
                    onAddToCart={handleAddToCart}/>
                </>
            )}
        </>
    )
}