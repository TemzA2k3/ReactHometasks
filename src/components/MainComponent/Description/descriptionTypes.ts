interface IDescriptionTypes{
    id: string;
    meal: string;
    category: string;
    area: string;
    instructions: string;
    img: string;
    price: number;
    amount?: number | string;
}

export type { IDescriptionTypes }
