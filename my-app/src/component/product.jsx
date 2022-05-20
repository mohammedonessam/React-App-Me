import React, { Component } from 'react';

class Product extends Component {
    // to have single source of truth not use state || this.state
    // state = { 
    //     name: this.props.product.name,
    //     count: this.props.product.count
    //  }; 
     
            classes(){return this.props.product.count=== 0 ? 'badge bg-warning m-2': 'badge bg-primary m-2'}
            // decreamentFun =()=> {this.setState({count: this.props.product.count -1});}
            // zeroFun =()=> {this.setState({count: this.props.products.count= 0});}
    
    render() { 
        return (
            <div className='row'>
                    {/* <id>{this.props.children}</id> */}
                <div className="col-1">
                    <span className='m-3' >{this.props.product.id}</span>
                </div>
                <div className="col-2">
                    {this.props.product.name.length === 0 && <h4>No Names</h4> }
                    <span>{this.props.product.name}</span>
                </div>
                <div className="col-1">
                    <span className= {this.classes()}> {this.props.product.count}</span>
                </div>
                <div className="col-4">
                    <button onClick={()=> {this.props.onIncrement(this.props.product)}} className= "fa-solid fa-plus btn btn-light btn-sm m-1"></button>
                    <button onClick={()=>{this.props.onDecrement(this.props.product)}} className= "fa-solid fa-minus btn btn-light btn-sm m-1"></button>
                    <i onClick={()=>{this.props.onDelete(this.props.product)}} className="fa-solid fa-trash btn btn-light btn-sm m-1"></i>
                </div>
            </div>
        );
    }
}
 
export default Product;