import CircularProgress from '@mui/material/CircularProgress';
import styles from './page.module.css'

export default function Loading(){
    return (
        <div className={styles.loadingPageContainer}>
            Loading...
            <CircularProgress color='inherit' />
        </div>
    )
}