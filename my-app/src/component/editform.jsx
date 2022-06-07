import React from 'react';
import {useParams, useLocation } from 'react-router-dom';
import  qs from 'query-string';

const Editform= props =>  {
    
    let location= useLocation();
    const params= useParams();
    const res= qs.parse(location.search)
    let product= props.products.filter(c=>c.id === parseInt(params.id))
    console.log(params)
    const price=product[0].price
    
   const  handleSubmit=e=>{
        e.preventDefault();
        

    console.log(e.currentTarget.value)
    }
    
        return (
            <React.Fragment>
            <div className='p-5 m-2 badge col-12'>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> {params.id=== params.id? `Edit Product No. ${params.id}`: `Add new product`}</h1>
            <input onChange={handleSubmit} value={params.value}className='p-3 m-2 rounded-pill ' placeholder={params.name}/>
            <input className='p-3 m-2 rounded-pill ' placeholder={price}/>
            <button  onClick={handleSubmit} className="btn btn-primary btn-lg">{params.id=== params.id? `Edit`: `Add`}</button>
            </div>

            </React.Fragment>
        );
    }

 
export default Editform;