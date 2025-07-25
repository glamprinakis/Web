import React from 'react'
import { products_cart } from '../dummys/cart'
import TableRow from '../components/Cart/TableRow'
import '../laz.css'
import './Cart.css'
import OnClickBtn from '../components/buttons/OnClickBtn'
import { valuesBtnColor } from '../components/buttons/buttons-style'
import MobileTable from '../components/Cart/MobileTable'
import { useNavigate } from 'react-router-dom';


function Cart() {
  const navigate = useNavigate();

  return (
    <section className='cart-section container section-75rem'>
      <div className='cart-up'>
        <div className='screen'>
          <table>
          <tbody>
                <tr className='headers'>
                    <th>ΠΡΟΙΟΝ</th>
                    <th>ΠΟΣΟΤΗΤΑ</th>
                    <th>ΤΙΜΗ</th>
                </tr>
              
                {
                  products_cart.products.map((product)=>{
                    return <TableRow 
                              key={product.id}
                              name={product.name}
                              price={product.price}
                              quantity={product.quantity}
                              product_image={product.img}
                          />
                  })
                }
                <tr>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mobile' style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{fontSize: '26px', borderBottom: '2px solid #CDCDCD'}}>ΠΡΟΙΟΝΤΑ</div>
              {
                  products_cart.products.map((product)=>{
                    return <MobileTable 
                              key={product.id}
                              name={product.name}
                              price={product.price}
                              quantity={product.quantity}
                              product_image={product.img}
                          />
                  })
              }
          </div>
      </div>
      <div className='cart-down section-5rem'>
        <p style={{fontSize: '30px'}}>ΣΥΝΟΛΟ ΤΙΜΩΝ</p>
        <table>
          <tbody>
            <tr>
              <td>ΑΞΙΑ ΠΡΟΙΟΝΤΩΝ</td>
              <td className='number'>{Number(2880.00).toFixed(2)}€</td>
            </tr>
            <tr>
              <td>ΜΕΤΑΦΟΡΙΚΑ</td>
              <td className='number'>{Number(5.00).toFixed(2)}€</td>
            </tr>
            <tr style={{borderTop: '3px solid #727272'}}>
              <td>ΣΥΝΟΛΟ</td>
              <td className='number'>{Number(2885.00).toFixed(2)}€</td>
            </tr>
          </tbody>
        </table>
        <div className='cart-btns' style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
              <OnClickBtn 
                url="/product"
                btncolor={valuesBtnColor.gray}
                hovercolor={valuesBtnColor.hoverGray}
                name="ΣΥΝΕΧΙΣΕ ΤΙΣ ΑΓΟΡΕΣ ΣΟΥ"
              />
              <OnClickBtn
                url="/checkout/info"
                btncolor={valuesBtnColor.green}
                hovercolor={valuesBtnColor.hoverGreen}
                name="ΠΛΗΡΩΜΗ"
              />
        </div>
      </div>
      
    </section>
  )
}

export default Cart