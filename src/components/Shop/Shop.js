import React from 'react';

const Shop = (props) => {
    const {id,name,img,category,price,seller}=props.product
    return (
        <div>
           <div>
               <img src={img} alt=''></img>
               <p>{name}</p>
               <p>{seller}</p>
               <p>{category}</p>
           </div>
        </div>
    );
};

export default Shop;