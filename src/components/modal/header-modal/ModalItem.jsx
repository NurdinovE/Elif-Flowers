import React from 'react';
import cls from "./HeaderModal.module.scss"

const ModalItem = ({text}) => {
    return (
        <li className={cls.dropdownItem}>
            <a> {text} </a>
        </li>
    );
};

export default ModalItem;