import React, {useEffect, useState} from 'react';
import ProductPageCart from "../../components/product-page-cart/ProductPageCart.jsx";

const ProductPage = () => {
    const [item, setItems] = useState([])

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem("product"));
        if (storedProduct) {
            setItems(storedProduct);
        }
    }, []);

    return (
        <section>
            <div className="container">
                <ProductPageCart product={item}/>
            </div>
        </section>
    );
};

export default ProductPage;