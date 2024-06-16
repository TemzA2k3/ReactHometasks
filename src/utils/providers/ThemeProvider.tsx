import { FC, useEffect, createContext } from "react"

import { useLocalStorage, IThemeProviderProps, ThemeContextType } from "../../components/index"


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("Theme", getCurrentTheme())

    useEffect(() => {
        if (theme === "Dark"){
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [theme]);

    function getCurrentTheme(){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'Dark';
        } else {
            return 'Light';
        }
    }

    return (
        // @ts-ignore
        <ThemeContext.Provider value={[theme, setTheme]}>
            { children }
        </ThemeContext.Provider>
    )
}
