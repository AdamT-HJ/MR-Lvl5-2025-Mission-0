import React from 'react'
import styles from './Header.module.css'

import maLogo from '../../../assets/Home/MA_Logo.webp'

export default function Header() {
  return (
    <>
      <main className={styles.headerBar}>
        
        <div className={styles.logoBox}>
            <img src={maLogo} alt="Marketing Association Logo" />
            <div>Marketing Association </div>
        </div>

        <div className={styles.linksBox}>
            <div>Signup For Newsletter</div>
            <div>Create MA Login</div>
            <div>Become A MA Member</div>
        </div>

        <div className={styles.loginButtonBox}>
            <button>Login</button>
        </div>

      </main>  
    
    
    </>
  )
}
