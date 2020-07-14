import React from 'react';
import './Promo.scss';

const Promo = (props) => {
    return (
        <section id="promo" className="promo-screen">
            <div className="promo-screen__bg"></div>

            <title className="promo-title">
                <h4>Мы воплощаем Ваши идеи в реальность!</h4>
                <h1>Ремонт и отделка</h1>
                <h4>квартир и домов в Московской области</h4>
                <a className="promo-title__button" href="#form">Получить смету</a>
            </title>

        </section>
    )
};

export default Promo;