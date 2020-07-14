import React from 'react';
import './Tariffs.scss';

const Tariffs = (props) => {
    return (
        <section id="tariffs" className="tariffs">
            <title className="tariffs-title">
                <h2>Виды ремонтных работ</h2>
            </title>
            <main className="tariffs-main">
                <div className="tariffs-card">
                    <h4>Штукатурка</h4>
                    <p className="p2">стен</p>
                    <div className="price">
                        <p className="p3">без скидки: от <s>335 ₽/м</s> <sup>2</sup></p>
                        <h5>от <span>300</span> ₽/м<sup>2</sup></h5>
                        <p className="p3">(при заказе онлайн)</p>
                        <h6>Экономия 35 ₽/м<sup>2</sup></h6>
                    </div>
                </div>
                <div className="tariffs-card">
                    <h4>Стяжка</h4>
                    <p className="p2">пола</p>
                    <div className="price">
                        <p className="p3">без скидки: от <s>440</s> ₽/м<sup>2</sup></p>
                        <h5>от <span>400</span> ₽/м<sup>2</sup></h5>
                        <p className="p3">(при заказе онлайн)</p>
                        <h6>Экономия 40 ₽/м<sup>2</sup></h6>
                    </div>
                </div>
                <div className="tariffs-card">
                    <h4>Обои</h4>
                    <p className="p2">комплекс</p>
                    <div className="price">
                        <p className="p3">без скидки: от <s>230</s> ₽/м<sup>2</sup></p>
                        <h5>от <span>200</span> ₽/м<sup>2</sup></h5>
                        <p className="p3">(при заказе онлайн)</p>
                        <h6>Экономия 30 ₽/м<sup>2</sup></h6>
                    </div>
                </div>
                <div className="tariffs-card">
                    <h4>Электрика</h4>
                    <p className="p2">комплекс</p>
                    <div className="price">
                        <p className="p3">без скидки: от <s>16500</s> ₽/м<sup>2</sup></p>
                        <h5>от <span>15000</span> ₽/м<sup>2</sup></h5>
                        <p className="p3">(при заказе онлайн)</p>
                        <h6>Экономия 1500 ₽/м<sup>2</sup></h6>
                    </div>
                </div>
                <div className="tariffs-card">
                    <h4>Плитка</h4>
                    <p className="p2">в помещение</p>
                    <div className="price">
                        <p className="p3">без скидки: от <s>780</s> ₽/м<sup>2</sup></p>
                        <h5>от <span>700</span> ₽/м<sup>2</sup></h5>
                        <p className="p3">(при заказе онлайн)</p>
                        <h6>Экономия 80 ₽/м<sup>2</sup></h6>
                    </div>
                </div>
                <div className="tariffs-card">
                    <h4>Сантехника</h4>
                    <p className="p2">комплекс</p>
                    <div className="price">
                        <p className="p3">без скидки: от <s>13100</s> ₽/м<sup>2</sup></p>
                        <h5>от <span>12000</span> ₽/м<sup>2</sup></h5>
                        <p className="p3">(при заказе онлайн)</p>
                        <h6>Экономия 1100 ₽/м<sup>2</sup></h6>
                    </div>
                </div>
            </main>
            <p className="p1">Полный перечень услуг и работ вы можете узнать по <u><a href="tel:+79876543210">телефону</a></u>
                , либо запросив смету у нас на сайте</p>
            <a className="button" href="#form">Получить смету</a>
        </section>
    )
};

export default Tariffs;
