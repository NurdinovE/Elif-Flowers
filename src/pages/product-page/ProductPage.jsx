import React, {useEffect, useState} from 'react';
import ProductPageCart from "../../components/product-page-cart/ProductPageCart.jsx";

const ProductPage = () => {
    const [item, setItems] = useState([])

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem("product"));
        const fetchData = async () => {
            try {
                const response = await fetch(`http://159.89.29.185/api_product/v1/product/${storedProduct}`
                );
                const data = await response.json();
                setItems(data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()

    }, []);


    const fetchData2 = async () => {
        let data3 = {
            "order": "202402050756381258" ,
            "product": "7d98b4dc-e0a1-4405-a999-1fb8e3ed885f",
            "quantity": 2
        }
        try {
            const headers = {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',  // Set the content type to JSON
                },
                'body': JSON.stringify(data3),
            };

            const response = await fetch(`http://159.89.29.185/api_order/v1/orderline/`, headers);
            const data2 = await response.json();
            console.log(data2)
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <section>
            <div className="container">
                <button onClick={() => fetchData2()} >submit product</button>
                <ProductPageCart product={item}/>
            </div>
        </section>
    );
};

export default ProductPage;