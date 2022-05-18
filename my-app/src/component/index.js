import React from 'react';
import { createRoot } from 'react-dom/client';

// import ShoppingCart from './ShoppingCart';
import App from './app';


import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";


// createRoot.render(<Product/>, document.querySelector("#root"));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);