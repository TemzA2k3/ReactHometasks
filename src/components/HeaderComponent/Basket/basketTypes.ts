interface IBasketTypes{
    currentAmount: number | undefined
}

interface IBasketData {
    meal: string;
    img: string;
    price: number;
    amount: number | string;
    onDelete: () => void;
}

export type { IBasketTypes, IBasketData }
