import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { DashboardComp } from "../components";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<DashboardComp />} />
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    );
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Link to="/about">About</Link>
            <br />
            <Link to="/contact">Contact</Link>
        </div>
    );
}

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/contact">Contact</Link>
        </div>
    );
}

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
        </div>
    );
}

export default RouterApp;

