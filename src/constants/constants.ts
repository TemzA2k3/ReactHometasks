import { IFooterLinksTypes, IFooterImagesTypes } from "../components";

import instagram from "../assets/images/instagram.png"
import twitter from "../assets/images/twitter.png"
import youTube from "../assets/images/youTube.png"

const buttonsName: string[] = ["Dessert", "Dinner", "Breakfast"]

const linksObj: IFooterLinksTypes[] = [
    {
        "name": "Company",
        "values": ["Home", "Order", "FAQ", "Contact"]
    },
    {
        "name": "Template",
        "values": ["Style Guide", "Changelog", "Licence", "Webflow University"]
    },
    {
        "name": "Flowbase",
        "values": ["More Cloneables"]
    }
]

const text: string = "Takeaway & Delivery template for small - medium businesses."

const icons: IFooterImagesTypes[] = [
    {
        "icon": instagram,
        "width": "18px",
        "height": "18px",
    },
    {
        "icon": twitter,
        "width": "18px",
        "height": "15px",
    },
    {
        "icon": youTube,
        "width": "18px",
        "height": "13px",
    }
]

export type BtnNameKeys = "Home" | "Menu" | "Company" | "Login";

export const btnName: Record<BtnNameKeys, string> = {
    "Home": "/",
    "Menu": "/menu",
    "Company": "",
    "Login": "/login",
};


export { buttonsName, linksObj, text, icons }
