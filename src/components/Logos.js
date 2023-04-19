import React from 'react';
import styles from "./logos.module.css"

// images
import apple from "../images/apple.jpg"
import samsung from "../images/samsung.jpg"
import xiaomi from "../images/xiaomi.png"
const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us</h3>
            <div>
                <img src={apple} alt='apple'/>
                <img src={samsung} alt='samsung'/>
                <img src={xiaomi} alt='xiaomi'/>
            </div>
        </div>
    );
};

export default Logos;