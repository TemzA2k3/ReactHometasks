import React from "react";
import purchases from "../../../assets/images/purchases.svg";

const Basket = ({ currentAmount }) => {
    return (
        <div className="food_header__data__block__settings__img">
            <img src={purchases} alt="purchases" />
            <div className="food_header__data__block__settings__img__counter">
                <div className="food_header__data__block__settings__img__counter__text">{currentAmount ? currentAmount : "0"}</div>
            </div>
        </div>
    );
}

export default Basket;
