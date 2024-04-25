import React, { Component } from 'react';
import "./FoodCards.scss";

class FoodCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "0",
            inputId: "",
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        const inputId = this.props.id;

        this.setState({ inputValue, inputId });
    };

    handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/\d/.test(keyValue)) {
            event.preventDefault();
        }
    };

    handleClick = () => {
        const { inputValue, inputId } = this.state;
        this.props.onButtonClick(inputValue, inputId);
    };

    render() {
        const { url, description, name, price, defaultValue } = this.props;
        return (
            <div className="card">
                <div className="card__image">
                    <img src={url} alt="burger" className="burger_img"/>
                </div>
                <div className="card__image__description">
                    <div className="card__image__description__header">
                        <h2 className="card__image__description__header__name">{name}</h2>
                        <div className="card__image__description__header__price">$ {price} USD</div>
                    </div>
                    <h3 className="card__image__description__compound">{description}</h3>
                    <div className="card__image__description__footer">
                        <div className="card__image__description__footer__price">
                            {/* Добавил value атрибут в инпут просто для того чтоб было как в фигме,
                             в консоли падает ошибка, что нету OnChange обработчика,
                             когда надо будет его сделать, то пофикшу ошибку */}
                            <input className="card__image__description__footer__price__input" type="text"
                                   value={this.state.inputValue}
                                   onChange={(event) => this.handleChange(event)}
                                   onKeyPress={this.handleKeyPress}/>
                        </div>
                        <button onClick={this.handleClick} className="card__image__description__footer__btn">
                            <div className="card__image__description__footer__btn__text">Add to card</div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodCard;
