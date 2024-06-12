// type MealsCountParams = {
//     inputValue: number;
//     inputId: string;
// }
//
// export type { MealsCountParams }

type Meal = {
    inputValue: number;
    inputId: number;
}

type MealsCountParams = {
    [key: string]: Meal;
}

export type { MealsCountParams, Meal }

