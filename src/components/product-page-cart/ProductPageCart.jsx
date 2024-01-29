import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import cls from "./ProductPageCart.module.scss"
import flower from "../../assets/image/product.png"

const ProductPageCart = ({product}) => {
    return (
        <div className={cls.product}>
            <div className={cls.product_image}>
                <img src={flower} alt={product.title}/>
            </div>
            <div className={cls.product_info}>
                <div className={cls.product_info_name}>
                    {product.title}
                </div>
                <div className={cls.product_info_price}>
                    {product.price}
                </div>
                <button className={cls.product_info_button}>
                    <span>
                        добавить в корзину
                    </span>
                    <FaArrowRightLong />
                </button>
            </div>
            <div className={cls.product_descr}>
                <p>{product.title}</p> <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, corporis cum cumque delectus eligendi ex explicabo, fugiat impedit iste itaque magnam minima, natus neque nesciunt officiis omnis perferendis quaerat quo tenetur! Aliquid, est incidunt? A cum dolore eos error odit reiciendis repudiandae! Animi, nisi, possimus. A aliquid asperiores autem commodi, est eum hic, ipsa, modi nisi possimus quia voluptas.
            </div>
        </div>
    );
};

export default ProductPageCart;