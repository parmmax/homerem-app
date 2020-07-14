import React from 'react';
import './Steps.scss';

const Steps = (props) => {

    return (
        <section id="steps" className="steps">
            <title className="steps-title">
                <h2>Как мы делаем ремонт?</h2>
            </title>
            <main className="steps-main">
                <ul className="steps-main__items">
                    <li className="steps-main__items_item">
                        <h2>01</h2>
                        <h4>Звонок нам</h4>
                        <p className="p1">Примерный расчет по телефону</p>
                    </li>
                    <li className="steps-main__items_item">
                        <h2>02</h2>
                        <h4>Выезд замерщика</h4>
                        <p className="p1">Бесплатно, в течении 24 часов</p>
                    </li>
                    <li className="steps-main__items_item">
                        <h2>03</h2>
                        <h4>Расчет сметы за 30 минут</h4>
                        <p className="p1">прямо на объекте</p>
                    </li>
                    <li className="steps-main__items_item">
                        <h2>04</h2>
                        <h4>Заказ стройматериалов</h4>
                        <p className="p1">Поможем с доставкой</p>
                    </li>
                    <li className="steps-main__items_item">
                        <h2>05</h2>
                        <h4>Ремонтные работы</h4>
                        <p className="p1">С гарантией качества на долгие годы</p>
                    </li>
                    <li className="steps-main__items_item">
                        <h2>06</h2>
                        <h4>Сдача объекта</h4>
                        <p className="p1">Ваша квартира выглядит по-новому</p>
                    </li>
                </ul>
            </main>
        </section>
    )
};

export default Steps;