import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import { Route, Routes} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';
import ProductDetails from './productdetails';
import NotFound from './notfound';
import Menu from './menu';
import Login from './login';
import { axios } from 'axios';
import Admin from './admin';
import Editform from './editform';

class App extends Component {
    state = { 
        products: [
            {id:1, name:"burger", count:0,price:15, isInCart:false, sort:'eat'},
            {id:2, name:"fries", count:0,price:10, isInCart:false, sort:'eat'},
            {id:3, name:"pizza", count:0,price:30, isInCart:false, sort:'eat'},
            {id:4, name:"BBQ meat", count:0,price:20, isInCart:false, sort:'eat'},
            {id:5, name:"chicken", count:0,price:15, isInCart:false, sort:'eat'},
            {id:6, name:"authentic grill", count:0,price:12, isInCart:false, sort:'eat'},
            {id:7, name:"best cheeseCake", count:0,price:10, isInCart:false, sort:'eat'},
            {id:8, name:"best taste", count:0,price:2, isInCart:false, sort:'eat'},
            {id:9, name:"chocolate cake", count:0,price:10, isInCart:false, sort:'eat'},
            {id:10, name:"water", count:0,price:3, isInCart:false, sort:'drink'},
            {id:11, name:"cola", count:0,price:6, isInCart:false, sort:'drink'},
            {id:12, name:"cocktail", count:0,price:20, isInCart:false, sort:'drink'},
        ]
    };

    // get products from data base
    // async componentDidMount() {
    // const {data}= await axios.get('http://localhost:3000/products')
        
    // this.setState({products:data})
    // }

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
    handleInCartChange = (product)=>{
        // clone
        const products = [...this.state.products]
        //deep clone object to maintain increment function
        const index = products.indexOf(product)
        products[index]={...products[index]}
        // Edit
        products[index].isInCart=!products[index].isInCart
        products[index].count=0
        // Set State
        this.setState({products})
    } 
    cartIcon = (product) => {
        // clone
        const products = [...this.state.products]
        //deep clone object to maintain increment function
        const index = products.indexOf(product)
        products[index]={...products[index]}
        // Edit
        products[index].isInCart=!products[index].isInCart
        const style= !this.state.isInCart
        ? {color: "#80808080", cursor: "pointer"}
        : {cursor: "pointer"}
        return ( 
        <i style={style} onClick={()=>this.handleInCartChange(this.setState({products}))} ></i>
        );
    }  
    handleChange=(product)=>{
        // clone
        const products = [...this.state.products]
        //deep clone object to maintain  function
        const index = products.indexOf(product)
        products[index]={...products[index]}
        // Edit
        products[index].name = products[index].name
        products[index].id =! products[index].name
        
        // Set State
        this.setState({products})
        console.log(products)

   } 
    render() { 
        return (
            <React.Fragment>
                <NavBar pruductsCount = {this.state.products.filter(p=>p.count>0).length}/>
                <main className="container">
                    <Routes>
                            <Route path='/ShoppingCart' 
                                        element={<ShoppingCart  
                                        products={this.state.products}
                                        onReset={this.handleReset}
                                        onDelete={this.handleInCartChange}
                                        onIncrement={this.handleIncrement}
                                        onDecrement={this.handleDecrement}
                                        />}/>
                            <Route path='/about/*' element={<About/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                            <Route path='/productdetails/:id/:name' 
                                        element={<ProductDetails 
                                        products={this.state.products} 
                                        {...this.props}
                                        handleSave={this.handleSave}
                                        />}/>
                            <Route path='/menu' element={<Menu products={this.state.products} {...this.props}/>}/>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/editform/:id/:name' 
                                        element={<Editform 
                                        products={this.state.products}
                                        {...this.props}
                                        onChange={this.handleChange}/>}/>
                            <Route path='/admin' 
                                        element={<Admin    
                                        products={this.state.products} 
                                        {...this.props}
                                        onDelete={this.handleDelete}/>}/>  
                            <Route path='*' element={<NotFound/>}/>
                            {/* <Route path='/cart' 
                                        element={<Cart 
                                        products={this.state.products}
                                        handleClick={this.handleInCartChange}
                                        />}/> */}
                    </Routes>
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;