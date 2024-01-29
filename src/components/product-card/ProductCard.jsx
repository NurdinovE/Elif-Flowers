import React from 'react';
import {useNavigate} from "react-router-dom";

import cls from "./ProductCard.module.scss"

import flower from "../../assets/image/product.png"

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    console.log(product)

    const handleRedirect = (product) => {
        let replacedLink = product.title.replace(/ /g, "-");
        localStorage.setItem("product", JSON.stringify(product));
        return navigate(`/product/${replacedLink}`) 
    }

    return (
        <a className={cls.product_card} id="1" onClick={() => handleRedirect(product)}>
            <div className={cls.product_card_image}>
                <img src={flower} alt="flower"/>
            </div>
            <div className={cls.product_card_name}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {product.title}
            </div>
            <div className={cls.product_card_price}>
                <div className={cls.discount}>$60 - $125 SALE</div>
                <div className={cls.def_price}>{product.price}</div>
            </div>
            <div className={cls.product_card_delivery}>
                ДОСТАВКА В ТОТ ЖЕ ДЕНЬ
            </div>

        </a>
    );
};

export default ProductCard;