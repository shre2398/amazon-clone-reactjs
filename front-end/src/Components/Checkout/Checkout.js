import React from 'react';
import { useStateValue } from '../../StateProvider';

import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const checkoutProducts = basket.map((item) => (
    <CheckoutProduct
      id={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      rating={item.rating}
    />
  ));

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg'
          alt=''
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {checkoutProducts}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
