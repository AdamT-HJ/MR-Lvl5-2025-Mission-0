import React from 'react'
import styles from './SearchBarAndImage.module.css'

export default function SearchBarAndImage() {
  return (
    <>
      <main className={styles.mainBox}>
        
        <div className={styles.textBox}>
          Marketing Assoc. NZ: <br />  
          - Digital News
        </div>

        <div className={styles.searchBarBox}>
          <input type="text" />
          <button>SEARCH</button>
        </div>        
      </main>
    
    </>
  )
}
