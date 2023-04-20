import React,{useState,useEffect,Suspense} from 'react';

import Card from './Card';

// styles
import styles from "./product.module.css"

// API
import { getProducts } from '../API/api';

// Loading gif
import Loader from './Loader';

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
        <>
        {product.length ? 
            <div className={styles.container }>
            {product.map(product => <Card key={product.id} image={product.image} name={product.title} cost={product.price}/>)}
         </div> :
         <Loader/>
        }
     
        </>
    );
};

export default Product;