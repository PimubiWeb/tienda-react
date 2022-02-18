// src/POPOSDetails.js

import React from 'react'
import { useParams } from 'react-router-dom'



function POPOSDetails(props) {
  const { id } = useParams.id() // Location index

  const p = props.list[id]
  console.log(p)

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

    </div>
  )
}

export default POPOSDetails