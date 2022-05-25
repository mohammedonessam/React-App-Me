import React from 'react';
import {useParams } from 'react-router-dom';

const ProductDetails = props => {
    const params= useParams();
    const product= props.products.filter(c=>c.id === parseInt(params.id))
    const count = product[0].count
    console.log(count);
    return ( 
        <React.Fragment>
            <div className='p-5 m-2 badge bg-info '>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> Details No. {params.id}</h1>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> Product: {params.name}</h1>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> Count: {count}</h1>
            </div>

        </React.Fragment>
    );
}
 
export default ProductDetails;

