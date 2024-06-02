import { useState } from 'react';
import './App.css';
import { MealsCountParams } from "./components";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/Header";
import Description from "./components/MainComponent/Description/Description";
import Footer from "./components/FooterComponent/Footer";
import LoginPage from "./components/MainComponent/LoginPage/LoginPage";
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
                 <Routes>
                     <Route path="/" element={<WelcomeBlock/>}/>
                     <Route path="/register" element={<LoginPage type="Register" label="Register"/>}/>
                     <Route path="/login" element={<LoginPage type="Login" label="Log In"/>}/>
                     <Route path="/menu" element={<Description onClick={handleDataChange}/>}/>
                 </Routes>
                 <Footer/>
             </ContextProvider>
        </div>
    );
}

export default App;
