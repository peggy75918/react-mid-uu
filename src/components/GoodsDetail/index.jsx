import { useState } from "react";
import { ArrowLeftOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Select } from "antd";
import AddToCart from "../AddToCart"
import styles from "./goodsdetail.module.css"
const { Option } = Select;

function GoodsDetail({ good }) {
    const [qty, setQty] = useState(good.countInStock > 0 ? 1 : 0);

   return (
    <div>
        <p className={styles.big_title}>STORE</p>
        <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
        <div className={styles.icon}>
             <ArrowLeftOutlined 
                style={{ fontSize: '48px', color: '#B1B1B1' }}
            /> 
            {/* <div className={styles.count}>
                <p className={styles.count_text}>商品數：　件　合計：￥　</p>
                <div className={styles.count_icon}>
                   <ShoppingOutlined 
                    style={{ fontSize: '40px', color: '#444444' }}
                    className={styles.count_cart}
                    />
                </div>
            </div> */}
            
        </div>
        
        <div className={styles.container}>
            <div className={styles.goods}>
                <div className={styles.top}>
                    <div className={styles.images}>
                        <img 
                            alt={good.title}
                            className={styles.image_big}
                            src={good.image}
                        />
                        {/* <div className={styles.image_small}>
                            
                        </div> */}

                        <div className={styles.info}>
                            <div>
                                <p className={styles.title}>{good.title}</p>
                                <p className={styles.seller}>{good.seller}</p>
                                <p className={styles.category}>{good.category}</p>
                                <hr style={{color: '#444444'}}/>
                            </div>
                            <div>
                                <p className={styles.price}>￥{good.price}</p>
                                <p className={styles.status}>
                                    庫存狀態：{good.countInStock > 0 ? "尚有庫存" : "暫無庫存"}
                                </p>
                                <div className={styles.qty}>
                                    數量：{"   "}
                                    <Select
                                        defaultValue={qty}
                                        key={qty}                          
                                        className={styles.selectStyle}
                                        onChange={val => setQty(val)}
                                    >
                                        {[...Array(good.countInStock).keys()].map((x) => (
                                        <Option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </Option>
                                        ))}
                                    </Select>
                                </div>
                                <p className={styles.qty}>
                                    總金額：￥{good.price * qty}
                                </p>
                                <AddToCart good={good} qty={qty}/>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
        
        
    </div>
    
   );
}

export default GoodsDetail;