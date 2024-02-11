import React, {useEffect, useState} from 'react';
import ProductCard from "../product-card/ProductCard.jsx";
import {useSearchParams} from "react-router-dom";
import cls from "./Product.module.scss"
import arrow from "../../assets/icons/Vectorarrow.png"

// eslint-disable-next-line react-refresh/only-export-components
export const kyrgyzstanRegions = [
    { id: 1, name: "Бишкек", request: "bihskek" },
    { id: 2, name: "Чуй", request: "chui" },
    { id: 3, name: "Ош", request: "osh" },
    { id: 4, name: "Джалал-Абад", request: "jalal-abad" },
    { id: 5, name: "Баткен", request: "batken" },
    { id: 6, name: "Нарын", request: "naryn" },
    { id: 7, name: "Иссык-Куль", request: "issyk-kul" },
    { id: 8, name: "Талас", request: "talas" },
]
const Product = () => {
    const API_BASE_URL = 'http://159.89.29.185/api_product/v1/product/';

    const priceRanges = [
        { id: 1, name: "До 500 сом" },
        { id: 2, name: "500 - 1000 сом" },
        { id: 3, name: "1000 - 2000 сом" },
        { id: 4, name: "2000 - 5000 сом" },
        { id: 5, name: "Более 5000 сом" },
    ];


    const [data, setData] = useState([])
    const [region, setRegion] = useState(false);
    const [price, setPrice] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchData = async (region) => {
        try {
            let response;

            if (region !== 0) {
                response = await fetch(`${API_BASE_URL}?region=${region}`);
            } else {
                response = await fetch(API_BASE_URL);
            }
            const data = await response.json();
            setData(data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleItemClick2 = (id, region) => {
        let filterId = id;
        setSelectedItem2(selectedItem2 === filterId ? null : filterId);
        setSearchParams({ region })

        if(selectedItem2 === filterId){
            fetchData(0)
        } else{
            fetchData(region);
        }
    };

    useEffect(() => {
        const fetchDataWrapper = async () => {
            try {
                const response = await fetch(API_BASE_URL);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataWrapper();
    }, []);


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
        if(selectedItem !== filterId){
            let filteredData = data.filter((item => !(item.price > 500)))
            setData(filteredData)
        } else {

        }
    }

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
                                    <div className={cls.dropdown_item} onClick={e => handleItemClick(item.id)}
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
                                    <div className={cls.dropdown_item} onClick={() => handleItemClick2(item.id, item.request) } key={item.id}
                                         id={item.request}
                                    >
                                        <span className={`${cls.dropdown_item_dot} ${item.id === selectedItem2 && cls.selected}`}>• </span>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.products}>
                    {data?.map((item, index) => (
                        <ProductCard product={item} key={item.id || index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;