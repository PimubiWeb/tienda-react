//Componente list

import React from 'react';
import Product from './Product';
import './ProductList.css'

function ProductList() {
  return (
    <div className='productlist'>
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
        <Product 
        name="Nike Air"
        price="67€"
        image="producto1.png"
      ></Product>
      <Product 
        name="Nike Air"
        price="67€"
        image="producto1.png"
      ></Product>
      <Product 
        name="Nike Air"
        price="67€"
        image="producto1.png"
      ></Product>
      <Product 
        name="Nike Air"
        price="67€"
        image="producto1.png"
      ></Product>
      
    </div>
  )
}

export default ProductList