import React, { Component } from 'react';
import Product from './product'
class ShoppingCart extends Component {
    state = { 
        products: [
            {id:1, name:"burger", count:2},
            {id:2, name:"fries", count:1},
            {id:3, name:"cola", count:3}
        ]
     }
     handleDelete =(product) => {
        //Clone
        //Edit
        const newproducts= this.state.products.filter(p=>p.id !==product.id)
        //Set state
        this.setState({products:newproducts})
     }
    render() { 
        return (
            <React.Fragment>
                <h1 className='badge bg-info  m-2'>shoppingCart</h1>
                {this.state.products.map(product => (
                <Product key={product.id} onDelete={this.handleDelete} product={product}>
                    <h4>{product.id}</h4>
                </Product>
                ))}
            </React.Fragment>);
            
    }
}
 
export default ShoppingCart;