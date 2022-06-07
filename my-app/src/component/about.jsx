import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Company from './company';
import Team from './team';

class About extends Component {
    state = {  } 
    render() { 
        return (
        <React.Fragment>
            <div className='text-uppercase badge bg-info  m-2'>About</div>
            <div className='d-flex'>
            <div className="col-3 d-inline m-3 p-3">
                <ul className='nav-tabs list-unstyled'>
                    <li><Link className='text-decoration-none text-capitalize link-info' to='/about/team'>Team</Link></li>
                    <li><Link className='text-decoration-none text-capitalize link-info' to='/about/company'>Company</Link></li>
                </ul>
            </div>
            <div className="col d-inline m-3 p-3">
                <Routes>
                    <Route path='/team' element={<Team />}/>
                    <Route path='/company' element={<Company/>}/>
                </Routes>
            </div>

            </div>
        </React.Fragment>
        );
    }
}
 
export default About;