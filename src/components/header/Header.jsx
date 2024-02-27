import React, {useEffect, useRef, useState} from 'react';

import { IoSearch } from "react-icons/io5";
import cls from './Header.module.scss'
import logo from "../../assets/image/logo.png"
import HeaderModal from "../modal/header-modal/HeaderModal.jsx";
import {useDebounce} from "../../hooks/debounce.js";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const region = searchParams.get('region') || ""
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false)
    const [value, setValue] = useState("")
    const debouncedSearch = useDebounce(value)

    let location = useLocation()

    const navigate = useNavigate()

    let menuRef = useRef();
    const handleSubmit = () => {
        if (location.pathname === "/") {
            setSearchParams({
                region,
                search: debouncedSearch,
            });
        }

        if (location.pathname !== "/") {
            navigate({
                pathname: '/',
                search: `?search=${value}`,
            });
        }
    };


    const handleSubmitEnter = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }



    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current?.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);



    return (
        <>
            <header className={cls.header}>
                <div className="container"  ref={menuRef}>
                    <nav className={cls.nav}>
                        <div className={cls.logoBox}>
                            <a href="/">
                                <img src={logo} alt="logotype"/>
                            </a>
                        </div>
                        <div className={cls.menu}>
                            <div className={isHovered ? `${cls.searchBox} ${cls.active}`: `${cls.searchBox}`}>
                                <input className={cls.searchInput} type="text" name="" placeholder="Поиск"/>
                                <button className={`${cls.menu_btn} ${cls.searchButton}`}
                                        onClick={() => setIsHovered(!isHovered)}>
                                    <IoSearch />
                                    <span>Поиск</span>
                                </button>
                            </div>
                            <div className={cls.menu_btn}>
                                <a href="#">
                                    Помощь
                                </a>
                            </div>
                            <div className={cls.menu_btn} onClick={()=>{setOpen(!open)}}>
                                <a href="#">
                                    Корзина
                                </a>
                            </div>

                        </div>
                        <div className={cls.searchBox}>
                            <input className={cls.searchInput} type="text" placeholder="" onChange={(e) => setValue(e.target.value)}  onKeyDown={(e) => handleSubmitEnter(e)}/>
                            <button className={`${cls.menu_btnw} ${cls.searchButton}`}
                                    onClick={handleSubmit}
                                >
                                <IoSearch />
                                <span>Поиск</span>
                            </button>
                        </div>
                    </nav>
                    <HeaderModal modal={open} setOpen={setOpen}/>
                </div>
            </header>
        </>
    );
};

export default Header;