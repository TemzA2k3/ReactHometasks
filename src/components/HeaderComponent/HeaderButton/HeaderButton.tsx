import { FC } from 'react';
import { Link } from "react-router-dom";

import { IHeaderButtonTypes } from "../../index"


export const HeaderButton: FC<IHeaderButtonTypes> = ({ btnName, click, isActive, link }) => {
    const active = isActive  ? "__active" : "";

    return (
        <button className="food_header__data__block__settings__item">
            <Link to={link}
                  onClick={() => click(btnName)}
                  className={`food_header__data__block__settings__item__text${active}`}>{btnName}</Link>
        </button>
    );
}
