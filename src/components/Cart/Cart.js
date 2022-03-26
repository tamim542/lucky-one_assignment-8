import React, { useState } from 'react';

import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
 
    const [randomName, randomItem]=useState([]);
 
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
      //  const total = ["January", "February", "March", "April", "May", "June", "July"];

        const random = Math.floor(Math.random() * total.length);
        console.log( total[random]);


        const randomValue =[...randomName,total[random]]
        randomItem(randomValue);
    }

    return (
        <div>
           <div>
            <p>Selected Watch</p>
            <p className='name-design'>name: {total} </p>
            <button onClick={clearNameArray}><p>Choose One For Me</p></button>
            <button onClick={resetName}><p>Choose One For Me</p></button>
          </div>
          <div>
          <p className=''>Random name: {randomName} </p>
          </div>
        </div>
    );
};

export default Cart;