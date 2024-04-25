import React, { Component } from 'react';
import "./Description.scss";
import "../../../api/api"
import { buttonsName, foodData } from "../../../constants/constants";
import Nutrition from "../Nutrition/Nutrition";
import FoodCard from "../FoodCards/FoodCard";
import {getData} from "../../../api/api";

class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            mealsForShow: [],
            isShow: true
        };
    }

    componentDidMount() {
        getData().then(data => {
             this.setState({ meals: data });
             this.setState({mealsForShow: data.slice(0,6)})
        })
    }

    mouseHover = () => {
        document.querySelector('.hint').classList.remove('hidden');
    };

    mouseLeave = () => {
        document.querySelector('.hint').classList.add('hidden');
    };

    handlePagination = () => {
        const isMoreThanSix =  this.state.meals.length - this.state.mealsForShow.length >= 6;
        const offset = this.state.meals.length - this.state.mealsForShow.length;
        if (offset > 1) {
            const mealsForShowLength = this.state.mealsForShow.length;
            let newMealsForShow;
            if (isMoreThanSix) {
                newMealsForShow = this.state.mealsForShow.concat(this.state.meals.slice(mealsForShowLength, mealsForShowLength + 6));
            } else {
                 this.setState({ isShow: false });
                 newMealsForShow = this.state.mealsForShow.concat(this.state.meals.slice(mealsForShowLength, mealsForShowLength + offset));
            }
            this.setState({ mealsForShow: newMealsForShow });
        } else {
            this.setState({ isShow: false });
        }
    }

    handleButtonClick = (inputValue, inputId) => {
        this.props.onButtonClick(inputValue, inputId);
    };



    render() {
        const btnHideClass = this.state.isShow ? "" : "hidden"
        return (
            <main className="main">
                <div className="main__content">
                    <section className="main__content__header">
                        <div className="main__content__header__name">Browse our menu</div>
                        <div className="main__content__header__description">
                            Use our menu to place an order online, or
                            <span className="main__content__header__description__phone"
                                onMouseEnter={this.mouseHover}
                                onMouseLeave={this.mouseLeave}> phone</span> our store to place a pickup order. Fast and fresh food.
                            <div className="hint hidden">
                                <div className="hint__text">+370 123 45 67</div>
                            </div>
                        </div>
                    </section>
                    <div className="main__content__container">
                        <div className="main__content__container__buttons">
                            {buttonsName.map((item, index) => (
                                index === 0 ? <Nutrition key={index} text={item} isActive={true}/>
                                            : <Nutrition key={index} text={item} isActive={false}/>
                            ))}
                        </div>
                        <div className="main__content__container__items">
                            {this.state.mealsForShow.map((item, index) => (
                                <FoodCard key={index}
                                          id={item.id}
                                          url={item.img}
                                          description={item.instructions}
                                          name={item.meal}
                                          price={item.price}
                                          defaultValue={0}
                                          onButtonClick={this.handleButtonClick}/>
                            ))}


                        </div>
                        <button onClick={this.handlePagination} className={`main__content__container__seemore ${btnHideClass}`}>
                            <div className="main__content__container__seemore__text">See more</div>
                        </button>
                    </div>
                </div>
            </main>
        );
    }
}

export default Description;
