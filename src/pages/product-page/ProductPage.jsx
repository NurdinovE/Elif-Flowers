import React, {useEffect, useState} from 'react';
import ProductPageCart from "../../components/product-page-cart/ProductPageCart.jsx";
import API_BASE_URL from ".././../components/product/Product.jsx"
import flower from "../../assets/image/flower.png"

const ProductPage = () => {
    const [item, setItems] = useState([])
    const storedProduct = JSON.parse(localStorage.getItem("product"));


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}${storedProduct}`
                );
                const data = await response.json();
                setItems(data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()

    }, [storedProduct]);
    

    return (
        <section>
            <div className="container">
                <ProductPageCart product={item}/>
            </div>
        </section>
    );
};

export default ProductPage;