import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Главная
            </a>

            <a className="menu-item" href="#tariffs">
                Виды ремонта
            </a>

            <a className="menu-item" href="#form">
                Получить смету
            </a>

            <a className="menu-item" href="#contacts">
                Контакты
            </a>
        </Menu>
    );
};