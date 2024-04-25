import React, { Component } from 'react';

class Nutrition extends Component {
    render() {
        const { text, isActive } = this.props;
        const activeClass = isActive ? "__active" : "";

        return (
            <>
                <button className={`main__content__container__buttons__elem${activeClass}`}>
                    <div className="main__content__container__buttons__elem__text">
                        {text}
                    </div>
                </button>
            </>
        );
    }
}

export default Nutrition;
