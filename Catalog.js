import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ProductCard from './components/productCard';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { productsList } = this.props;
    return (
      <div>
        <ul>
          {
            productsList.map((prod) => (
              <li key={prod.id}><ProductCard prod={prod} /></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Catalog;