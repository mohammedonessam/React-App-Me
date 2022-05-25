import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ShoppingCart from './ShoppingCart';



import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules//@fortawesome/fontawesome-free/css/all.css";
import App from './component/app';


// createRoot.render(<Product/>, document.querySelector("#root"));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
<BrowserRouter>
<App/>
</BrowserRouter>
    </StrictMode>
);