import React from 'react';
import moment from 'moment';

import './Order.css';
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={index.toString()}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <h3 className='order__total'>Order Total: {value}</h3>
            </p>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType='text'
        thousandSeperator={true}
        prefix={'Rs'}
      />
    </div>
  );
}

export default Order;
