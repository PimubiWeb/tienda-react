// Componente Producto

import React from 'react'
import './Product.css'

function Product(props) {
  const { name, image, price } = props
  return (
    <div class="product">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Sneakers"
      />
      <h1>{name}</h1>
      <div>Price: {price}</div>
    </div>
  )
}

export default Product