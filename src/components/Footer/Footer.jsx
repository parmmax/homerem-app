import React from 'react';
import './Footer.scss';
import phone from '../../assets/svg/phone-solid.svg';
import envelope from '../../assets/svg/envelope-solid.svg';
import whatsapp from '../../assets/svg/whatsapp-brands.svg';

const Footer = (props) => {
    return (
        <footer id="contacts" className="footer">
            <div className="footer-list">
                <div className="footer-list__item">
                    <a id="email"
                        className="footer-list__item-link"
                        href="mailto:info.homerem@gmail.com?subject=Смета ремонтных работ&body="
                        target="_blank"
                        rel="noopener noreferrer"><img src={envelope} alt="envelope" />info.homerem@gmail.com</a>
                    <p className="p3">ответим в течении часа</p>
                </div>
                <div className="footer-list__item">
                    <a className="footer-list__item-link"
                        href="https://api.whatsapp.com/send?phone=79160992244&text="
                        target="_blank"
                        rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" />+7 916 099 22 44</a>
                    <p className="p3">в what's app ответим сразу</p>
                </div>
                <div className="footer-list__item">
                <div className="footer-list__item">
                    <a className="footer-list__item-link"
                        href="tel:+79160992244"
                        target="_blank"
                        rel="noopener noreferrer"><img src={phone} alt="phone" />+7 916 099 22 44</a>
                    <p className="p3">звоните с 7:00 до 21:00</p>
                </div>
                </div>
            </div>
            <div className="footer-security">
                <details className="policy">
                    <summary>Пользовательское соглашение</summary>
                    <p className="p4">Я, субъект персональных данных, в соответствии с Федеральным законом от 27
                    июля 2006 года № 152 «О персональных данных»
                    предоставляю владельцу формы (далее - Оператор), согласие на обработку персональных данных,
                    указанных мной в форме калькулятора и/или форме заказа товара и/или услуг на сайте в сети
                    «Интернет»,
                    владельцем которого является Оператор.
                        <br />1. Состав предоставляемых мной персональных данных является следующим: ФИО и номер
                        телефона.
                        <br />2. Целями обработки моих персональных данных являются: обеспечение обмена короткими
                        текстовыми сообщениями в режиме онлайн-диалога и обеспечение функционирования обратного
                        звонка.
                        <br />3. Согласие предоставляется на совершение следующих действий (операций) с указанными в
                        настоящем согласии персональными данными: сбор, систематизацию, накопление, хранение,
                        уточнение (обновление, изменение), использование, передачу (предоставление, доступ),
                        блокирование, удаление, уничтожение, осуществляемых как с использованием средств
                        автоматизации (автоматизированная обработка), так и без использования таких средств
                        (неавтоматизированная обработка).
                        <br />4. Я понимаю и соглашаюсь с тем, что предоставление Оператору какой-либо информации о
                        себе, не являющейся контактной и не относящейся к целям настоящего согласия, а равно
                        предоставление информации, относящейся к государственной, банковской и/или коммерческой
                        тайне, информации о расовой и/или национальной принадлежности, политических взглядах,
                        религиозных или философских убеждениях, состоянии здоровья, интимной жизни запрещено.
                        <br />5. В случае принятия мной решения о предоставлении Оператору какой-либо информации
                        (каких-либо данных), я обязуюсь предоставлять исключительно достоверную и актуальную
                        информацию и не вправе вводить Оператора в заблуждение в отношении своей личности, сообщать
                        ложную или недостоверную информацию о себе.
                        <br />6. Я понимаю и соглашаюсь с тем, что Оператор не проверяет достоверность персональных
                        данных, предоставляемых мной, и не имеет возможности оценивать мою дееспособность и исходит
                        из того, что я предоставляю достоверные персональные данные и поддерживаю такие данные в
                        актуальном состоянии.
                        <br />7. Согласие действует по достижении целей обработки или в случае утраты необходимости в
                        достижении этих целей, если иное не предусмотрено федеральным законом.
                        <br />8. Согласие может быть отозвано мною в любое время на основании моего письменного
                        заявления.
                    </p>
                </details>
                <span>Все права защищены</span>
                <span>2020 год</span>
            </div>
        </footer>
    )
};

export default Footer;