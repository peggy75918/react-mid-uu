import React from 'react';
import styles from "./signinsignup.module.css";
import { CloseOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import 'firebase/compat/auth';
import firebase from '../../api/index';



export default function Signin ({ closeModal }) {
    const history =useNavigate();
    const [activeItem, setActiveItem] =React.useState('signin');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    function onSubmit(){
        if(activeItem==='signup'){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(()=>{
                history('/');closeModal(false);
            });
        } else if(activeItem==='signin'){
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(()=>{
                history('/');closeModal(false);
            });
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.mask} onClick={()=>closeModal(false)}>
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
                    <div>
                        <button    
                            className={styles.signin}
                            active={activeItem === 'signin' } 
                            onClick={()=>setActiveItem ('signin')}
                        >
                            SIGN IN
                        </button>
                        {activeItem === 'signin' &&<div className={styles.line}></div>}
                    </div>
                    <div>
                        <button    
                            className={styles.signup}
                            active={activeItem === 'signup' } 
                            onClick={()=>setActiveItem ('signup')}
                        >
                            SIGN UP
                        </button>
                        {activeItem === 'signup' &&<div className={styles.line}></div>}
                    </div>
                </div>
                <Form 
                    className={styles.from} 
                    onFinish={onSubmit} 
                >
                    <Form.Item >
                        <Input 
                            name="useremail" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            placeholder="Useremail" 
                            className={styles.input1}
                            bordered={false} 
                        />
                    </Form.Item>
                    <Form.Item >
                        <Input 
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Password" 
                            className={styles.input2}
                            type="password" 
                            bordered={false} 
                        />
                    </Form.Item>
                    <Form.Item className={styles.check}>
                        {activeItem === 'signin' && <div className={styles.checkbox}><Checkbox type="checkbox" name="staySignin" />  stay signed in</div>}
                        {activeItem === 'signup' && <div className={styles.space}></div>}
                    </Form.Item>
                    <Button className={styles.signbtn} htmlType="submit" type="text">
                        {activeItem === 'signin' && 'SIGN IN'}
                        {activeItem === 'signup' && 'SIGN UP'}
                    </Button>
                    <Form.Item className={styles.btmword}>
                        {activeItem === 'signin' && <div className={styles.btmword}>Forgot Password?</div>}
                        {activeItem === 'signup' && <div className={styles.btmcontent}><p className={styles.btmword}>Already have an account?</p> <button className={styles.btmbtn} onClick={()=>setActiveItem ('signin')}>SIGN IN</button></div>}
                    </Form.Item>
                </Form>
            </div>
            
        </div>
    );
}