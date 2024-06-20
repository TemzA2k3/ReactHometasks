import { FC } from "react"
import { IBasketData } from "../../../index";

import "./OrderCard.scss"


export const OrderCard: FC<IBasketData> = ({ img, price, meal, amount, onDelete }) => {
    return(
        <div className="order-card">
            <div className="order-card__meal">
                <div className="order-card__img">
                    <img src={img} alt="Meal-Image"/>
                </div>
                <p className="order-card__meal-name">{meal}</p>
            </div>
            <div className="order-card__info">
                <div className="order-card__price">$ {price} USD</div>
                <div className="order-card__additional">
                    <input className="order-card__amount disabled" defaultValue={amount} readOnly={true} />
                    <button onClick={onDelete} className="order-card__delete">
                        <div className="order-card__delete-text">X</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
