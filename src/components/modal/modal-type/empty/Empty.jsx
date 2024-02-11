import React from 'react';
import cls from "./empty.module.scss";
import Button from "../../button/Button.jsx";
const Empty = ({setOpen, modal}) => {
    return (
        <div className={cls.empty}>
            <div className={cls.empty_basket}>
                Ваша корзина пуста
            </div>
            <Button text={'продолжить покупки'} setOpen={setOpen} modal={modal}/>
        </div>
    );
};

export default Empty;