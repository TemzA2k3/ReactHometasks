interface IBasketTypes{
    currentAmount: number | undefined
}

interface IBasketData {
    meal: string;
    img: string;
    price: number;
    amount: string;
    onDelete: () => void;
}

export type { IBasketTypes, IBasketData }
