import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling/navbar.scss";
const routes = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Selection Sort",
        path: "/selection",
    },
    {
        title: "Bubble Sort",
        path: "/bubble",
    },
];
function NavBar() {
    const { pathname } = useLocation();
    return (
        <div className="navbar">
            {routes.map((route) => (
                <Link
                    to={route.path}
                    key={route.path}
                    className={pathname === route.path ? "active" : ""}
                >
                    {route.title}
                </Link>
            ))}
        </div>
    );
}

export default NavBar;
