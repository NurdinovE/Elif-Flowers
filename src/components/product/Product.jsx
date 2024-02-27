import React, {useEffect, useState} from 'react';
import ProductCard from "../product-card/ProductCard.jsx";
import {useSearchParams} from "react-router-dom";
import cls from "./Product.module.scss"
import arrow from "../../assets/icons/Vectorarrow.png"
import ProductCardEmpty from "../product-card-empty/ProductCardEmpty.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const kyrgyzstanRegions = [
    { id: 1, name: "Бишкек", request: "bihskek" },
    { id: 3, name: "Ош", request: "osh" },
    { id: 4, name: "Джалал-Абад", request: "jalal-abad" },
    { id: 5, name: "Баткен", request: "batken" },
    { id: 6, name: "Нарын", request: "naryn" },
    { id: 7, name: "Иссык-Куль", request: "issyk-kul" },
    { id: 8, name: "Талас", request: "talas" },
];

const priceRanges = [
    { id: 1, name: "До 500 сом" },
    { id: 2, name: "500 - 1000 сом" },
    { id: 3, name: "1000 - 2000 сом" },
    { id: 4, name: "2000 - 5000 сом" },
    { id: 5, name: "Более 5000 сом" },
];

export const API_BASE_URL = 'http://159.89.29.185/api_product/v1/product/';
// export const API_BASE_URL = 'https://api.escuelajs.co/api/v1/products';

const fakeData = [
    {
        "title": "Роза \"Красная страсть\"",
        "price": 500,
        "description": "Эта красивая красная роза прекрасно подойдет для выражения страсти и любви. Отличный подарок для особых моментов в жизни.",
        "product_id": "001",
        "region": "bihskek"
    },
    {
        "title": "Тюльпаны \"Весенний букет\"",
        "price": 350,
        "description": "Свежие тюльпаны в ярких цветах создадут атмосферу весеннего праздника. Идеальный подарок для радости и свежести.",
        "product_id": "002",
        "region": "osh"
    },
    {
        "title": "Орхидея \"Экзотическая краса\"",
        "price": 800,
        "description": "Эта элегантная орхидея поразит своей красотой и изысканным ароматом. Подходит для особых событий и важных моментов в жизни.",
        "product_id": "003",
        "region": "jalal-abad"
    },
    {
        "title": "Лилии \"Поэтическая грация\"",
        "price": 600,
        "description": "Лилии с их изысканными формами и ароматом придают особую грацию. Прекрасный выбор для создания поэтического настроения.",
        "product_id": "004",
        "region": "naryn"
    },
    {
        "title": "Пионы \"Розовый вихрь\"",
        "price": 450,
        "description": "Пионы с их пышными цветами создадут вихрь романтики и нежности. Идеальный подарок для влюбленных.",
        "product_id": "005",
        "region": "talas"
    }
]

const Product = () => {
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const region = searchParams.get('region') || null
    const search = searchParams.get('search') || ""
    const [regionFilter, setRegionFilter] = useState(false);
    const [price, setPrice] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(region ? region : null);
    const params = new URLSearchParams(searchParams.toString());
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

    useEffect(() => {
        if (region) {
            fetchData(region)
        } else{
            fetchData(0);
        }

    }, []);
    const handleItemClick = (id) => {
        let filterId = Number(id)
        console.log(filterId, selectedItem)

        if (filterId !== selectedItem) {
            setSelectedItem(filterId);
            switch (filterId) {
                case 1:
                    setNewData(data.filter(item => item.price <= 500));
                    break;
                case 2:
                    setNewData(data.filter(item => item.price > 500 && item.price <= 1000));
                    break;
                case 3:
                    setNewData(data.filter(item => item.price > 1000 && item.price <= 2000));
                    break;
                case 4:
                    setNewData(data.filter(item => item.price > 2000 && item.price <= 5000));
                    break;
                case 5:
                    setNewData(data.filter(item => item.price > 5000));
                    break;
                default:
                    break;
            }
        } else {
            fetchData(region ? region : 0)
            setSelectedItem(null)
        }

    }

    const handleItemClick2 = (region) => {
        setSelectedItem2(selectedItem2 === region ? null : region);
        getRegion(region)

        if(selectedItem2 === region){
            fetchData(0)
        } else{
            fetchData(region);
        }
    };

    const getRegion = (params) => {
        const newSearchParams = {
            search,
            ...(params !== region && {region: params}),
        };
        setSearchParams(newSearchParams);
    };

    const getCategory = (params) => {
        const newSearchParams = {
            search,
            region
            // ...(params !== category && {category: params})
        };

        setSearchParams(newSearchParams);
    };

    const renderData = (newData, firstData) => {
        if (newData && newData.length > 0) {
            return newData.map((item, index) => (
                <ProductCard product={item} key={item.id || index} />
            ));
        } else if (firstData && firstData.length > 0) {
            return firstData.map((item, index) => (
                <ProductCard product={item} key={item.id || index} />
            ));
        } else {
            return <ProductCardEmpty />;
        }
    };


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
                            <div className={cls.dropdown_header} onClick={() => {
                                setRegionFilter(!regionFilter)
                                setPrice(false)
                            }}>
                                {selectedItem !== null ? priceRanges.find(item => item.id === selectedItem)?.name : "Ценовой диапaзон"}
                                <img className={`${cls.icon} ${regionFilter && cls.open}`} src={arrow} alt=""/>
                            </div>
                            <div className={`${cls.dropdown_body} ${regionFilter && cls.open}`}>
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
                            <div className={cls.dropdown_header} onClick={() => {
                                setPrice(!price)
                                setRegionFilter(false)
                            }}>
                                {selectedItem2 ? kyrgyzstanRegions.find(item => item.request === selectedItem2)?.name : "Регион"}
                                <img className={`${cls.icon} ${price && cls.open}`} src={arrow} alt=""/>
                            </div>
                            <div className={`${cls.dropdown_body} ${price && cls.open}`}>
                                {kyrgyzstanRegions.map(item => (
                                    <div className={cls.dropdown_item} onClick={() => handleItemClick2(item.request) } key={item.id}
                                         id={item.request}
                                    >
                                        <span className={`${cls.dropdown_item_dot} ${item.request === selectedItem2 && cls.selected}`}>• </span>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.products}>
                    {renderData(newData, data)}
                    {/*{fakeData.map((item, index) => (*/}
                    {/*    <ProductCard product={item} key={item.id || index}/>))}*/}

                </div>
            </div>
        </section>
    );
};

export default Product;