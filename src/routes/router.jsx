import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const HeaderFooterLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderFooterLayout />,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/Cards",
                element: <h1>Appartements</h1>
            },
            {
                path: "/About",
                element: <h1>A propos</h1>
            },
            {
                path: "/Contact",
                element: <h1>Contact</h1>
            }
        ]
    },
]);