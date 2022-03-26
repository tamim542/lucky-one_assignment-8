import React from 'react';

import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
 
    
 
    let total=[];
    let totalId=[];

    for(const product of cart){
       
     
       if (!total.includes(product.name)) {
      
        total.push(product.name);
      }
       
       totalId.push(product.id);
        
    }


    return (
        <div>
           <div>
            <p>Selected Watch</p>
            <p className='name-design'>name: </p>
           <ul>
             {
               total.map(item=><li>{item}</li>)
             }
           </ul>
            <button onClick={props.clearNameArray}><p>Choose One For Me</p></button><br/>
            <button onClick={props.resetName}><p>Choose Again</p></button>
          </div>
         
        </div>
    );
};

export default Cart;