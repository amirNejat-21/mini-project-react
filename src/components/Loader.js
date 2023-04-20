import React from 'react';
import styles from "./Loader.module.css"
// gif
import spinner from "../gif/Fading balls.gif"


const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt='loading' />
            
        </div>
    );
};

export default Loader;