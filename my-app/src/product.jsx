import React, { Component } from 'react';

class Product extends Component {
    state = { 
        name: this.props.product.name,
        count: this.props.product.count
     }; 
     
      classes(){return this.state.count=== 0 ? 'badge bg-warning m-2': 'badge bg-primary m-2'}
     increamentFun =()=> {this.setState({count: this.state.count +1});}
     decreamentFun =()=> {this.setState({count: this.state.count -1});}
     zeroFun =()=> {this.setState({count: this.state.count= 0});}
    render() { 
            return (
        <div className='row'>
            {/* <id>{this.props.children}</id> */}
            <div className="col-1">
            <span className='m-3' >{this.props.product.id}</span>
            </div>
            <div className="col-2">
            {this.state.name.length === 0 && <h4>No Names</h4> }
            <span>{this.state.name}</span>
            </div>
            <div className="col-1">
            <span className= {this.classes()}> {this.state.count}</span>
            </div>
            <div className="col-4">
            <button onClick={this.increamentFun} className= "fa-solid fa-plus btn btn-light btn-sm m-1"></button>
            <button onClick={this.decreamentFun} className= "fa-solid fa-minus btn btn-light btn-sm m-1"></button>
            <button onClick={this.zeroFun} className='fa-solid fa-zero btn btn-light btn-sm m-1'>0</button>
            <i onClick={()=>{this.props.onDelete(this.props.product)}} className="fa-solid fa-trash btn btn-light btn-sm m-1"></i>
            </div>
        </div>);
    }
}
 
export default Product;