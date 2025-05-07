import React from 'react'
import styles from './HomePage.module.css'
import Header from './components/Header'
import SearchBarAndImage from './components/SearchBarAndImage'
import { articleCardsArray } from '../../modules/articlesArray'
import ArticleCard from './components/ArticleCard'

export default function HomePage() {
  
  
    return (
    <>
        <main className={styles.homepageMain}>
            <Header />

            <SearchBarAndImage />

            <section className={styles.articleCardsContainer}>
                {articleCardsArray.map((card) => (
                    <ArticleCard key={card.id} articleImage={card.image} articleImageDesc={card.imageText} articleTitle={card.title} articleDescription={card.description}  />
                ))}
            </section>
            
        </main>
    
    </>
  )
}
