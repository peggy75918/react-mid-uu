import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingOutlined } from '@ant-design/icons';
import styles from './cartsummary.module.css';
import { selectCartItems } from "../../redux/cartSlice";

export default function CartSummary() {
    const [isOpen, setIsOpen] = useState(false)
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
              cartItems.reduce((sum, item) => sum + item.qty, 0)
              : 0;
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <nav onClick={toggleModal} className={styles.cartSummary}>
            <div className={styles.count}>
                <p className={styles.count_text}>商品數：{count}件　合計：￥{　}</p>
                <div className={styles.count_icon}>
                    <ShoppingOutlined 
                        style={{ fontSize: '40px', color: '#444444' }}
                        className={styles.count_cart}
                    />
                </div>
            </div>
        </nav>
        
    );
}