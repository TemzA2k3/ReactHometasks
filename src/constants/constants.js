import burger_1 from "../assets/images/burger_1.png"
import burger_2 from "../assets/images/burger_2.png"
import burger_3 from "../assets/images/burger_3.png"
import burger_4 from "../assets/images/burger_4.png"
import burger_5 from "../assets/images/burger_5.png"
import burger_6 from "../assets/images/burger_6.png"
import instagram from "../assets/images/instagram.png"
import twitter from "../assets/images/twitter.png"
import youTube from "../assets/images/youTube.png"


const buttonsName = ["Dessert", "Dinner", "Breakfast"]

// такой формат объекта похож на тот который приходит с апи, поэтому сделал так
const foodData= {
    1:  {
        "url": burger_1,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "name": "Burger Dreams",
        "price": "9.20"
        },
    2:  {
        "url": burger_2,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "name": "Burger Waldo",
        "price": "10.00"
        },
    3:  {
        "url": burger_3,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "name": "Burger Cali",
        "price": "8.00"
        },
    4:  {
        "url": burger_4,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "name": "Burger Bacon Buddy",
        "price": "9.99"
        },
    5:  {
        "url": burger_5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "name": "Burger Spicy",
        "price": "9.20"
        },
    6:  {
        "url": burger_6,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "name": "Burger Classic",
        "price": "8.00"
        },
}

const linksObj = {
    1: {
        "name": "Company",
        "values": ["Home", "Order", "FAQ", "Contact"]
    },
    2: {
        "name": "Template",
        "values": ["Style Guide", "Changelog", "Licence", "Webflow University"]
    },
    3: {
        "name": "Flowbase",
        "values": ["More Cloneables"]
    }
}

const text = "Takeaway & Delivery template for small - medium businesses."

const icons = {
    1: {
        "icon": instagram,
        "width": "18px",
        "height": "18px",
    },
    2: {
        "icon": twitter,
        "width": "18px",
        "height": "15px",
    },
    3: {
        "icon": youTube,
        "width": "18px",
        "height": "13px",
    }
}
const btnName =  {
    "Home": "/",
    "Menu": "/menu",
    "Company": "",
    "Login": "/login",
}

export {buttonsName, foodData, btnName, linksObj, text, icons}
