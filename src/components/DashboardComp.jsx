import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import {
//   HomeDashComp,
//   LoginComp,
//   NavbarDashComp,
//   SidebarDashComp,
// } from "../components";
// import { useSelector } from "react-redux";
// import { Row, Col, Accordion } from "react-bootstrap";

// assets
// import { LogoDashboard } from "../assets";

// style
import "../styles/Dashboard.css"; // Dashboard.css
import { HiChevronDown, HiDatabase } from "react-icons/hi";

const DashboardView = () => {
  // const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [elActive, setElActive] = useState(false);
  // console.log(auth);

  const handleClick = (el) => {
    setIsOpen(!isOpen);
    const parent = el.target.parentElement;
    const children = parent.children;
    setElActive(parent);
    console.log(elActive.className);

    closeAllAccordions(elActive);

    togglefunction(parent, children);
  };

  const closeAllAccordions = (el) => {
    setIsOpen(false);
    // close all accordions
    const accordions = document.getElementsByClassName("accordion");
    // console.log(accordions.accordion.children);
    const accordionChildren = accordions.accordion.children;
    for (let i = 0; i < accordionChildren.length; i++) {
      // console.log(accordionChildren[i].className);
      // console.log(accordionChildren[i].children[1]);
      // if (accordionChildren[i].className !== el.className) {
      accordionChildren[i].classList.remove("open");
      accordionChildren[i].children[1].classList.add("collapsed");
      // }
    }
  };

  const togglefunction = (parent, children) => {
    parent.classList.toggle("open");
    children[1].classList.toggle("collapsed");
  };

  return (
    <div>
      <div className="sidebar">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <ul id="accordion" className="accordion">
          <li>
            <div className="link" onClick={handleClick}>
              <span>
                <HiDatabase />
              </span>
              Web Design
              <span className="icon-chevrondown">
                <HiChevronDown />
              </span>
            </div>
            <ul className="submenu collapsed">
              <li>
                <a href="#">Photoshop</a>
              </li>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="link" onClick={handleClick}>
              <span>
                <HiDatabase />
              </span>
              Coding
              <span className="icon-chevrondown">
                <HiChevronDown />
              </span>
            </div>
            <ul className="submenu collapsed">
              <li>
                <a href="#">Javascript</a>
              </li>
              <li>
                <a href="#">jQuery</a>
              </li>
              <li>
                <a href="#">Ruby</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="link" onClick={handleClick}>
              <span>
                <HiDatabase />
              </span>
              Devices
              <span className="icon-chevrondown">
                <HiChevronDown />
              </span>
            </div>
            <ul className="submenu collapsed">
              <li>
                <a href="#">Tablet</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Desktop</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="link" onClick={handleClick}>
              <span>
                <HiDatabase />
              </span>
              Global
              <span className="icon-chevrondown">
                <HiChevronDown />
              </span>
            </div>
            <ul className="submenu collapsed">
              <li>
                <a href="#">Google</a>
              </li>
              <li>
                <a href="#">Bing</a>
              </li>
              <li>
                <a href="#">Yahoo</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content">
        <h2>Responsive Sidebar Example</h2>
        <p>
          This example use media queries to transform the sidebar to a top
          navigation bar when the screen size is 700px or less.
        </p>
        <p>
          We have also added a media query for screens that are 400px or less,
          which will vertically stack and center the navigation links.
        </p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
    </div>
  );
};

export default DashboardView;
