import { useState, useEffect, FC } from 'react';
import { useSelector } from "react-redux";

import { Basket, HeaderButton, MealsCountParams, Meal } from "../index";
import { btnName, BtnNameKeys } from "../../constants/constants";
import { IRootState } from "../../store/store";

import "../HeaderComponent/Header.scss";

import preview from "../../assets/images/preview.svg";


export const Header: FC = () => {
    const [data, setData] = useState({});
    const [resultCount, setResultCount] = useState(0)
    const [active, setActive] = useState('Home')
    const mealsCount: MealsCountParams | {} = useSelector((state: IRootState) => state.addDataToBasket)

    useEffect(() => {
        if (Object.keys(mealsCount).length) {
            setData(mealsCount)
        }
    }, [mealsCount]);

    useEffect(() => {
        let sum = 0
        Object.values(data).forEach(item => {
            const meal = item as Meal
            sum += meal.inputValue
        });
        setResultCount(sum)
    }, [data])

    const handleClick = (name: string) => {
        setActive(name)
    }

    return (
        <header className="food_header">
            <div className="food_header__data">
                <div className="food_header__data__img">
                    <img src={preview} alt="preview"/>
                </div>
                <div className="food_header__data__block">
                    <div className="food_header__data__block__settings">
                        {Object.keys(btnName).map((item, index) => {
                            const key = item as BtnNameKeys;
                            return (
                                <HeaderButton
                                    key={index}
                                    btnName={key}
                                    click={() => handleClick(key)}
                                    link={btnName[key]}
                                    isActive={key === active}
                                />
                            );
                        })}
                    </div>
                    <Basket currentAmount={resultCount} />
                </div>
            </div>
        </header>
    );
}
