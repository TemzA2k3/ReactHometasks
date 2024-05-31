import React, {useState, useEffect, FC} from 'react';
import "./Description.scss";
import { buttonsName } from "../../../constants/constants";
import Nutrition from "../Nutrition/Nutrition";
import FoodCard from "../FoodCards/FoodCard";
import {useFetch} from "../../../hooks/http.hook";
import {IContextTypes, IDescriptionTypes} from "../../index";

const Description: FC<IContextTypes> = () => {
    const [meals, setMeals] = useState<Array<IDescriptionTypes>>([]);
    const [mealsForShow, setMealsForShow] = useState<Array<IDescriptionTypes>>([]);
    const [isShow, setIsShow] = useState<boolean>(true);
    const [buttonName, setButtonName] = useState<string>("Dessert")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {request} = useFetch()

    useEffect(() => {
        setIsLoading(true)
        request("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals").then(data => {
            let filteredData = data.filter((item: IDescriptionTypes) => {
                return item.category === buttonName
            })
            setIsShow(true)
            setMeals(filteredData)
            setMealsForShow(filteredData.slice(0, 6))
            setIsLoading(false)
        });
    }, [buttonName]);

    const handlePagination = () => {
        const isMoreThanSix: boolean = meals.length - mealsForShow.length >= 6;
        const offset: number = meals.length - mealsForShow.length;
        if (offset >= 1) {
            const mealsForShowLength: number = mealsForShow.length;
            let newMealsForShow: IDescriptionTypes[];
            if (isMoreThanSix) {
                newMealsForShow = mealsForShow.concat(meals.slice(mealsForShowLength, mealsForShowLength + 6));
            } else {
                setIsShow(false);
                newMealsForShow = mealsForShow.concat(meals.slice(mealsForShowLength, mealsForShowLength + offset));
            }
            setMealsForShow(newMealsForShow);
        } else {
            setIsShow(false);
        }
    };


    const btnHideClass: string = isShow ? "" : "hidden";

    return (
        <main className="main">
            <div className="main__content">
                <section className="main__content__header">
                    <div className="main__content__header__name">Browse our menu</div>
                    <div className="main__content__header__description">
                        Use our menu to place an order online, or
                        <span
                            className="main__content__header__description__phone"
                        > phone</span> our store to place a pickup order. Fast and fresh food.
                        <div className="main__content__header__description__hint">
                            <div className="main__content__header__description__hint__text">+370 123 45 67</div>
                        </div>
                    </div>
                </section>
                <div className="main__content__container">
                    <div className="main__content__container__buttons">
                        {buttonsName.map((item, index) => (
                            <Nutrition onClick={() => setButtonName(item)}
                                       key={index}
                                       text={item}
                                       isActive={buttonName} />
                        ))}
                    </div>
                    <div className={`main__content__container__items${isLoading ? "__loading" : ""}`}>
                        {mealsForShow.map((item, index) => (
                            <FoodCard
                                key={index}
                                id={item.id}
                                url={item.img}
                                description={item.instructions}
                                name={item.meal}
                                price={item.price}
                                defaultValue={0}
                            />
                        ))}
                    </div>
                    <button onClick={handlePagination} className={`main__content__container__seemore ${btnHideClass}`}>
                        <div className="main__content__container__seemore__text">See more</div>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Description;
