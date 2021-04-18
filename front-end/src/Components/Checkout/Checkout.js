import React from 'react';
import { useStateValue } from '../../StateProvider';

import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg'
          alt=''
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>

          {/* Basket Items */}
          {/* Basket Items */}
          {/* Basket Items */}
          {/* Basket Items */}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
