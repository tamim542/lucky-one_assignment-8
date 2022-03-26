import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
   

    let total=[];
    let totalId=[];

    for(const product of cart){
       // total= total+ '\n'  +product.name;
     
       if (!total.includes(product.name)) {
      
        total.push(product.name);
      }
       
       totalId.push(product.id);
        
    }

    const clearNameArray=()=>{
        total=[];
    }

    return (
        <div>
           
            <p>Selected Watch</p>
            <p className='name-design'>name: {total} </p>
            <button onClick={clearNameArray}><p>Choose One For Me</p></button>
        </div>
    );
};

export default Cart;