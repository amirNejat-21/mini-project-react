import React from 'react';

// Components
import styles from "./Cards.module.css";
import Card from './Card';

// images
import iphoneX from "../images/iphone10.jpg"
import iphone11 from "../images/iphone11.jpg"
import iphon12 from "../images/iphone12.jpg"
import s21 from "../images/s21.jpg"


const Cards = () => {
    return (
        <div className={styles.container}>
            <Card image= {iphoneX} name= "Iphone X" cost="500 $" />
            <Card image= {iphone11} name= "Iphone 11" cost="600 $" />
            <Card image= {iphon12} name= "Iphone 12" cost="800 $" />
            <Card image= {s21} name= "s21 Ultra" cost="740 $" />
        </div>
    );
};

export default Cards;