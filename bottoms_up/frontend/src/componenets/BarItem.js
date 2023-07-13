import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './BarItem.css'

const BarItem = ({bar}) => {

  let id = bar.id

  return (
    <>
    
    <Link to={`/bars/${id}`}>
      <div className='bar-item'>
        {bar.name}
      </div>
    </Link>
    </>
  )
}

export default BarItem
