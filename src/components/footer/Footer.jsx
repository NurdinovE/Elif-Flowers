import React from 'react';
import MobileDropdown from "../MobileDropdown/MobileDropdown.jsx";
import DesktopDropdown from "../DesktopDropdown/DesktopDropdown.jsx";
import cls from "./Footer.module.scss"

import footerLogo from '../../assets/image/footer-logo.png'

const Footer = () => {

    const footerLinks = [
        {
            title: "Помощь",
            subtitle: [
                {id: 1, label: "Обслуживание клиентов"},
                {id: 2, label: "Руководства по цветам"},
                {id: 3, label: "Руководства по растениям"},
                {id: 4, label: "Карта сайта"},
            ],
        },
        {
            title: "Купить сейчас",
            subtitle: [
                {id: 14, label: "Доставка цветов"},
                {id: 15, label: "Цветы, доставленные флористом"},
                {id: 16, label: "Доставка цветов в тот же день"},
                {id: 17, label: "Розы и букеты из роз"},
                {id: 18, label: "Красные розы"},
                {id: 19, label: "Белые розы"},
                {id: 20, label: "Желтые розы"},
                {id: 21, label: "Международная доставка цветов"},
                {id: 22, label: "Доставка растений"},
                {id: 23, label: "Цветущие растения"},
                {id: 24, label: "Бонсаи и бамбук"},
                {id: 25, label: "Суккуленты и воздушные растения"},
                {id: 26, label: "Доставка подарков"},
                {id: 27, label: "Корпоративные подарки"},
                {id: 28, label: "Подарочные корзины"},
                {id: 29, label: "Шоколад"},
                {id: 30, label: "Фруктовые корзины"},
                {id: 31, label: "Печенье и конфеты"},
            ],
        },
        {
            title: "Выбор по случаю",
            subtitle: [
                {id: 32, label: "Цветы на день рождения"},
                {id: 33, label: "Цветы в знак соболезнования"},
                {id: 34, label: "Цветы на похороны"},
                {id: 35, label: "Поправись"},
                {id: 36, label: "Просто так"},
                {id: 37, label: "Поздравляю"},
                {id: 38, label: "Годовщина"},
            ],
        },

        {
            title: "Аккаунт",
            subtitle: [
                {id: 5, label: "Управление аккаунтом"},
                {id: 6, label: "История заказов"},
                {id: 7, label: "Отслеживание вашего заказа"},
            ],
        },
        {
            title: "Компания",
            subtitle: [
                {id: 8, label: "О нас"},
                {id: 9, label: "Карьера"},
                {id: 10, label: "Политика доставки"},
                {id: 11, label: "Партнерская программа"},
                {id: 12, label: "FTD Корпоратив"},
                {id: 13, label: "FTD Блог"},
            ],
        },
        {
            title: "Выбор по празднику",
            subtitle: [
                {id: 39, label: "Рождество"},
                {id: 40, label: "День святого Валентина"},
                {id: 41, label: "День матери"},
            ],
        },


    ];
    const isMobile = window.innerWidth <= 768;


    return (
        <footer>
            <div className={cls.footer_logo}>
                <img src={footerLogo} alt="footer logo"/>
            </div>
            <div className={cls.footer_container}>
                <div className={isMobile ? `${cls.mobile_footer}` : `${cls.desktop_footer}`}>

                    {isMobile ? (
                            <MobileDropdown data={footerLinks}/>

                        )
                        : (
                            <DesktopDropdown />

                        )}


                </div>
                <div className={cls.contact_footer}>
                    <div className={cls.contact_input}>
                        <label htmlFor="email">
                            ПОЛУЧИТЕ ЦВЕТЫ В СВОЙ ЯЩИК
                        </label>
                        <div className={cls.input}>
                            <input type="text" name="email" placeholder={'Enter your email'}/>
                            <button>Зарегистрироваться</button>
                        </div>

                    </div>
                    <div className={cls.contacts}>
                            КОНТАКТ
                        <div className={cls.contacts_item}>
                            Мы здесь для вас 24 часа в сутки
                        </div>
                        <div className={cls.contacts_item}>
                            <a href="#">Отследить ваш заказ</a>
                        </div>
                        <div className={cls.contacts_item}>
                            <a href="#">Связаться с нами</a>
                        </div>
                        <div className={cls.contacts_item}>
                            <a href="#">ADA Помощь</a>
                        </div>


                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;