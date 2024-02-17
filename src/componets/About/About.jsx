import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
    return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop" 
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")}
                    alt="Cursor icon" />
                    <div className={styles.auboutItemText}>
                        <h3>Frontend Developpeur</h3>
                        <p>
                            Bonjour, je suis developpeur frontend avec une passion pour le design et l'expérience utilisateur.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}
                    alt="Server icon" />
                    <div className={styles.auboutItemText}>
                        <h3>Backend Developpeur</h3>
                        <p>
                            J'ai de l'experiance dans le developpement backend avec Node.js et Express.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
}
