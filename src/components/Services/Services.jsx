import React from 'react';
import './Services.scss';

import chartLine from '../../assets/svg/services/chart-line.svg'
import wrench from '../../assets/svg/services/wrench.svg'
import photoVideo from '../../assets/svg/services/photo-video.svg'
import calendarCheck from '../../assets/svg/services/calendar-check.svg';
import ruble from '../../assets/svg/services/ruble.svg';
import thumbsUp from '../../assets/svg/services/thumbs-up.svg';

const Services = () => {

    return (
        <section id="services" className="services">
            <title className="services-title">
                <h2>С нами удобно</h2>
                <p className="p1">Каждый занят своим делом</p>
            </title>
            <main className="services-main">
                <ul className="services-main__items">
                    <li className="services-main__items_item">
                        <img src={chartLine} alt="chart-line"/>
                        <h4>Профессионализм</h4>
                        <p className="p1">Бригады состоят из мастеров с опытом более 20 лет</p>
                    </li>
                    <li className="services-main__items_item">
                        <img src={wrench} alt="wrench"/>
                        <h4>Надежность</h4>
                        <p className="p1">Используем современные и проверенные технологии</p>
                    </li>
                    <li className="services-main__items_item">
                        <img src={photoVideo} alt="images and movies"/>
                        <h4>Отчет</h4>
                        <p className="p1">Фото/видео отчет по каждому этапу</p>
                    </li>
                    <li className="services-main__items_item">
                        <img src={calendarCheck} alt="calendar-check"/>
                        <h4>Скорость</h4>
                        <p className="p1">Соблюдение сроков по договору</p>
                    </li>
                    <li className="services-main__items_item">
                        <img src={ruble} alt="pay-later"/>
                        <h4>Доступность</h4>
                        <p className="p1">Оплата по факту сдачи объекта. Возможна рассрочка</p>
                    </li>
                    <li className="services-main__items_item">
                        <img src={thumbsUp} alt="3-year-warranty"/>
                        <h4>Гарантии</h4>
                        <p className="p1">Гарантия 36 месяцев на все виды работ и услуг</p>
                    </li>
                </ul>
            </main>
        </section>
    )
};

export default Services;