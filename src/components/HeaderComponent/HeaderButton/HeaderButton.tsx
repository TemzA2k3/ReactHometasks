import {FC} from 'react';
import { IHeaderButtonTypes } from "./headerButtonTypes"

const HeaderButton: FC<IHeaderButtonTypes> = ({ btnName, activeClass }) => {
    const active: string = activeClass ? "__active" : "";

    return (
        <button className="food_header__data__block__settings__item">
            <div className={`food_header__data__block__settings__item__text${active}`}>{btnName}</div>
        </button>
    );
}

export default HeaderButton;
