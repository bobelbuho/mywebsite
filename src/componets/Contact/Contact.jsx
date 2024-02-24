import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Contactez moi dès maintenant</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img 
                src={getImageUrl("contact/emailIcon.png")} 
                alt="" />
                <a href="mailto:bob.vaz@hotmail.fr">bob.vaz@hotmail.fr</a>
            </li>
            <li className={styles.link}>
                <img 
                src={getImageUrl("contact/linkedinIcon.png")} 
                alt="" />
                <a href="https://www.linkedin.com/in/bob-vaz-5a981523a/">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img 
                src={getImageUrl("contact/emailIcon.png")} 
                alt="" />
                <a href="https://github.com/bobelbuho">GitHub</a>
            </li>
        </ul>
    </footer>
  );
};
