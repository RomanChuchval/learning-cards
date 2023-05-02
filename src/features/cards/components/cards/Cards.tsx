import React from "react";
import { Outlet } from "react-router-dom";

export const Cards = () => {
    return (
        <div>
            <h1>Cards</h1>
            <Outlet />
        </div>
    );
};
