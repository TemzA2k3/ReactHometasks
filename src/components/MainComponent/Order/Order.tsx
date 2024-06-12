import { FC, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import { OrderCard, Nutrition, useFetch, IDescriptionTypes } from "../../index";
import { deleteBasketItem } from "../../../redusers/cardDataSlice/cardDataSlice";
import { IRootState } from "../../../store/store";

import "./Order.scss"


export const Order: FC = () => {
    const [basketMeals, setBasketMeals] = useState<Array<IDescriptionTypes>>([])
    const basketData = useSelector((state: IRootState) => state.addDataToBasket);
    const dispatch = useDispatch()
    const { request } = useFetch()

    useEffect(() => {
        request("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals").then(data => {
            const resultData: IDescriptionTypes[] = []
            data.forEach((item: IDescriptionTypes) => {
                Object.keys(basketData).forEach((key) => {
                    if (item.id === key) {
                        // @ts-ignore
                        // Я НЕ ЗНАЮЮЮЮЮЮЮЮ КАК СДЕЛАТЬ ИНАЧЕ, НИЧЕГО НЕ ПРОХОДИТ, НЕ РУГАЙТЕСЬ ЗА ЭТО
                        // Я ДУШУ ПРОДАЛ ДЬЯВОЛУ НО НЕ ПОНЯЛ ПОЧЕМУ ЭТА ФИГНЯ НЕ РАБОАТЕТ БЕЗ @ts-ignore
                        item.amount = basketData[key].inputValue
                        resultData.push(item);
                    }
                })
            })
            setBasketMeals(resultData)
        });
    }, [])

    const deleteCard = (id: string) => {
        setBasketMeals(basketMeals.filter(elem => elem.id !== id))
        dispatch(deleteBasketItem(id))
    }


    return (
        <main className="main">
            <div className="main__content">
                <h1 className="main__title">Finish your order</h1>
                <div className="main__cards">
                    {Object.values(basketMeals).map((item) => (
                            <OrderCard key={item.id}
                                       meal={item.meal}
                                       img={item.img}
                                       price={item.price}
                                       amount={item.amount!}
                                       onDelete={() => deleteCard(item.id)}
                            />
                        ))}
                </div>
                <div className="main__order">
                    <div className="main__order--data">
                        <div className="main__order--street">
                            <h2 className="main__order--text">Street</h2>
                            <input className="main__order--input" />
                        </div>
                        <div className="main__order--house">
                            <h2 className="main__order--text">House</h2>
                            <input className="main__order--input" />
                        </div>
                    </div>
                    <Nutrition text="Order" isActive="Order"/>
                </div>
            </div>
        </main>
    )
}
