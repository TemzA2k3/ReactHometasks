import React, { useState } from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent/Header";
import Description from "./components/MainComponent/Description/Description";
import Footer from "./components/FooterComponent/Footer";
import {ContextProvider} from "./Context/CreateContext";

const App = () => {
    const [inputValue, setInputValue] = useState({});

    const handleDataChange = (inputValue) => {
        setInputValue(inputValue);
    };

    return (
        <div className="App">
             <ContextProvider onClick={handleDataChange}>
                <HeaderComponent mealsCount={inputValue}/>
                <Description onButtonClick={handleDataChange}/>
             </ContextProvider>
            <Footer/>
        </div>
    );
}

export default App;
