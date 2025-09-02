import styles from './navbar.module.css'
import { LuShoppingCart, LuCircleUserRound, LuMenu  } from "react-icons/lu";
import { Drawer } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(){

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }

    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={'/'}><img className={styles.logo} src='/imgs/logo.png'/></Link>
                <div className={styles.navbarLinksContainer}>
                    <Link className={styles.navbarLink} to={"/"}>Home</Link>
                    <Link className={styles.navbarLink} to={"/plates"}>Plates</Link>
                    <Link to={'/cart'}> <LuShoppingCart className={styles.navbarLink}  /></Link>
                    <Link to={'/profile'}><LuCircleUserRound className={styles.navbarLink} /></Link>
                </div>
            </div>

            <div className={styles.mobileNavbarItems}>
                <Link to={'/'}><img className={styles.logo} src='/imgs/logo.png'/></Link>
                <div className={styles.mobileNavBarBtns}>
                   <Link to={'/cart'}> <LuShoppingCart className={styles.navbarLink}  /></Link>
                    <LuMenu className={styles.navbarLink} onClick={handleOpenMenu} />
                </div>
            </div>

            <Drawer
              anchor='right'
              open={openMenu}
              onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <Link className={styles.navbarLink} onClick={handleOpenMenu} to={"/"}>Home</Link>
                    <Link className={styles.navbarLink} onClick={handleOpenMenu} to={"/plates"}>Plates</Link>
                    <Link className={styles.navbarLink} onClick={handleOpenMenu} to={"/profile"}>Profile</Link>
                </div>
            </Drawer>

        </nav>
    )
}