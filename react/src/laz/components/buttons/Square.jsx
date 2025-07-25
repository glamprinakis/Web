import React from 'react'
import './buttons.css'

function Square(props) {
  const { value } = props
  return (
    <button className='btn-square'>
        {value}
    </button>
  )
}

export default Square