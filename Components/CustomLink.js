import styleComponent from './CustomLinkStyle.module.css';
import Link from 'next/link';

const CustomButton = ({ text, routebtn, stylefont, style }) => {
  return (
    <div>
      <Link href={routebtn} style={{ style }}>
        <h2 style={{ stylefont }}>{text}</h2>
      </Link>
    </div>
  );
};

export default CustomButton;
