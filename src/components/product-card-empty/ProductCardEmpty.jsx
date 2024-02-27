import React from 'react';
import cls from "./ProductCardEmpty.module.scss"

const ProductCardEmpty = () => {
    return (
        <div className={cls.msc_blank}>
            <div className={cls.msc_blank_icon}>⚠</div>
            <div className={cls.msc_blank_title}>
                No records have been added yet
            </div>
            <div className={cls.msc_blank_desc}>
                This information needs to be added by your manager
            </div>
        </div>
    );
};

export default ProductCardEmpty;