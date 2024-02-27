import React from 'react';
import {useNavigate} from "react-router-dom";
import cls from "./ProductCard.module.scss"
import flower from "../../assets/image/flower.png"

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const handleRedirect = (product) => {
        let replacedLink = product.title.replace(/ /g, "-");
        localStorage.setItem("product", JSON.stringify(product.id));
        return navigate(`/product/${replacedLink}`) 
    }

    return (
        <a className={cls.product_card} id="1" onClick={() => handleRedirect(product)}>
            <div className={cls.product_card_image}>
                <img src={product.images[0] ? product.images[0] : flower} alt="flower"/>
            </div>
            <div className={cls.product_card_name}>
                {product.title}
            </div>
            <div className={cls.product_card_price}>
                {/*<div className={cls.discount}>$60 - $125 SALE</div>*/}
                <div className={cls.def_price}>{product.price} сом</div>
            </div>
            <div className={cls.product_card_delivery}>
                ДОСТАВКА В ТОТ ЖЕ ДЕНЬ
            </div>

        </a>
    );
};

export default ProductCard;