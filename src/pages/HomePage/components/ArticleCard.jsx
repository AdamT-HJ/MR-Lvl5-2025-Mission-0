import React from 'react'
import styles from './ArticleCard.module.css'

export default function ArticleCard({articleImage, articleImageDesc, articleTitle, articleDescription}) {
  
  
  return (
    <div className={styles.card}>
        <img src={articleImage} alt={articleImageDesc} />
        <div>{articleTitle}</div>
        <div>{articleDescription}</div>

    </div>
  )
}
