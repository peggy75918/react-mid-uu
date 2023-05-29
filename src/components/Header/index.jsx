import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { UserAddOutlined } from '@ant-design/icons';
import  Signin  from '../SigninSignup';

export default function Header() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header>
            <div className={styles.header}>
                
                <Link to={`/Home`}>
                    <img src="/images/logo.png" className={styles.header_logo} />
                </Link>
                <div className={styles.nav}>
                    <div className={styles.menu}>
                        <Link to={`/News`} className={styles.menu_item}>NEWS</Link>
                        <Link to={`/Video`} className={styles.menu_item}>VIDEO</Link>
                        <Link to={`/Store`} className={styles.menu_item}>STORE</Link>
                        <Link to={`/Team`} className={styles.menu_item_right}>TEAM</Link>
                    </div>
                </div>
                <div className={styles.user} 
                        onClick={()=>{
                        setOpenModal(true);
                }}>
                    <UserAddOutlined 
                        style={{ fontSize: '36px', color: '#b1b1b1' }}
                        className={styles.signin_icon}
                    />
                </div>
                
            </div>

            {openModal && <Signin closeModal={setOpenModal}/>}

        </header>
    );
}