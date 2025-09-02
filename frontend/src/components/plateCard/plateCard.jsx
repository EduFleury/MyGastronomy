import styles from './plateCard.module.css'

export default function PlateCard({plateData}){
    return(
        <>
            <div className={styles.cardContainer}>
                <img src={plateData.imgUrl}/>
                <div className={styles.cardContent}>
                    <h4 className={styles.name}>{plateData.name}</h4>
                    <h3 className={styles.price}>{plateData.price} R$</h3>
                </div>
            </div>
        </>
    )
}