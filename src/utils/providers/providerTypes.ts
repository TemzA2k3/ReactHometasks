import { ReactNode, Dispatch, SetStateAction } from "react";

type ITheme = "Light" | "Dark"

type ThemeContextType = [ITheme, Dispatch<SetStateAction<ITheme>>];

interface IThemeProviderProps {
    children: ReactNode;
}

export type { IThemeProviderProps, ThemeContextType }
