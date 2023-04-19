import React,{useState} from 'react';
// style
import styles from "./Card.module.css"
// icons
import up from "../images/up.svg"
import down from "../images/down.svg"

const Card = (props) => {

    const[counter,SetCounter] = useState(0)


    const upHandler = () => {
        SetCounter(counter +1) 
    }
    const downHandler = () => {
        if(counter >=1) {

            SetCounter(counter -1) 
        }
    }

    const {image,name,cost} = props
    return (
        <div className={styles.container}>
                <img src={image} alt='iphoneX' />
                <h3>{name}</h3>
                <p>{cost}</p>
                <div className={styles.counter}>
                <img src={up} alt='Up' onClick={upHandler}/>
                <span>{counter}</span>
                <img className={!counter  ? styles.deActive : ""} src={down} alt='Down' onClick={downHandler}/>
                </div>
        </div>
    );
};

export default Card;