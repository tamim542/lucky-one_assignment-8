import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Products.css';
const Products = () => {
    const [products, setProducts]=useState([])
   // const [cart, setCart]=useState([])
    const [cart, setCart]=useState([]);
    //console.log(cart);
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddTOCart=(product1)=>{
      //console.log(product1);
       
        const newCart=[...cart,product1]
        setCart(newCart);
        
    }

    return (
        <div >
            <h2 className='header-name'>Smart Watch Online Shop</h2>
            <h3 className='sub-header'>Smart Watch Collection</h3>
           <div className='cart'>
           <div  className='cart-design'>
            {
                products.map(product=><Shop key={product.id} product={product} handleAddTOCart={handleAddTOCart} ></Shop>)
            }
           </div>
           <div className='one-cart'>
                <Cart cart={cart}></Cart>
           </div> 
        </div>
    </div>
    );
};

export default Products;