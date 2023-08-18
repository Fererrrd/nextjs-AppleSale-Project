import Image from 'next/image';
import React from 'react';
import styles from '../navigation/applesalestyle.module.css';
import Head from 'next/head';
import Link from 'next/link';

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
      <Head>
        <title>Apple Sales</title>
      </Head>
      <header className={styles.header}>
        <h1>Apple Sale</h1>
        <h2>Get 100% off all your purchages</h2>
      </header>
      <main className={styles.productimage}>
        {products.map((item) => (
          <Image
            key={item.id}
            style={{ display: 'flex' }}
            src={item.product}
            width={508}
            height={472}
            alt="apple product images"
            priority={true} // {false} | {true}
          />
        ))}
      </main>
      <section>
        <Link href="/">
          <h3>Back to the Home Page</h3>
        </Link>
      </section>
    </div>
  );
};

export default applesales;
