import { FC, useState, useContext } from "react";
import { ThemeContext } from "../../../utils/providers/ThemeProvider";
import { ThemeContextType } from "../../index"

import "./HeaderThemeSwitcher.scss"

import sun from "../../../assets/images/sun.svg"
import moon from "../../../assets/images/moon.svg"


export const HeaderThemeSwitcher: FC = () => {
    // @ts-ignore
    const [theme, setTheme] = useContext<ThemeContextType>(ThemeContext)
    const [image, setImage] = useState(theme === "Light" ? moon : sun)

    const changeTheme = () => {
        const newTheme = theme === "Light" ? "Dark" : "Light";
        console.log(newTheme)
        setTheme(newTheme);
        setImage(newTheme === "Light" ? moon : sun);
    }

    return (
        <div onClick={changeTheme} className="switcher">
            <img src={image} alt="switcher" />
        </div>
    )
}
