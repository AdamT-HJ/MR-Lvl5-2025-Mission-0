import React from 'react'
import styles from './ArticleCard.module.css'

export default function ArticleCard({articleImage, articleImageDesc, articleTitle, articleDescription}) {
  
  
  return (
    <div className={styles.card}>
        <img src={articleImage} alt={articleImageDesc} />
        <div className={styles.articleTextbox}>
          <div className={styles.title}>{articleTitle}</div>
          <div className={styles.desc}>{articleDescription}</div> 
        </div>       
    </div>
  )
}
