import { useState, FC, ChangeEvent } from 'react';
import { useDispatch } from "react-redux";
import { setBasketData } from "../../../redusers/cardDataSlice/cardDataSlice";

import { IFoodCardsTypes } from "./foodCardsTypes"

import "./FoodCards.scss";


export const FoodCard: FC<IFoodCardsTypes> = ({ id, url, description, name, price }) => {
    const [inputValue, setInputValue] = useState<number>(0);
    const [inputId, setInputId] = useState<number>();
    const dispatch = useDispatch()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setInputValue(Number(inputValue));
        setInputId(Number(id));
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/\d/.test(keyValue)) {
            event.preventDefault();
        }
    };

    const handleClick = () => {
        // dispatch(setBasketData({inputValue, inputId}));
        const payload = {
        [Number(inputId)]: { inputValue, inputId }
    };
    dispatch(setBasketData(payload));
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
