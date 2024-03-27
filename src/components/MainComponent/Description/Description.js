import "./Description.scss"

import {buttonsName, foodData} from "../../../constants/constants"

import Nutrition from "../Nutrition/Nutrition";
import FoodCards from "../FoodCards/FoodCards";

const Description = () => {
    const mouseHover = () => {
        document.querySelector('.hint').classList.remove('hidden')
    }
    const mouseLeave = () => {
        document.querySelector('.hint').classList.add('hidden')
    }

    return(
        <main className="main">
            <div className="main__content">
                <section className="main__content__header">
                    <div className="main__content__header__name">Browse our menu</div>
                    <div className="main__content__header__description">
                        Use our menu to place an order online, or<span className="main__content__header__description__phone"
                                                                       onMouseEnter={mouseHover}
                                                                       onMouseLeave={mouseLeave}> phone</span> our store to place a pickup order. Fast and fresh food.
                        <div className="hint hidden">
                            <div className="hint__text">+370 123 45 67</div>
                        </div>
                    </div>
                </section>
                <div className="main__content__container">
                    <div className="main__content__container__buttons">
                        {/*Загушка чтоб кравиво выглядело, переделаю когда будем работать с нажатиями на эти кнопки*/}
                        {buttonsName.map((item, index) => (
                            index === 0 ? <Nutrition key={index} text={item} isActive={true}/>
                                        : <Nutrition key={index} text={item} isActive={false}/>

                        ))}
                    </div>
                    <div className="main__content__container__items">
                        {Object.keys(foodData).map((item, index) => (
                            <FoodCards key={index}
                                       url={foodData[item].url}
                                       description={foodData[item].description}
                                       name={foodData[item].name}
                                       price={foodData[item].price}/>
                        ))}
                    </div>
                    <button className="main__content__container__seemore">
                        <div className="main__content__container__seemore__text">See more</div>
                    </button>
                </div>
            </div>
        </main>
    )
}


export default Description