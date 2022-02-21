// src/POPOSDetails.js

import React from 'react'
import { useParams } from 'react-router-dom'



function ProductDetail(props) {
  const  id  = useParams().id // Location index

  if(!props.list.length){
    return(<div></div>);
  }
  const p = props.list[id]
  console.log(props.list);

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${p.images[0]}`} 
        alt="sneakers"/>
      </div>

      <div>
        <h1>{ p.title }</h1>
        <p>{ p.desc }</p>
        <p>{ p.price }</p>
       
      </div>
      <button onClick={()=> props.anadir(id)}>Add to cart</button>
    </div>
  )
}

export default ProductDetail