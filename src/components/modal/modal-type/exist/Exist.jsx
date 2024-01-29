import React, {useState} from 'react';
import cls from './exist.module.scss'
import flower from '../../../../assets/image/flower.png'
import Button from "../../button/Button.jsx";

const Exist = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // const updateTotal = (cart) => {
    //     const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    //     setTotal(newTotal);
    // };

    return (
        <div className={cls.exist}>
            <div className={cls.exist_head}>
                <div className={cls.row}>
                    <div className={cls.col}>Название</div>
                    <div className={cls.col}>Стоимость</div>
                    <div className={cls.col}>Количество</div>
                    <div className={cls.col}>Итого</div>
                </div>
            </div>
            <div className={cls.exist_body}>
                <div className={cls.row}>
                    <div className={`${cls.col} ${cls.product_name}`}>
                            <img src={flower} alt=""/>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span>Букет "Чистое небо"</span>
                    </div>
                    <div className={cls.col}>4500</div>
                    <div className={cls.col}>22 шт</div>
                    <div className={cls.col}>9000 с</div>
                </div>
                <div className={cls.row}>
                    <div className={`${cls.col} ${cls.product_name}`}>
                            <img src={flower} alt=""/>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span>Букет "Чистое небо"</span>
                    </div>
                    <div className={cls.col}>4500</div>
                    <div className={cls.col}>2 шт</div>
                    <div className={cls.col}>9000 с</div>
                </div>
                <div className={cls.row}>
                    <div className={`${cls.col} ${cls.product_name}`}>
                            <img src={flower} alt=""/>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span>Букет "Чистое небо"</span>
                    </div>
                    <div className={cls.col}>4500</div>
                    <div className={cls.col}>2 шт</div>
                    <div className={cls.col}>9000 с</div>
                </div>
                <div className={cls.row}>
                    <div className={`${cls.col} ${cls.product_name}`}>
                            <img src={flower} alt=""/>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span>Букет "Чистое небо"</span>
                    </div>
                    <div className={cls.col}>4500</div>
                    <div className={cls.col}>2 шт</div>
                    <div className={cls.col}>9000 с</div>
                </div>
                <div className={cls.row}>
                    <div className={`${cls.col} ${cls.product_name}`}>
                            <img src={flower} alt=""/>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span>Букет "Чистое небо"</span>
                    </div>
                    <div className={cls.col}>4500</div>
                    <div className={cls.col}>2 шт</div>
                    <div className={cls.col}>9000 с</div>
                </div>
            </div>

            <hr/>

            <div className={cls.exist_foot}>
                <div className={cls.row}>
                    <div>Сумма</div>
                    <div>36000 c</div>
                </div>
                <div className={cls.row}>
                    <div style={{color: 'red'}}>SALE</div>
                    <div style={{color: 'red'}}>- 6000 c</div>
                </div>
                <div className={cls.row}>
                    <div>Итого</div>
                    <div>30000 c</div>
                </div>
                <div className={cls.row}>
                    <Button text={'Оформить заказ'}/>
                </div>
            </div>

        </div>
    );
};

export default Exist;