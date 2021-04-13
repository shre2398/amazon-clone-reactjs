import React from 'react';

import './Home.css';
import Product from '../../Product/Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroApril21/Range_D_1x._CB655447130_.jpg'
          alt='Home'
        />
        <div className='home__row'>
          <Product
            id='23455135'
            title='Zero to One'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51z7mZZKRgL._SX317_BO1,204,203,200_.jpg'
            rating={3}
          />
          <Product
            id='2322636'
            title='OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)'
            price={500.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='3633453'
            title='boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)'
            price={500.99}
            image='https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg'
            rating={5}
          />
          <Product
            id='2322636'
            title='Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)'
            price={100.99}
            image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*'
            rating={3}
          />
          <Product
            id='2386736'
            title='Amazon Brand - Happy Belly Roasted and Salted Mixed Nuts with Peanuts, 44 Ounce'
            price={12.99}
            image='https://images-na.ssl-images-amazon.com/images/I/41ZxZgtdFrL.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='2456326'
            title='HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics/Shadow Black), 15-dk0268tx'
            price={700.99}
            image='https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
