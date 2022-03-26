import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
const Shop = (props) => {
    const {id,name,img,category,price,seller}=props.product
    return (
        <div >
           <div className='cart-structure'>
               <img className="img-cart" src={img} alt=''></img>
               <div className='text-cart'>
               <p>{name}</p>
               <p>{price}</p>
               <p>{seller}</p>
               <p>{category}</p>
               </div>
               <button className='button-design' onClick={()=>props.handleAddTOCart(props.product)}><p className='icon-padding'>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
           </div>
         
        </div>
    );
};

export default Shop;