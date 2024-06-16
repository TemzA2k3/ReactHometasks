type Meal = {
    inputValue: number | string;
    inputId: number | string;
}

type MealsCountParams = {
    [key: string]: Meal;
}

export type { MealsCountParams, Meal }

