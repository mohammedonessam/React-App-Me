import React, { Component } from 'react';
import Product from './product'
import NavBar from './navbar';

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
        const products= this.state.products.filter(p=>p.id !==product.id)
        //Set state
        this.setState({products})
     }
     handleReset =()=>{
         //clone
        let products= [...this.state.products]
         //Edit
        products = products.map( p => {
            p.count=0;
             return p
            })
         // Set state
         this.setState({products})
     }
     handleIncrement = (product) => {
         // clone
            const products = [...this.state.products]
            //deep clone object to maintain increment function
            const index = products.indexOf(product)
            products[index]={...products[index]}
         // Edit
         products[index].count++;
         // Set state
         this.setState({products})
        }

    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <h1 className='badge bg-info  m-2'>shoppingCart</h1>
                <br />
                <button onClick={this.handleReset} className='fa-solid fa-zero btn btn-warning btn-sm m-2'>Reset</button>
                {this.state.products.map(product => (
                <Product key={product.id} 
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                product={product}>
                <h4>{product.id}</h4>
                </Product>
                ))}
            </React.Fragment>
        );      
    }
}
 
export default ShoppingCart;