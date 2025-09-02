import Dialog from '@mui/material/Dialog'
import styles from './platePopUp.module.css'

export default function PlatePopUp({ plateData, onClose, onAddToCart }) {
    return (
        <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
            <div className={styles.popUpContainer}>
                <img src={plateData.imgUrl} alt={plateData.name} />
                <div className={styles.popUpContent}>
                    <h2 className={styles.title}>{plateData.name}</h2>
                    <p className={styles.description}>{plateData.description}</p>
                    <p className={styles.ingredients}>
                        {String(plateData.ingredients)}
                    </p>
                    <h3 className={styles.price}>{plateData.price} R$</h3>
                    <button 
                        className={styles.addButton} 
                        onClick={() => onAddToCart(plateData)}
                    >
                        🛒 Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </Dialog>
    )
}
