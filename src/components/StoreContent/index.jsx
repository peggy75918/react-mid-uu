import styles from "./storecontent.module.css";
import { Row, Col } from "antd";
import GoodsItem from "../GoodsItem";
import {  ShoppingOutlined } from '@ant-design/icons';

export default function StoreContent({goods}) {
    return (
        <div>
            <p className={styles.big_title}>STORE</p>
            <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
            <div className={styles.btm_area}>
                <div className={styles.btm}>
                    <a>All</a>
                </div>
                <div className={styles.btm2}>
                    <a>Album</a>
                </div>
                <div className={styles.btm2}>
                    <a>Merchandise</a>
                </div>
            </div>
            <div className={styles.goods}>
                <Row gutter={[24,24]}>
                {goods.map((good) =>(
                    <Col
                        key={good.id}
                        sm={{ span: 12 }} 
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                    >
                        <GoodsItem good={good} />
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
}