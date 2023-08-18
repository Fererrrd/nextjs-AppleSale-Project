import Image from 'next/image';
import styles from './page.module.css';
import CustomButton from '@/Components/CustomLink';
import Layout from './layout';
import Link from 'next/link';

const saleStyle = {
  color: 'red',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={'/navigation/applesales'}>
        <Image
          src="/images/apple_product_sale_cover.jpg"
          height={500}
          width={850}
          priority={true}
          alt="product sale cover"
        />
      </Link>

      <CustomButton
        routebtn={'/navigation/applesales'}
        text={'Sale'}
        stylefont={saleStyle}
      />
    </div>
  );
}
