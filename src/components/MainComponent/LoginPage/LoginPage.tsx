import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

import { setError, setUser, clearError } from "../../../redusers/userSlice/userSlice";
import { auth } from "../../../firebase/firebase";
import { Nutrition, ILoginPageTypes } from "../../index";
import { IRootState } from "../../../store/store"

import "./LoginPage.scss";


export const LoginPage: FC<ILoginPageTypes> = ({ type, label }) => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();
    const error = useSelector((state: IRootState) => state.user.error);

    const register = () => {
        createUserWithEmailAndPassword(auth, userName, password)
            .then((user: UserCredential) => {
                dispatch(clearError());
                dispatch(setUser({ email: userName, uid: user.user.uid }));
                setUserName("");
                setPassword("");
            })
            .catch((error: Error) => {
                dispatch(setError(error.message));
            });
    };

    const login = () => {
        signInWithEmailAndPassword(auth, userName, password)
            .then((user: UserCredential) => {
                dispatch(clearError());
                dispatch(setUser({ email: userName, uid: user.user.uid }));
                setUserName("");
                setPassword("");
            })
            .catch(() => {
                dispatch(setError("Invalid email or password")); // Сохраняем ошибку в сторе
            });
    };

    return (
        <section className="login">
            <div className="login-content">
                <h1 className="login-content__label">{label}</h1>
                <div className="login__block">
                    <div className="login__block-name">
                        <h2 className="login__block-text">Email</h2>
                        <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className={`login__block-input ${error ? "login__block-input--error" : ""}`}
                            placeholder="Enter your email"
                            type="text"
                        />
                    </div>
                    <div className="login__block-password">
                        <h2 className="login__block-text">Password</h2>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`login__block-input ${error ? "login__block-input--error" : ""}`}
                            placeholder="Enter your password"
                            type="password"
                        />
                    </div>
                    {type === "Login" ? (
                        <>
                            <div className="login__buttons">
                                <Nutrition text="Submit" isActive="Submit" onClick={login} />
                                <Nutrition text="Cancel" isActive="" />
                            </div>
                            <div className="login__register">
                                Don't have an account?{" "}
                                <Link to="/register" className="login__register--active">
                                    Register
                                </Link>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                        </>
                    ) : (
                        <div className="login__buttons">
                            <Nutrition text={label} isActive={label} onClick={register} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
