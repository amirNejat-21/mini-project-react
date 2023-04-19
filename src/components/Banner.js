import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="http"/>
            <div className={styles.textContainer}>
                <h1>DMT</h1>
                <p>
                    Learning <span>React</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;