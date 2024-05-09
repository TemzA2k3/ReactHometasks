import React from 'react';
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../Firebase/firebase";
import "./LoginPage.scss"
import Nutrition from "../Nutrition/Nutrition";
import {Link} from "react-router-dom";

const LoginPage = ({ type, label }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const register = () => {
        createUserWithEmailAndPassword(auth, userName, password)
            .then(user => {
                setError("")
                setUserName("")
                setPassword("")
            })
            .catch(error => {
                setError(error)
            })
    }

    const login = () => {
        signInWithEmailAndPassword(auth, userName, password)
        .then(user => {
                setError("")
                setUserName("")
                setPassword("")
            })
            .catch(error => {
                setError("Invalid email or password")
            })
    }

    return (
        <section className="login">
            <div className="login-content">
                <h1 className="login-content__label">{label}</h1>
                <div className="login__block">
                    <div className="login__block-name">
                        <h2 className="login__block-text">Email</h2>
                        <input value={userName}
                               onChange={(e) => setUserName(e.target.value)}
                               className={`login__block-input ${error ? "login__block-input--error" : ""}`}
                               placeholder="Enter your email"
                               type="text"/>
                    </div>
                    <div className="login__block-password">
                        <h2 className="login__block-text">Password</h2>
                        <input value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className={`login__block-input ${error ? "login__block-input--error" : ""}`}
                               placeholder="Enter your password"
                               type="password"/>
                    </div>
                    {type === "Login" ?
                        <>
                            <div className="login__buttons">
                                <Nutrition text="Submit" isActive="Submit" onClick={login}/>
                                <Nutrition text="Cancel" isActive=""/>
                            </div>
                            <div className="login__register">
                                Don't have an account? <Link to="/register"
                                                             className="login__register--active">Register</Link>
                            </div>
                            {error ? <p className="error-message">{error}</p> : ""}
                        </>
                        :
                        <div className="login__buttons">
                            <Nutrition text={label} isActive={label} onClick={register}/>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
