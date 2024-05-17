import {useState, useEffect, FC} from 'react';
import "../HeaderComponent/Header.scss";
import preview from "../../assets/images/preview.svg";
import Basket from "./Basket/Basket";
import HeaderButton from "./HeaderButton/HeaderButton";
import { IHeaderTypes, MealsCountParams } from "./headerTypes"
import { btnName } from "../../constants/constants";


const Header: FC<IHeaderTypes> = ({ mealsCount }) => {
    const [data, setData] = useState<Array<any>>([]);
    const [resultCount, setResultCount] = useState(0)

    useEffect(() => {
        if (Object.keys(mealsCount).length) {
            createMealsData(mealsCount);
        }
    }, [mealsCount]);

    useEffect(() => {
        let sum = 0
        data.forEach(item => {
            sum += Number(item.inputValue)
        });
        setResultCount(sum)
    }, [data])

    const createMealsData = (newItem: MealsCountParams) => {
        setData((prevData) => {
            const isNewItem = prevData.find(item => item.inputId === newItem.inputId);
            if (!isNewItem) {
                return [...prevData, newItem];
            } else {
                return prevData.map(item => (item.inputId === newItem.inputId ? newItem : item));
            }
        });
    };


    return (
        <header className="food_header">
            <div className="food_header__data">
                <div className="food_header__data__img">
                    <img src={preview} alt="preview"/>
                </div>
                <div className="food_header__data__block">
                    <div className="food_header__data__block__settings">
                        {btnName.map((item, index) => (
                            <HeaderButton key={index} btnName={item} activeClass={index === 0} />
                        ))}
                    </div>
                    <Basket currentAmount={resultCount} />
                </div>
            </div>
        </header>
    );
}

export default Header;
