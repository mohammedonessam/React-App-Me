import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './ShoppingCart';
import Product from './product';



class App extends Component {
    state = { 
        products: [
            {id:1, name:"burger", count:1},
            {id:2, name:"fries", count:4},
            {id:3, name:"cola", count:3}
        ]
     }
    handleDelete =(product) => {
        //Clone
        let products= [...this.state.products]
        //Edit
        products= this.state.products.filter(p=>p.id !==product.id)
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
        // Set State
        this.setState({products})
        }
    handleDecrement = (product)=>{
        // clone
        const products = [...this.state.products]
        //deep clone object to maintain increment function
        const index = products.indexOf(product)
        products[index]={...products[index]}
        // Edit
        products[index].count--;
        // Set State
        this.setState({products})
        } 
    render() { 
        return (
            <React.Fragment>
                <NavBar pruductsCount = {this.state.products.filter(p=>p.count>0).length}/>
                <main className="container">
                    <ShoppingCart
                        products={this.state.products}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement} 
                    />
                    
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;