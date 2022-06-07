import React from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import  qs from 'query-string';


const Admin =(props)=>{
    
        const {products,onDelete}=props;
        let navigate = useNavigate();
        let location= useLocation();
        const params= useParams();
        // const res= qs.parse(location.search)
        const product= props.products.filter(c=>c.id === parseInt(params.id))
        return (
            <React.Fragment>
                <h1>Admin</h1>
                <button onClick={()=>navigate('/editform/:id', { replace: true })} className="btn btn-primary">Add</button>
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
                {products.map(p=> (
                    <tr key={p.id}>
                        <th scope="row">{p.id}</th>
                        <td>{p.name}</td>
                        <td>
                        <i role="button" onClick={()=>{props.onDelete(p)}} className="fa-solid fa-trash btn  btn-sm m-1"></i>
                        </td>
                        <td>
                        <Link className='text-decoration-none text-capitalize link-info' to={`/editform/${p.id}/${p.name}`}>
                        <i role="button" className="fa-solid fa-pen-to-square btn  btn-sm m-1"></i>
                        </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
            </React.Fragment>
        );
    }

 
export default Admin;