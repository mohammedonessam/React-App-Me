import React, { Component } from 'react';
import Product from "./product"


class ShoppingCart extends Component {
    //  move  state to app file to make lifting state up for navbar can read and access the state 
    render() { 
        return (
            <React.Fragment>
                <h1 className='text-uppercase badge bg-info  m-2'>shopping Cart</h1>
                <br />
                <button onClick={this.props.onReset} className='fa-solid fa-zero btn btn-warning btn-sm m-2'>Reset</button>
                {this.props.products.map(product => (
                        <Product key={product.id} 
                            onDelete={this.props.onDelete}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement} 
                            product={product}>
                            <h4>{product.id}</h4>
                        </Product>
                    ))}
                {/* delete this function to make lifting state up */}
                {/* {this.props.products.map(product => (
                <Product key={product.id} 
                
                    onDelete={()=>{this.props.handleDelete(this.props.product)}}
                    onIncrement={()=>{this.props.handleIncrement(this.props.product)}}
                    onDecrement={()=>{this.props.handleDecrement(this.props.product)}} 
                    product={product}>
                <h4>{product.id}</h4>
                </Product>
                ))} */}
            </React.Fragment>
        );      
    }
}
 
export default ShoppingCart;