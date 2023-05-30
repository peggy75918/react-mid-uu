import { useState } from "react";
import { ArrowLeftOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Select ,Button} from "antd";
import { Link } from "react-router-dom"
import AddToCart from "../AddToCart"
import CartSummary from "../CartSummary";
import styles from "./goodsdetail.module.css"
const { Option } = Select;

function GoodsDetail({ good }) {
    const [qty, setQty] = useState(good.countInStock > 0 ? 1 : 0);

   return (
    <div>
        <p className={styles.big_title}>STORE</p>
        <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
        <div className={styles.icon}>
            <Link to={`/Store`}className={styles.menu_item}>
                <ArrowLeftOutlined 
                style={{ fontSize: '48px', color: '#B1B1B1' }}
                className={styles.arrow}
                    /> 
            </Link>
            <div className={styles.cart}>
                    <CartSummary />
            </div>
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
                            <div className={styles.box1}>
                                <div className={styles.leftbox}>
                                    <p className={styles.title}>{good.title}</p>
                                    <p className={styles.seller}>/{good.seller}</p>
                                </div>
                                <div className={styles.rightbox}>
                                    <p className={styles.category}>{good.category}</p>
                                </div>
                                
                            </div>
                            <div className={styles.box2}>
                                <p className={styles.price}>￥{good.price}</p>
                                <p className={styles.status}>
                                    庫存狀態：{good.countInStock > 0 ? "尚有庫存" : "暫無庫存"}
                                </p>
                                <div className={styles.qty}>
                                    數量：{"   "}
                                    {good.countInStock > 0 ? 
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
                                    : <Button type="text" className={styles.btn}>
                                        有庫存通知我
                                  </Button>
                                    }
                                    
                                </div>
                                <p className={styles.tatol}>
                                    總金額：￥{good.price * qty}
                                </p>
                                <AddToCart good={good} qty={qty}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.detail1}>
                            商品介紹
                            <div className={styles.des1}>
                            {good.description1}
                            </div>
                        </div>
                        <div className={styles.detail2}>
                            商品資料
                            <div className={styles.des2}>
                            {good.description2}
                            </div>
                        </div>
                        <div className={styles.detail3}>
                            相似商品
                            <div className={styles.des3}>
                            
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