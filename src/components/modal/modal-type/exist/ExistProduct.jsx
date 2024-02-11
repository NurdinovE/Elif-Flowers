import React, {useState} from 'react';
import cls from "./exist.module.scss";

const ExistProduct = ({item, quantity, setQuantity}) => {
    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className={cls.row} key={item.product_id}>
            <div className={`${cls.col} ${cls.product_name}`}>
                <img src={item.image} alt=""/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span>{item.title}</span>
            </div>
            <div className={cls.col}>{item.price} c</div>
            <div className={cls.col}>
                <div className={cls.quantity}>
                    <button className={`${cls.quantity__modifier} ${cls.quantity__modifier__left}`} onClick={decrement}>
                        &#8722;
                    </button>
                    <input className={cls.quantity__screen} type="text" value={quantity} readOnly />
                    <button className={`${cls.quantity__modifier} ${cls.quantity__modifier__right}`} onClick={increment}>
                        &#x2B;
                    </button>
                </div>
            </div>
            <div className={cls.col}>{item.price * quantity} с</div>
        </div>
    );
};

export default ExistProduct;