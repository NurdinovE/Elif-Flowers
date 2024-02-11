import React from 'react';
import cls from "./Button.module.scss"

const Button = ({text, setOpen, modal}) => {
    return (
        <button className={cls.modal_btn} onClick={() => setOpen(!modal)}>
            {text}
        </button>
    );
};

export default Button;