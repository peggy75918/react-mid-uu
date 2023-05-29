import React from 'react';
import { Menu, Form } from 'semantic-ui-react';
import styles from "./signinsignup.module.css";
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Signin ({ closeModal }) {
    const [activeItem, setActiveItem] =React.useState('signin')

    return(
        <div className={styles.container}>
            <div className={styles.mask}>
            </div>
            <div className={styles.box}>
                <div className={styles.titlebox}>
                    <img src="/images/logo 2.png" className={styles.logo} />
                    <button className={styles.closebtn} onClick={()=>closeModal(false)}>
                        <CloseOutlined 
                            style={{ fontSize: '23px', color: '#444444' ,}}
                            className={styles.closeicon}
                        />
                    </button>
                </div>

                <div className={styles.menu}>
                    <button    
                        className={styles.signin}
                        active={activeItem === 'signin' } 
                        onClick={()=>setActiveItem ('signin')}
                    >
                        SIGN IN
                    </button>
                    <button    
                        className={styles.signup}
                        active={activeItem === 'signup' } 
                        onClick={()=>setActiveItem ('signup')}
                    >
                        SIGN UP
                    </button>

                </div>
                <div className={styles.from}>
                    <label >
                        <input name="useremail" placeholder="Useremail" className={styles.input1}/>
                    </label>
                    <label >
                        <input name="password" placeholder="Password" className={styles.input2}/>
                    </label>
                    <label className={styles.check}>
                        {activeItem === 'signin' && <div><input type="checkbox" name="staySignin" className={styles.checkbox} /> stay signed in</div>}
                        {activeItem === 'signup' && <div><input name="username" placeholder="Username" className={styles.input3}/></div>}
                    </label>
                    <button className={styles.signbtn}>
                        {activeItem === 'signin' && 'SIGN IN'}
                        {activeItem === 'signup' && 'SIGN UP'}
                    </button>
                    <div className={styles.btmword}>
                        {activeItem === 'signin' && 'Forgot Password?'}
                        {activeItem === 'signup' && <div className={styles.btmword2}><p>Already have an account?</p> <button className={styles.btmbtn} onClick={()=>setActiveItem ('signin')}>SIGN IN</button></div>}
                    </div>
                </div>
            </div>
            
        </div>
    );
}