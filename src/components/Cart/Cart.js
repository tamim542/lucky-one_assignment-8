import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    console.log('cart:'+props)
    return (
        <div>
            <p>{props.cart.length}</p>
            <p>Selected Watch</p>
            <p>name:{props.cart.name}</p>
            <p>whoa</p>
        </div>
    );
};

export default Cart;