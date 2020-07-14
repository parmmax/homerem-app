import React from 'react';
import axios from 'axios';
import PhoneInput from "react-phone-number-input";
import RU from 'react-phone-number-input/locale/ru';
import 'react-phone-number-input/style.css'
import './Form.scss';


class Form extends React.Component {


    state = {
        firstName: '',
        phoneNum: '',
        message: '',
        isChecked: false,
        isDisabled: true,
    };

    componentDidMount = () => {
        this.getCustomers();
    };

    getCustomers = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ messages: data });
                console.log('Data has been received!');
            })
            .catch(() => {
                console.log('Error retrieving data!');
            });
    };

    // firstName
    handleFirstNameChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'firstName':
                this.firstName =
                    value.length < 3
                        ? 'Введите более 3-х символов'
                        : '';
                break;
            default:
                break;
        }
        this.setState({ firstName: value })
    };

    // phoneNum
    handlePhoneNumChange = (value) => {
        this.setState({ phoneNum: value })
    };

    // message
    handleMessageChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'message':
                this.message =
                    value.length > 300
                        ? 'Максимальное кол-во символов'
                        : '';
                break;
            default:
                break;
        }
        this.setState({ [name]: value });
    };

    handleCheckboxChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
        if (this.state.isChecked) {
            this.setState({ isDisabled: true })

        } else

            this.setState({ isDisabled: false });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.isDisabled === true) {
            alert('Form submitted')

        } else {
            alert('form has not submitted');
        }
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            firstName: this.state.firstName,
            phoneNum: this.state.phoneNum,
            message: this.state.message,
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                this.resetUsersInputs();
                this.getCustomers();
            })
            .catch(() => {
                console.log('Internal server error')
            });

        // ----------------------------------------------------
        axios({
            url: '/api/send-email',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data was SENT!')
            })
            .catch(() => {
                console.log('Error SENT!')
            })
        // ----------------------------------------------------
    };

    resetUsersInputs = () => {
        this.setState({
            firstName: '',
            phoneNum: '',
            message: '',
            isChecked: false,
        })
    };

    render() {
        console.log('State: ', this.state);

        let msgCheck;
        if (this.state.isChecked) {
            msgCheck = "Даю согласие на обработку персональных данных";
        } else {
            msgCheck = "Согласиться на обработку персональных данных";
        }

        return (
            <div id="form" className="forms-wrapper">
                <section className="forms-section">
                    <title className="forms-title">
                        <h2>Получить смету</h2>
                    </title>
                    <form className="form" action="/" onSubmit={this.submit}>
                        <div className="form__input">
                            <p className="p4 reminder">Как к Вам обращаться?</p>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Имя"
                                maxLength={18}
                                value={this.state.firstName}
                                onChange={this.handleFirstNameChange} />
                        </div>
                        <div className="form__input">
                            <p className="p4 reminder">Введите номер начиная с +7</p>
                            <PhoneInput id="phoneNum"
                                name="phoneNum"
                                placeholder="+7 987 654 3210"
                                country="RU"
                                defaultCountry="RU"
                                labels={RU}
                                maxLength={16}
                                countrieDefault
                                value={this.state.phoneNum}
                                onChange={this.handlePhoneNumChange}
                                getCountryCallingC

                            />
                        </div>
                        <div className="form__input">
                            <p className="p4 reminder">Например: Сколько стоит ремонт квартиры площадью 39 кв.м?</p>
                            <textarea id="message"
                                name="message"
                                cols="10"
                                rows="7"
                                maxLength={180}
                                value={this.state.message}
                                placeholder="Сообщение"
                                onChange={this.handleMessageChange}>
                            </textarea>
                        </div>
                        <div className="form__checkbox">
                            <input type="checkbox"
                                required
                                // defaultChecked={this.state.isChecked}
                                checked={this.state.isChecked}
                                onChange={this.handleCheckboxChange} />
                            <p className="p4 reminder">
                                {msgCheck}
                            </p>
                        </div>
                        <button className="button-submit"
                            onChange={this.handleSubmit}
                            disabled={this.isDisabled}>Отправить
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}

export default Form;