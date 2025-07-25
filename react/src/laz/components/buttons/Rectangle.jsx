import React from 'react'
import './buttons.css'

function Rectangle(props) {
 const {quantity} = props
 return (
    <button className='btn-rectangle'>
        {quantity}
    </button>
  )
}

export default Rectangle