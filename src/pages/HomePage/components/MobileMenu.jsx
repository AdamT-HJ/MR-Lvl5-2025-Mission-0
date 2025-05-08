import React, { useState } from 'react'
import styles from './MobileMenu.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import maLogo from '../../../assets/Home/MA_Logo.webp'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function MobileMenu() {
  
  // variable for open/close state of Hamburger Menu
  const [hamburgerState, setHamburgerState] = useState (false);

  //function to toggle Boolean state of Hamburger Menu
  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
  };

  // const hamburgerIcon = GiHamburgerMenu;
  
  return (
    <>
          <main className={styles.headerBar}>
             <button className={styles.hamburgerButton} onClick={toggleHamburger}><GiHamburgerMenu className={styles.hamburgerIcon}/></button>       

          </main>  
        
            {/*conditionally render menu if hamburgerState 'true'  */}
          {hamburgerState && 
            <>
            <div className={styles.overlay} onClick={toggleHamburger}></div>
            <div className={styles.mobileMenu}>
              <button className={styles.closeButton} onClick={toggleHamburger}>Close</button>
              <div className={styles.logoBox}>
                  <img src={maLogo} alt="Marketing Association Logo" />
                  <div>Marketing Association NZ </div>
              </div>
      
              <div className={styles.linksBox}>
                  <div className={styles.link}><DoubleArrowIcon/> Signup For Newsletter</div>
                  <div className={styles.link}><DoubleArrowIcon/>Create MA Login</div>
                  <div className={styles.link}><DoubleArrowIcon/>MA Membership</div>
              </div>
      
              <div className={styles.loginButtonBox}>
                  <button>Login</button>
              </div>
            </div>
            </>}

        </>
  )
}
