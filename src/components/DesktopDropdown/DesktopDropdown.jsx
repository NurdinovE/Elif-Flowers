import React from 'react';
import cls from './DesktopDropdown.module.scss'

const DesktopDropdown = () => (
        <>
            <div className={cls.left}>
                <div className={cls.left_wrapper}>
                    <div className={cls.footer_item_title}>Помощь</div>
                    <ul>
                        <li className={cls.footer_item_title_label}>Обслуживание клиентов</li>
                        <li className={cls.footer_item_title_label}>Руководства по цветам</li>
                        <li className={cls.footer_item_title_label}>Руководства по растениям</li>
                        <li className={cls.footer_item_title_label}>Карта сайта</li>
                    </ul>
                </div>
                <div className={cls.left_wrapper}>
                    <div className={cls.footer_item_title}>Аккаунт</div>
                    <ul>
                        <li className={cls.footer_item_title_label}>Управление аккаунтом</li>
                        <li className={cls.footer_item_title_label}>История заказов</li>
                        <li className={cls.footer_item_title_label}>Отслеживание вашего заказа</li>
                    </ul>
                </div>
                <div className={cls.left_wrapper}>
                    <div className={cls.footer_item_title}>Компания</div>
                    <ul>
                        <li className={cls.footer_item_title_label}>О нас</li>
                        <li className={cls.footer_item_title_label}>Карьера</li>
                        <li className={cls.footer_item_title_label}>Политика доставки</li>
                        <li className={cls.footer_item_title_label}>Партнерская программа</li>
                        <li className={cls.footer_item_title_label}>FTD Корпоратив</li>
                        <li className={cls.footer_item_title_label}>FTD Блог</li>
                    </ul>
                </div>
            </div>
            <div className={cls.center}>
                <div>
                    <div className={cls.footer_item_title}>Купить сейчас</div>
                    <ul>
                        <li className={cls.footer_item_title_label}>Доставка цветов</li>
                        <li className={cls.footer_item_title_label}>Цветы, доставленные флористом</li>
                        <li className={cls.footer_item_title_label}>Доставка цветов в тот же день</li>
                        <li className={cls.footer_item_title_label}>Розы и букеты из роз</li>
                        <li className={cls.footer_item_title_label}>Красные розы</li>
                        <li className={cls.footer_item_title_label}>Белые розы</li>
                        <li className={cls.footer_item_title_label}>Желтые розы</li>
                        <li className={cls.footer_item_title_label}>Международная доставка цветов</li>
                        <li className={cls.footer_item_title_label}>Доставка растений</li>
                        <li className={cls.footer_item_title_label}>Цветущие растения</li>
                        <li className={cls.footer_item_title_label}>Бонсаи и бамбук</li>
                        <li className={cls.footer_item_title_label}>Суккуленты и воздушные растения</li>
                        <li className={cls.footer_item_title_label}>Доставка подарков</li>
                        <li className={cls.footer_item_title_label}>Корпоративные подарки</li>
                        <li className={cls.footer_item_title_label}>Подарочные корзины</li>
                        <li className={cls.footer_item_title_label}>Шоколад</li>
                        <li className={cls.footer_item_title_label}>Фруктовые корзины</li>
                        <li className={cls.footer_item_title_label}>Печенье и конфеты</li>
                    </ul>
                </div>
            </div>
            <div className={cls.right}>
                <div>
                    <div className={cls.footer_item_title}>Выбор по случаю</div>
                    <ul>
                        <li className={cls.footer_item_title_label}>Цветы на день рождения</li>
                        <li className={cls.footer_item_title_label}>Цветы в знак соболезнования</li>
                        <li className={cls.footer_item_title_label}>Цветы на похороны</li>
                        <li className={cls.footer_item_title_label}>Поправись</li>
                        <li className={cls.footer_item_title_label}>Просто так</li>
                        <li className={cls.footer_item_title_label}>Поздравляю</li>
                        <li className={cls.footer_item_title_label}>Годовщина</li>
                    </ul>
                </div>

                <div>
                    <div className={cls.footer_item_title}>Выбор по празднику</div>
                    <ul>
                        <li className={cls.footer_item_title_label}>Рождество</li>
                        <li className={cls.footer_item_title_label}>День святого Валентина</li>
                        <li className={cls.footer_item_title_label}>День матери</li>
                    </ul>
                </div>
            </div>

        </>
    )
export default DesktopDropdown;