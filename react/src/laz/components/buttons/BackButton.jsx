import React from 'react'
import {BsArrowReturnLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";
import './buttons.css'

function BackButton({url}) {
  return (
    <Link 
        to={url} 
        style={{background: '#AEA8A8', '--hover-color': '#c2bdbd', maxWidth: '260px', marginLeft: '2rem'}} 
        className='btn-click'>
            <BsArrowReturnLeft />
            ΕΠΙΣΤΡΟΦΗ
    </Link>
  )
}

export default BackButton