import React, {useState, useContext, FC, ChangeEvent} from 'react';
import "./FoodCards.scss";
import {Context} from "../../../Context/CreateContext";
import { IFoodCardsTypes } from "./foodCardsTypes"

const FoodCard: FC<IFoodCardsTypes> = ({ id, url, description, name, price }) => {
    const [inputValue, setInputValue] = useState("0");
    const [inputId, setInputId] = useState("");
    const context = useContext(Context)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
        setInputId(id);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/\d/.test(keyValue)) {
            event.preventDefault();
        }
    };

    const handleClick = () => {
        context!.onClick({inputValue, inputId});
    };

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
                        <input
                            className="card__image__description__footer__price__input"
                            type="text"
                            value={inputValue}
                            onChange={(event) => handleChange(event)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    <button onClick={handleClick} className="card__image__description__footer__btn">
                        <div className="card__image__description__footer__btn__text">Add to card</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
