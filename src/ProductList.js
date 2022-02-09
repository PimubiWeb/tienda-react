//Componente list

import React from 'react';
import Product from './Product';
import './ProductList.css'
import data from './miJSON'



function ProductList() {

  const productos = data.map((obj) => {
    return (
      <Product 
        key={obj.id}
        name={obj.title}
        price={obj.price}
        image={obj.images[0]}
      />
    )
  })  

  return (
    <div className='productlist'>

      {productos}
      
    </div>
  )
}

export default ProductList