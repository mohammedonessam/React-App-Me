import React, { Component } from 'react';
import Login from './login';

class Home extends Component {
    state = {  } 
    render() { 
        return (
        <React.Fragment>
            <h1 className='text-uppercase badge bg-info  m-3'>home</h1>
            <Login className='m-3'/>
        </React.Fragment>
            )
    }
}
 
export default Home;