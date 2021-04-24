import React from 'react';
import { Link } from 'react-router-dom';

import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkuot'> {basket?.length} items </Link>)
        </h1>

        {/* Delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Details</h3>
          </div>
          <div className='payment__details'>{/* Stripe Code */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
