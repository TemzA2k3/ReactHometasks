import React from 'react';

const Nutrition = ({ text, isActive, onClick }) => {

    const activeClass = isActive === text ? "__active" : "";

    return (
        <button onClick={onClick} className={`main__content__container__buttons__elem${activeClass}`}>
            <div className="main__content__container__buttons__elem__text">
                {text}
            </div>
        </button>
    );
}

export default Nutrition;
