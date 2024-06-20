import { FC } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { IRootState } from "../../store/store";


export const PrivateRoute: FC = () => {
    const isLogged :boolean = useSelector((state: IRootState) => state.user.isLogged)

    return (
        <>
            {isLogged ? <Outlet /> : <Navigate to="/login" />}
        </>
    );
};
