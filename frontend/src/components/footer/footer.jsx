import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo.png"></img>
            <div className={styles.linksContainer}>
                <Link className={styles.link} to={'/'}>Homepage</Link>
                <Link className={styles.link} to={'/plates'}>Plates</Link>
                <Link className={styles.link} to={'/profile'}>Profile</Link>
            </div>
            <div className={styles.creditos}>
                Developed by Eduardo Fleury.
                <a href="https://www.linkedin.com/in/eduardo-pina-fleury-fortuna-51a57021b/" target='_blank' className={styles.link}>See my projects!</a>
            </div>
        </footer>
    )
}