import React,{useState} from 'react';
import styles from "./search.module.css";
const Search = () => {

    const[text,SetText] = useState("")

    const changeHandler = (e) => {
        SetText(e.target.value)
    }
        

    return (
        <div className={styles.container}>
            <p>Search what you want</p>
            <div>
           <input type='text' value={text} onChange={changeHandler} placeholder='Search ...'/> 
           <br/>
            <span>{text}</span>
            </div>
        </div>
    );
};

export default Search;