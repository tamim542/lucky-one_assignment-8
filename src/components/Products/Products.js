import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Products.css'
const Products = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div >
            <h2 className='header-name'>Smart Watch Online Shop</h2>
            <h3 className='sub-header'>Smart Watch Collection</h3>

            {
                products.map(product=><Shop product={product}></Shop>)
            }
        </div>
    );
};

export default Products;