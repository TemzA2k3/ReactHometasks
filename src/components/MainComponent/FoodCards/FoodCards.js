import "./FoodCards.scss"

const FoodCards = ({url, description, name, price}) => {
    return(
        <>
            <div className="card">
                <div className="card__image">
                    <img src={url} alt="burger"/>
                </div>
                <div className="card__image__description">
                    <div className="card__image__description__header">
                        <h2 className="card__image__description__header__name">{name}</h2>
                        <div className="card__image__description__header__price">$ {price} USD</div>
                    </div>
                    <h3 className="card__image__description__compound">{description}</h3>
                    <div className="card__image__description__footer">
                        <div className="card__image__description__footer__price">
                            {/*Добавил value атрибут в инпут просто для того чтоб было как в фигме,
                             в консоли падает ошиюка что нету OnChange обработчика,
                              \когда надо будет его сделать, то пофикшу ошибку*/}
                            <input className="card__image__description__footer__price__input" value="1"/>
                        </div>
                        <button className="card__image__description__footer__btn">
                            <div className="card__image__description__footer__btn__text">Add to card</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCards