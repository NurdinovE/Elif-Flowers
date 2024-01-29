import React, {useState} from 'react';
import cls from "../DesktopDropdown/DesktopDropdown.module.scss"

const MobileDropdown = ({ data }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        data.map(items => (
            <div className={cls.footer_item} key={items.title}>
                <div onClick={() =>
                     toggleDropdown(items.title)} style={{ cursor: 'pointer' }}
                     className={`${cls.footer_item_title} ${openDropdown === items.title && `${cls.active}`}`}>
                     {items.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7.01" width="12" height="12">
                        <path d="M11 1.4L5.5 7.01l-1.38-1.4L9.63.01zM6.88 5.6L5.5 7.01 0 1.4 1.38.01" fill="#ffffff"></path>
                    </svg>
                </div>
                {openDropdown === items.title && (
                    <ul>
                        {items.subtitle.map((item) => (
                            <li key={item.id} className={cls.footer_item_title_label}>{item.label}</li>
                        ))}
                    </ul>
                )}
            </div>
        ))
    );
};
export default MobileDropdown;