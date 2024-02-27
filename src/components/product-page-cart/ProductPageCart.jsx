import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import {kyrgyzstanRegions} from "../product/Product.jsx"
import cls from "./ProductPageCart.module.scss"
import flower from "../../assets/image/flower.png"

const ProductPageCart = ({product}) => {
    function addToCart (productId) {
        if (typeof localStorage !== 'undefined') {
            const existingProductIds = JSON.parse(localStorage.getItem('cart')) || [];

            if (!existingProductIds.includes(productId)) {
                existingProductIds.push(productId);
                localStorage.setItem('cart', JSON.stringify(existingProductIds));
                console.log(`Product ID ${productId} has been saved to localStorage.`);
            } else {
                console.log(`Product ID ${productId} is already in localStorage.`);
            }
        } else {
            console.error('LocalStorage is not supported in this browser.');
        }
    }
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
                    {product.price} cом
                </div>
                <div className={cls.product_info_region}>
                    {kyrgyzstanRegions.find(item => item.request === product.region)?.name}
                </div>

                <button className={cls.product_info_button} onClick={() => addToCart(product.id)}>
                    <span>
                        добавить в корзину
                    </span>
                    <FaArrowRightLong />
                </button>
            </div>
            <div className={cls.product_descr}>
                <p>{product.title}</p> <br/>
                {product.description}
            </div>
        </div>
    );
};

export default ProductPageCart;