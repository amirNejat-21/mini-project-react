import React from 'react';
import styles from "./footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                &copy; All Right Reserved 2023 <span>DMT</span> 
            </p>
        </div>
    );
};

export default Footer;