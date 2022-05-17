import React from 'react';
// import  createRoot  from 'react-dom/client';
import Product from './product';
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingCart from './ShoppingCart';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// createRoot.render(<Product/>, document.querySelector("#root"));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ShoppingCart />);