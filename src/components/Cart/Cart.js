import React, { useState } from 'react';

import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
 
    // const [randomName, randomItem]=useState([]);
 
    let total=[];
    let totalId=[];

    for(const product of cart){
       // total= total+ '\n'  +product.name;
     
       if (!total.includes(product.name)) {
      
        total.push(product.name);
      }
       
       totalId.push(product.id);
        
    }
///tetstet
    // const clearNameArray=()=>{
    //   //  const total = ["January", "February", "March", "April", "May", "June", "July"];

    //     const random = Math.floor(Math.random() * total.length);
    //     console.log( total[random]);


    //     const randomValue =[...randomName,total[random]]
    //     randomItem(randomValue);
    // }
    

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