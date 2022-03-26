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
    
    <div className='question-answer'>
        <h1>How does react work?</h1>
        <p>The react js is mainly used for the user interface. React js works two component based one is functional component
            and another is class component. React is a declarative and efficient JavaScript library for building user interfaces. React js compose complex UIs from small chunk and isolated pieces of code called “components”.  We use components to tell React what we want to see on the screen. 'npx' (node package execute) create react app npx makes npm work easier. We do not have to create many files for npx. Such as package.json. 
        </p>
        <h1>Props vs State</h1>
        <p>State  is internal and controlled by the component. Props are external and controlled by whatever renders the component. Props send data. Props uses as a function parameter. Props are read-only. State changes can be asynchronous. Props is immutable and state is mutable. Props allow to pass data from one component to other components as an argument but state does not work. State holds information about the components.
</p>
    </div>


    </div>
    );
};

export default Products;