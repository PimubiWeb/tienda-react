//Componente list

import React from 'react';
import Product from './Product';

function ProductList() {
  return (
    <div>
      <Product 
        name="Nike Air"
        price="67€"
        image="producto1.png"
      ></Product>
      <Product 
        name="Colorful Nike's"
        price="120€"
        image="producto2.png"
      ></Product>
      <Product
        name="Anothers Nike"
        price="55€"
        image="producto3.png">
        </Product>
      
    </div>
  )
}

export default ProductList