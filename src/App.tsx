import { Routes, Route } from "react-router-dom";

import { Header, Description, Footer, LoginPage, WelcomeBlock, Order, PrivateRoute } from "./components";

import './App.css';


export const App = () => {

    return (
        <div className="App">
             <Header />
                 <Routes>
                     <Route path="/" element={<WelcomeBlock />}/>
                     <Route path="/register" element={<LoginPage type="Register" label="Register"/>}/>
                     <Route path="/login" element={<LoginPage type="Login" label="Log In"/>}/>
                     <Route path="/menu" element={<Description />}/>
                     <Route element={<PrivateRoute />}>
                         <Route path="/order" element={<Order />}/>
                     </Route>
                 </Routes>
             <Footer/>
        </div>
    );
}
