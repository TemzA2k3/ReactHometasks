import { useState } from 'react';
import './App.css';
import { MealsCountParams } from "./components";

import HeaderComponent from "./components/HeaderComponent/Header";
import Description from "./components/MainComponent/Description/Description";
import Footer from "./components/FooterComponent/Footer";
import WelcomeBlock from "./components/MainComponent/WelcomeBlock/WelcomeBlock";
import {ContextProvider} from "./Context/CreateContext";

const App = () => {
    const [inputValue, setInputValue] = useState<MealsCountParams>({ inputId: '', inputValue: ''});


    const handleDataChange = (inputValue: MealsCountParams) => {
        setInputValue(inputValue);
    };

    return (
        <div className="App">
             <ContextProvider onClick={handleDataChange}>
                <HeaderComponent mealsCount={inputValue}/>
                 {/*<WelcomeBlock/>*/}
                <Description onClick={handleDataChange}/>
             </ContextProvider>
            <Footer/>
        </div>
    );
}

export default App;
