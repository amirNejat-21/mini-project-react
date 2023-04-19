import React from 'react';
import styles from "./search.module.css";
const Search = () => {
    return (
        <div className={styles.container}>
            <p>Search what you want</p>
           <input placeholder='Search ...'/> 
        </div>
    );
};

export default Search;