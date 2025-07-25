import React from 'react'
import {FaAngleRight} from 'react-icons/fa6';
import { Link } from "react-router-dom";
import './buttons.css'
import { BiSolidLock } from "react-icons/bi";

function PayButtonStep2({name,url}) {
  return (
    <Link to={url} style={{background: '#198754', '--hover-color': 'rgba(25,135,84, .7)'}} className='btn-click'>{name}<BiSolidLock /></Link>
  )
}

export default PayButtonStep2