import { FC } from "react";

import { IBasketTypes } from "../../index";

import purchases from "../../../assets/images/purchases.svg";


export const Basket: FC<IBasketTypes> = ({ currentAmount }) => {
    return (
        <div className="food_header__data__block__settings__img">
            <img src={purchases} alt="purchases" />
            <div className="food_header__data__block__settings__img__counter">
                <div className="food_header__data__block__settings__img__counter__text">{currentAmount ? currentAmount : "0"}</div>
            </div>
        </div>
    );
}
