import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './BarItem.css'

const BarItem = ({bar}) => {

  let id = bar.id

  return (
    <>
    

    <li class="collection-item avatar">
    <Link to={`/bars/${id}`}>
      <img src="https://png.pngtree.com/png-vector/20190527/ourmid/pngtree-beer-icon-png-image_1105732.jpg" alt="beer" className="circle"/>
      <span class="title">{bar.name}</span>
      <p>{bar.address}<br/>
         Open: {bar.hours}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </Link>
    </li>
    
    </>
  )
}

export default BarItem
