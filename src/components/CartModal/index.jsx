import { Modal, Button, Select} from "antd";
import { ShoppingOutlined } from '@ant-design/icons';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./cartmodal.module.css";
import { selectCartItems } from "../../redux/cartSlice";
const { Option} = Select;

export default function CartModal ({ isOpen, toggleModal }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleCancel = () => toggleModal(!isOpen);
    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
        : 0;       
    }
    return (
        <Modal
            title="購物車"
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
        >
        {cartItems.length === 0 ? (
            <div>購物車內無商品</div>
         ) : (
            cartItems.map(item =>(
                <li key={item.id} className={styles.box}>
                    
                </li>
            ))
         )}
        <a className={styles.btn}>
            <div className={styles.btntext}>
                結帳
            </div>
            <ShoppingOutlined 
                style={{ fontSize: '20px', color: '#b1b1b1' ,}}
                className={styles.carticon}
            />
        </a>

        </Modal>
    )
}
