import React from 'react';
const Menu = (props) => {
    return ( 
        <React.Fragment>
        <div className='container'>
        <div> 
        <h1 className='d-inline'>Menu </h1>
        <i className="fa-solid fa-circle-chevron-down d-inline"></i>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Add</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map(p=> (
                    <tr key={p.id}>
                        <th scope="row">{p.id}</th>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>
                        <i 
                        className={p.isInCart ? "fa-solid fa-cart-arrow-down" : "fa-solid fa-cart-shopping"} 
                        role="button" 
                        cursor= "pointer"  
                        onClick={()=>p.isInCart=!p.isInCart}> 
                        </i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </React.Fragment>
     );
}
 
export default Menu;