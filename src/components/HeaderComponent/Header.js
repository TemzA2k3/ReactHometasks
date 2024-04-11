import React, { Component } from 'react';
import "../HeaderComponent/Header.scss";
import preview from "../../assets/images/preview.svg";
import Basket from "./Basket/Basket";
import HeaderButton from "./HeaderButton/HeaderButton";
import { btnName } from "../../constants/constants";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidUpdate(prevProps) {
        const { mealsCount } = this.props;
        if (mealsCount && mealsCount !== prevProps.mealsCount) {
          this.createMealsData(mealsCount);
        }
    }

    createMealsData(newItem) {
        this.setState(prevState => {
            const isNewItem = prevState.data.find(item => item.inputId === newItem.inputId);
            if (!isNewItem) {
                return { data: [...prevState.data, newItem] };
            } else {
                 const updatedData = this.state.data.map((item, index) => {
                    if(item.inputId === newItem.inputId){
                        return newItem
                    }
                    return item
                 })
                return {data: updatedData}
            }
            return null;
        });
    }


    render() {
        let sum = 0
        this.state.data.forEach((item, index) => {
            console.log(item.inputValue)
            sum += Number(item.inputValue)
        })
        return (
            <header className="food_header">
                <div className="food_header__data">
                    <div className="food_header__data__img">
                        <img src={preview} alt="preview"/>
                    </div>
                    <div className="food_header__data__block">
                        <div className="food_header__data__block__settings">
                            {btnName.map((item, index) => (
                                index === 0 ? <HeaderButton key={index} btnName={item} activeClass={true}/>
                                            : <HeaderButton key={index} btnName={item} activeClass={false}/>
                            ))}
                        </div>
                        <Basket currentAmount={sum}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
