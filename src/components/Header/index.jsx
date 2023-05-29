import React from 'react';
import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { UserAddOutlined, UserOutlined, ExportOutlined } from '@ant-design/icons';
import  Signin  from '../SigninSignup';
import firebase from '../../api/index';

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser]=React.useState(null);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((account)=>{
            setUser(account);
        });
    },[]);

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
               
                {user ? (
                    <div className={styles.user1} 
                    
                    >
                        <UserOutlined 
                            style={{ fontSize: '36px', color: '#b1b1b1' }}
                            className={styles.signin_icon}
                        />
                        <div className={styles.signout}
                            onClick={()=>firebase.auth().signOut()
                        }>
                            <ExportOutlined 
                                style={{ fontSize: '29px', color: '#b1b1b1' }}
                                className={styles.signout_icon}
                            />
                            <p className={styles.signout_text}>Sign out</p>
                        </div>
                    </div>
                ):(
                    <div className={styles.user2} 
                        onClick={()=>{
                        setOpenModal(true);
                    }}>
                        <UserAddOutlined 
                            style={{ fontSize: '36px', color: '#b1b1b1' }}
                            className={styles.signin_icon}
                        />
                    </div>
                )}
                
            </div>

            {openModal && <Signin closeModal={setOpenModal}/>}

        </header>
    );
}