// Componente Producto

import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'


function Product(props) {
  const { name, image, price } = props
  return (
    <Link to={'/detail/'+props.id}>
    <div className="product">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Sneakers"
      />
      <h1>{name}</h1>
      <div>Price: {price}</div>
      <button onClick={() => props.id }>Add to cart</button>
    </div>
    </Link>
  )
}

export default Product