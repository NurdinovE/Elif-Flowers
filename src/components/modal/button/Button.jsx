import React from 'react';
import cls from "./Button.module.scss"

const Button = ({text}) => {
    return (
        <button className={cls.modal_btn}>
            {text}
        </button>
    );
};

export default Button;