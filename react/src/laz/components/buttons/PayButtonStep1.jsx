import React from 'react'
import {FaAngleRight} from 'react-icons/fa6';
import { Link } from "react-router-dom";
import './buttons.css'

function PayButtonStep1({name,url}) {
  return (
    <Link to={url} style={{background: '#198754', '--hover-color': 'rgba(25,135,84, .7)'}} className='btn-click'>{name}<FaAngleRight /></Link>
  )
}

export default PayButtonStep1