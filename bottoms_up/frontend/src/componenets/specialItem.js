import React from 'react'
import { Link } from 'react-router-dom'

const specialItem = ({special, bar}) => {
  return (
    <div>
      <Link to={`/bars/${bar.id}/specials/${special.id}`}>
      {special.name}
      </Link>
      
      <br/>
      {special.id}
    </div>
  )
}

export default specialItem
