import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

export const routes = createBrowserRouter([
    {
        path: "/login",
        element: React.createElement(Login)
    },
    {
        path: "/register",
        element: React.createElement(Register)
    }
]);