import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    // to have single source of truth not use state || this.state
    // state = { 
    //     name: this.props.product.name,
    //     count: this.props.product.count
    //  }; 
     
            classes(){return this.props.product.count=== 0 ? 'badge bg-warning m-2': 'badge bg-primary m-2'}
            // decreamentFun =()=> {this.setState({count: this.props.product.count -1});}
            // zeroFun =()=> {this.setState({count: this.props.products.count= 0});}
            sort(){return this.props.product.sort==='drink'? <i className="fa-solid fa-wine-glass-empty"></i>:<i className="fa-solid fa-utensils"></i>}
    render() { 
        return (
            <div className='row'>
                    {/* <id>{this.props.children}</id> */}
                <div className="col-1 m-3">
                    {this.sort()}
                </div>
                <div className="col-2 m-3">
                    {this.props.product.name.length === 0 && <h4>No Names</h4> }
                    <span>
                       <Link className='text-decoration-none text-capitalize link-info' to={`/productdetails/${this.props.product.id}/${this.props.product.name}`}>
                           {this.props.product.name}
                       </Link>
                    </span>
                </div>
                <div className="col-2 m-3">
                    <span className= {this.classes()}> {this.props.product.count}</span>
                </div>
                <div className="col-4 m-3">
                    <button onClick={()=> {this.props.onIncrement(this.props.product)}} className= "fa-solid fa-plus btn btn-light btn-sm m-1"></button>
                    <button onClick={()=>{this.props.onDecrement(this.props.product)}} className= "fa-solid fa-minus btn btn-light btn-sm m-1"></button>
                    <i role="button" onClick={()=>{this.props.onDelete(this.props.product)}} className="fa-solid fa-trash btn btn-light btn-sm m-1"></i>
                </div>
            </div>
        );
    }
}
 
export default Product;