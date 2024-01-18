import React, {useEffect, useRef, useState} from 'react';

import { IoSearch } from "react-icons/io5";
import cls from './Header.module.scss'
import logo from "../../assets/image/logo.png"
import HeaderModal from "../modal/header-modal/HeaderModal.jsx";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return() =>{
            document.removeEventListener("mousedown", handler);
        }

    });


    return (
        <header className={cls.header}>
            <div className="container"  ref={menuRef}>
                <nav className={cls.nav}>
                    <div className={cls.logoBox}>
                        <img src={logo} alt="logotype"/>
                    </div>
                    <div className={cls.menu}>
                        <div className={isHovered ? `${cls.searchBox} ${cls.active}`: `${cls.searchBox}`}>
                            <input className={cls.searchInput} type="text" name="" placeholder="Поиск"/>
                            <button className={`${cls.menu_btn} ${cls.searchButton}`}
                                    onClick={() => setIsHovered(!isHovered)}>
                                {/*{isHovered ? (*/}
                                {/*    <IoSearch />*/}
                                {/*) : (*/}
                                {/*    <>*/}
                                        <IoSearch />
                                        <span>Поиск</span>
                                {/*    </>*/}
                                {/*)}*/}

                            </button>
                        </div>
                        <div className={cls.menu_btn}>
                            <a href="#">
                                Помощь
                            </a>
                        </div>
                        <div className={`${cls.menu_btn} ${cls.trigger}`} onClick={()=>{setOpen(!open)}}>
                            <a href="#">
                                Корзина
                            </a>
                        </div>
                        <HeaderModal modal={open}/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;