import React, { Component } from 'react';

class HeaderButton extends Component {
    render() {
        const { btnName, activeClass } = this.props;
        const active = activeClass ? "__active" : "";

        return (
            <>
                <button className="food_header__data__block__settings__item">
                    <div className={`food_header__data__block__settings__item__text${active}`}>{btnName}</div>
                </button>
            </>
        );
    }
}

export default HeaderButton;
