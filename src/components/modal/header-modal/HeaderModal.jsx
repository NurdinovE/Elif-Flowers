import React from 'react';

import cls from "./HeaderModal.module.scss"
import arrow from "../../../assets/icons/Vectorarrow.png"
import Empty from "../modal-type/empty/Empty.jsx";
import Exist from "../modal-type/exist/Exist.jsx";

const HeaderModal = ({modal, setOpen, menuRef}) => {



    return (
        <div className={`${cls.dropdown_menu} ${modal ? cls.active : cls.inactive}`} ref={menuRef}>
            <div className={cls.back_btn} onClick={() => setOpen(!modal)}>
                <img src={arrow} alt="Back-arrow"/>Назад
            </div>

            {/*<Empty/>*/}
            <Exist/>


        </div>
    );
};

export default HeaderModal;