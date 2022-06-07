import React from 'react';

const Cart = (props) => {
    const style= !props.products.isInCart
    ? {color: "#80808080", cursor: "pointer"}
    : {cursor: "pointer"}
}
 
export default Cart;