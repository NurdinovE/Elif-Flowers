import React, {useEffect, useState} from 'react';

import cls from "./HeaderModal.module.scss"
import arrow from "../../../assets/icons/Vectorarrow.png"
import Empty from "../modal-type/empty/Empty.jsx";
import Exist from "../modal-type/exist/Exist.jsx";

const HeaderModal = ({modal, setOpen, menuRef}) => {
    const [fetchedItems, setFetchedItems] = useState([])
    const existingProductIds = JSON.parse(localStorage.getItem('cart')) || null;



    const fetchDataForIds = async (existingProductIds) => {
        try {
            const allData = [];
            for (let i = 0; i < existingProductIds?.length; i++) {
                const response = await fetch(`http://159.89.29.185/api_product/v1/product/${existingProductIds[i]}`);
                const data = await response.json();
                allData.push(data);
            }
            setFetchedItems(allData)
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchDataForIds(existingProductIds);
    }, []);

    return (
        <div className={`${cls.dropdown_menu} ${modal ? cls.active : cls.inactive}`} ref={menuRef}>
            <div className={cls.back_btn} onClick={() => setOpen(!modal)}>
                <img src={arrow} alt="Back-arrow"/>Назад
            </div>

            {existingProductIds ? <Exist product={fetchedItems}/> : <Empty setOpen={setOpen} modal={modal}/>}

        </div>
    );
};

export default HeaderModal;