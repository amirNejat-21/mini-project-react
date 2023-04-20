import React,{useState,useEffect} from 'react';

import Card from './Card';

// styles
import styles from "./product.module.css"

// API
import { getProducts } from '../API/api';

const Product = () => {
     const [product,setProduct] = useState([])
   useEffect(() => {
        const fetchAPI = async () =>{
            const data= await getProducts();
            setProduct(data)
        }

        fetchAPI()
   },[])


    
    return (
        <div className={styles.container }>
           {product.map(product => <Card key={product.id} image={product.image} name={product.title} cost={product.price}/>)}
        </div>
    );
};

export default Product;