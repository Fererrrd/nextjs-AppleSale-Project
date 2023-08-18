import Image from 'next/image';
import React from 'react';
import styles from '../navigation/applesalestyle.module.css';

const products = [
  {
    id: 0,
    product: '/Images/apple_product_iphone.jpg',
    altname: 'iphone image',
    name: 'Iphone',
  },
  {
    id: 1,
    product: '/Images/apple_product_ipad.jpg',
    name: 'Iphone',
    altname: 'ipad image',
  },
  {
    id: 2,
    product: '/Images/apple_product_macbook.jpg',
    name: 'Iphone',
    altname: 'macbook image',
  },
];

const applesales = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Apple Sale</h1>
        <h2>Get 100% off all your purchages</h2>
      </div>
      {products.map((item) => (
        <Image
          key={item.id}
          className={styles.productimage}
          src={item.product}
          width={508}
          height={472}
          alt="apple product images"
          priority={true} // {false} | {true}
        />
      ))}
    </div>
  );
};

export default applesales;
