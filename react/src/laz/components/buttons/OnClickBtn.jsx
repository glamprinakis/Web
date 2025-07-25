import React from 'react'
import { Link } from "react-router-dom";
import './buttons.css'

function OnClickBtn(props) {
  const {url,btncolor,name, hovercolor} = props
  return (
      <Link to={url} style={{background: btncolor, '--hover-color': hovercolor}} className='btn-click'>{name}</Link>
  )
}

export default OnClickBtn