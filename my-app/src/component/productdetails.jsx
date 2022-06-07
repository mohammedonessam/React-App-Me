import React from 'react';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import  qs from 'query-string';



const ProductDetails = props => {
    let location= useLocation();
    const params= useParams();
    const res= qs.parse(location.search)
    const product= props.products.filter(c=>c.id === parseInt(params.id))
    const count= product[0].count
    let navigate = useNavigate();
        function handleSave() {
    navigate('/shoppingCart', { replace: true });
  }
        

    return ( 
        <React.Fragment>
            <div className='p-5 m-2 badge col-12'>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> Details No. {params.id}</h1>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> Product: {params.name}</h1>
            <h1 className='p-3 m-2 rounded-pill bg-secondary'> Count: {count}</h1>
            <button onClick={handleSave} className="btn btn-primary btn-lg">Save</button>
            </div>

        </React.Fragment>
    );
}
 
export default ProductDetails;

