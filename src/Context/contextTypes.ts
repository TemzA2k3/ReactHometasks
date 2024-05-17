import {ReactNode} from "react";
import {MealsCountParams} from "../components";

interface IContextTypes{
    onClick: (data: MealsCountParams) => void;
}

interface IProviderTypes{
    children: ReactNode
    onClick: (data: MealsCountParams) => void;
}

export type { IContextTypes, IProviderTypes }
