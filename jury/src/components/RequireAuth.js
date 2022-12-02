import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth.roles)
    console.log(auth.user)
    console.log(auth.user)
    const roles = localStorage.getItem("roles")

    return (
        roles === allowedRoles[0]
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
                // ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                // : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;