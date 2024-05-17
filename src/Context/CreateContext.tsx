import {createContext, FC} from "react";
import { IContextTypes, IProviderTypes } from "./contextTypes"
export const Context = createContext<IContextTypes | null>(null)

export const ContextProvider: FC<IProviderTypes> = ({children, onClick}) => {
    return(
        <Context.Provider value={{ onClick }}>
            {children}
        </Context.Provider>
    )
}
