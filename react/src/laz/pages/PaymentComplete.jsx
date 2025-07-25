import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import {FaPaperPlane} from 'react-icons/fa6';
import { Link } from "react-router-dom";
import '../components/buttons/buttons.css'

function PaymentComplete() {
  return (
    <div className='container' style={{display: 'flex', flexDirection:'column', margin: '5rem auto', justifyContent: 'center', alignItems: 'center'}}>
        <AiFillCheckCircle style={{color: '#008000'}} size={300} />
        <p style={{fontSize: '30px', lineHeight: '44.4px', letterSpacing: '3px', fontWeight: 500}}>
            Η ΠΛΗΡΩΜΗ ΤΗΣ ΠΑΡΑΓΓΕΛΙΑΣ ΣΟΥ ΠΡΑΓΜΑΤΟΠΟΙΗΘΗΚΕ ΜΕ ΕΠΙΤΥΧΙΑ!!!
        </p>
        <Link 
            to={''} 
            style={{background: '#AEA8A8', '--hover-color': '#c2bdbd', marginLeft: '2rem'}} 
            className='btn-click'>
                ΠΑΡΑΚΟΛΟΥΘΗΣΗ ΠΑΡΑΓΓΕΛΙΑΣ
                <FaPaperPlane />
        </Link>
    </div>
  )
}

export default PaymentComplete