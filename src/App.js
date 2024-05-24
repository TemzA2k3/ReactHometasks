import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/Header";
import Description from "./components/MainComponent/Description/Description";
import Footer from "./components/FooterComponent/Footer";
import LoginPage from "./components/MainComponent/LoginPage/LoginPage";
import WelcomeBlock from "./components/MainComponent/WelcomeBlock/WelcomeBlock";
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
                 <Routes>
                     <Route path="/register" element={<LoginPage type="Register" label="Register"/>}/>
                     <Route path="/login" element={<LoginPage type="Login" label="Log In"/>}/>
                     <Route path="/menu" element={<Description onButtonClick={handleDataChange}/>}/>
                 </Routes>
                 <Footer/>
             </ContextProvider>
        </div>
    );
}

export default App;
