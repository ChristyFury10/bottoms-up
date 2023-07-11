import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const BarItem = ({bar}) => {

  let {id} = useParams();

  return (
    <Link to={`/bars/${id}`}>
      <h3>{bar.name}</h3>
    </Link>
  )
}

export default BarItem
