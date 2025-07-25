import React from 'react'
import Square from '../buttons/Square'
import Rectangle from '../buttons/Rectangle'
import {HiXMark} from 'react-icons/hi2';

function MobileTable(props) {
const {product_image,name,price, quantity} = props
  return (
        <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', borderBottom: '2px solid #CDCDCD'}}>
            <div style={{display: 'flex',justifyContent:'center',alignItems:'center',flexDirection: 'row', flexWrap: 'wrap'}}>
                <div>
                    <img style={{width: '250px'}} src={product_image} alt={name}/>
                </div>
                <div className='name-price-cart'>
                    <span style={{fontSize: '25px'}}>{name}</span>
                    <span style={{fontSize: '25px'}}>{price}€</span>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row',justifyContent:'center', alignItems: 'center', gap: '3rem', margin: '0.5rem 1rem'}}>
                <div className='quantity-cart flex row gap-1'>
                    <Square value='-'/>
                    <Rectangle quantity={quantity}/> 
                    <Square value='+'/>
                </div>
                <div style={{fontSize: '3rem'}}>
                    <HiXMark />
                </div>
            </div>
        </div>
  )
}

export default MobileTable