import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './../../component/ShoppingCart';



class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <ShoppingCart/>
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;