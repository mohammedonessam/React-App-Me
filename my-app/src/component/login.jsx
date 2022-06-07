import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';


const Login = () => {

    let username= useRef();
    let password=useRef();
    const [isRevealPwd, setIsRevealPwd] = useState(false);
     
    const [Users,setUsers]=useState({});

    const addUser=(e)=>{
        e.preventDefault();
        const name=username.current.value;
        const pw=password.current.value;
        setUsers(Users=>([...Users,`username: ${name}, password: ${pw}}`]))
        console.log(Users);
    }
    
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>console.log(res.data))
    //     .catch(err=>console.log(err.message))
    // },[])
    
    
    return ( 
            <React.Fragment>
                <h1 className='m-3'>Login...</h1>
                <form>
                    <div className="form-group m-2">
                        <label htmlFor='username'>User Name</label>
                        <input ref={username} type="username" autoComplete="username" className="form-control" id="username"/>
                        {/* <small id='userNameHelp' className='form-text text-muted'>we'll never share your email with anyone else</small> */}
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor='password'>Password</label>
                        <div className="d-flex border rounded pwd-container">
                            <input ref={password} autoComplete="current-password" type={isRevealPwd ? "text" : "password"} 
                            className="d-inline border-0 form-control" id="password"/>
                            <i
                            onClick={()=>setIsRevealPwd(prevState=>!prevState)} 
                            className={
                            isRevealPwd
                            ?'btn  fa-solid fa-eye  p-2'
                            :'btn  fa-solid fa-eye-slash  p-2'}
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            />
                        </div>

                    </div>
                    {/* <div className="form-group form-check m-2">
                        <input  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label htmlFor="exampleCheck1" className="form-check-label">Check me out</label>
                    </div> */}
                    <button onClick={addUser} type='submit' className="btn btn-primary m-2">Submit</button>
                </form>
            </React.Fragment>

        );
}
 
export default Login;