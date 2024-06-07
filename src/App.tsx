import { Routes, Route } from "react-router-dom";

import {Header, Description, Footer, LoginPage, WelcomeBlock } from "./components";

import './App.css';


export const App = () => {

    return (
        <div className="App">
             <Header />
                 <Routes>
                     <Route path="/" element={<WelcomeBlock/>}/>
                     <Route path="/register" element={<LoginPage type="Register" label="Register"/>}/>
                     <Route path="/login" element={<LoginPage type="Login" label="Log In"/>}/>
                     <Route path="/menu" element={<Description />}/>
                 </Routes>
             <Footer/>
        </div>
    );
}
