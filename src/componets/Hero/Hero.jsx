import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
    <p className={styles.description}>Je suis développeur web full stack</p>
    <a className={styles.contactBtn} href="mailito:bob.vaz@hotmail.fr">Contactez moi </a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
    
}
