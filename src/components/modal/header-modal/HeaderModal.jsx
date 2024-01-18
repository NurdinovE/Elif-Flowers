import React from 'react';

import cls from "./HeaderModal.module.scss"
import ModalItem from "./ModalItem.jsx";

const HeaderModal = ({modal}) => {
    return (
        <div className={`${cls.dropdown_menu} ${modal ? cls.active : cls.inactive}`}>
            <h3></h3>
            <ul>
                <ModalItem  text = {"My Profile"}/>
                <ModalItem text = {"Edit Profile"}/>
                <ModalItem text = {"Inbox"}/>
                <ModalItem text = {"Settings"}/>
                <ModalItem text = {"Helps"}/>
                <ModalItem  text = {"Logout"}/>
            </ul>
        </div>
    );
};

export default HeaderModal;