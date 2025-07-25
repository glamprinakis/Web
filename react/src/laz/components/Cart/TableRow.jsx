import React from 'react'
import Square from '../buttons/Square'
import Rectangle from '../buttons/Rectangle'
import {HiXMark} from 'react-icons/hi2';

function TableRow(props) {
  const {product_image, price, quantity, name} = props

  return (
    <tr>
        <td>
          <div className='img-info-cart'>
            <div className='image-cart'>
              <img src={product_image} alt={name} />
            </div>
            <div className='name-price-cart'>
              <span>{name}</span>
              <span>{price}€</span>
            </div>
          </div>
        </td>
        <td>
          <div className='quantity-cart flex row gap-1'>
              <Square value='-'/>
              <Rectangle quantity={quantity}/> 
              <Square value='+'/>
          </div>
        </td>
        <td className='price-cell'>{price}€</td>
        <td className='xmark'><HiXMark /></td>
    </tr>
  )
}

export default TableRow