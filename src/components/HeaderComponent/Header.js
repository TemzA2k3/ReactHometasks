import "../HeaderComponent/Header.scss"

import preview from "../../assets/images/preview.svg"
import purchases from "../../assets/images/purchases.svg"

import HeaderButton from "./HeaderButton/HeaderButton";

import {btnName} from "../../constants/constants";


const Header = () => {
    return(
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
                    <div className="food_header__data__block__settings__img">
                        <img src={purchases} alt="purchases"/>
                        <div className="food_header__data__block__settings__img__counter">
                            <div className="food_header__data__block__settings__img__counter__text">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header