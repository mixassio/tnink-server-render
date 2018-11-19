import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import Catalog from './Catalog';
import products from './constants/products';


const render = () => {
    const productsList = products();    
    return ReactDOMServer.renderToString(<Catalog productsList={productsList} />)
};

export default render;