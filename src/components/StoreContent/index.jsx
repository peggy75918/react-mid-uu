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
                <div className={styles.btm}>All</div>
                <div className={styles.btm2}>Album</div>
                <div className={styles.btm2}>Merchandise</div>
            </div>
            <div className={styles.goods}>
                <Row gutter={[24,24]}>
                {goods.map((good) =>(
                    <Col
                        key={good.id}
                        sm={{ span: 12 }} 
                        lg={{ span: 8 }}
                        xl={{ span: 6 }}
                        xxl={{ span: 4 }}
                    >
                        <GoodsItem good={good} />
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
}