import Image from 'next/image';
import styles from './page.module.css';
import CustomButton from '@/Components/CustomLink';
import Layout from './layout';

const saleStyle = {
  color: 'red',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/apple_product_sale_cover.jpg"
        height={500}
        width={850}
        alt="product sale cover"
      />
      <CustomButton
        routebtn={'/navigation/applesales'}
        text={'Sale'}
        stylefont={saleStyle}
      />
    </div>
  );
}
