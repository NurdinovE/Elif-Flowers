import React, {useEffect, useRef, useState} from 'react';


import cls from "./Product.module.scss"

import arrow from "../../assets/icons/Vectorarrow.png"
import ProductCard from "../product-card/ProductCard.jsx";

const Product = () => {
    const priceRanges = [
        {id: 1, name: "До 500 сом"},
        {id: 2, name: "500 - 1000 сом"},
        {id: 3, name: "1000 - 2000 сом"},
        {id: 4, name: "2000 - 5000 сом"},
        {id: 5, name: "Более 5000 сом"},
        // Add more price ranges as needed
    ];
    const kyrgyzstanRegions = [
        {id: 1, name: "Бишкек"},
        {id: 2, name: "Чуй"},
        {id: 3, name: "Ош"},
        {id: 4, name: "Джалал-Абад"},
        {id: 5, name: "Баткен"},
        {id: 6, name: "Нарын"},
        {id: 7, name: "Иссык-Куль"},
        {id: 8, name: "Талас"},
        {id: 9, name: "Ош"},
        // Add more regions as needed
    ];
    const data = [
        {
            "id": 1,
            "title": "Birthday Brights Bouquet",
            "price": "$65 - $95"
        },
        {
            "id": 2,
            "title": "Marmalade Skies Bouquet",
            "price": "$50 - $75"
        },
        {
            "id": 3,
            "title": "Fiesta Bouquet",
            "price": "$60 - $128"
        },
        {
            "id": 4,
            "title": "Light of My Life Bouquet & Happy Birthday Topper",
            "price": "$55 - $85"
        }
    ]

    // const [data, setData] = useState([])
    const [region, setRegion] = useState(false);
    const [price, setPrice] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    const toggleDropdown = () => {
        setRegion(!region)
        setPrice(false)
    };
    const toggleDropdown2 = () => {
        setPrice(!price)
        setRegion(false)
    };

    const handleItemClick = (id) => {
        let filterId = Number(id)
        selectedItem === filterId ? setSelectedItem(null) : setSelectedItem(filterId);
    }
    const handleItemClick2 = (id) => {
        let filterId = Number(id)
        selectedItem2 === filterId ? setSelectedItem2(null) : setSelectedItem2(filterId);
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await fetch('http://159.89.29.185/api_product/v1/product/');
    //             const json = await data;
    //             setData(json);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData()
    // }, [])

    return (
        <section id={cls.Products}>
            <div className="container">
                <div className={cls.product_title}>
                    Доставка цветов
                </div>
                <div className={cls.product_descr}>
                    Когда вы посылаете своим близким теплые пожелания на день рождения, показываете романтический жест
                    или благодарите кого-то, подойдут не только цветы. В FTD у нас есть лучшие цветочные букеты, которые
                    произведут неизгладимое впечатление на
                    кому бы вы ни посылали цветы. Закажите один из наших самых продаваемых цветов онлайн сегодня, чтобы
                    получить быструю и легкую доставку цветов!
                </div>
                <div className={cls.filters}>
                    <div className={cls.filter}>
                        <div className={cls.dropdown}>
                            <div className={cls.dropdown_header} onClick={toggleDropdown}>
                                {selectedItem !== null ? priceRanges.find(item => item.id === selectedItem)?.name : "Ценовой диапaзон"}
                                <img className={`${cls.icon} ${region && cls.open}`} src={arrow} alt=""/>
                            </div>
                            <div className={`${cls.dropdown_body} ${region && cls.open}`}>
                                {priceRanges.map(item => (
                                    <div className={cls.dropdown_item} onClick={e => handleItemClick(e.target?.id)}
                                         id={item.id}
                                         key={item.id}
                                    >
                                    <span
                                        className={`${cls.dropdown_item_dot} ${item.id === selectedItem && cls.selected}`}>• </span>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cls.filter}>
                        <div className={cls.dropdown}>
                            <div className={cls.dropdown_header} onClick={toggleDropdown2}>
                                {selectedItem2 !== null ? kyrgyzstanRegions.find(item => item.id === selectedItem2)?.name : "Регион"}
                                <img className={`${cls.icon} ${price && cls.open}`} src={arrow} alt=""/>
                            </div>
                            <div className={`${cls.dropdown_body} ${price && cls.open}`}>
                                {kyrgyzstanRegions.map(item => (
                                    <div className={cls.dropdown_item} onClick={e => handleItemClick2(e.target?.id)}
                                         id={item.id}
                                         key={item.id}
                                    >
                                    <span
                                        className={`${cls.dropdown_item_dot} ${item.id === selectedItem2 && cls.selected}`}>• </span>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.products}>
                    {data.map((item) => (
                        <ProductCard product={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;