import React, {createContext} from "react";

export const Context = createContext(null)

export const ContextProvider = ({children, onClick}) => {
    return(
        <Context.Provider value={{onClick}}>
            {children}
        </Context.Provider>
    )
}