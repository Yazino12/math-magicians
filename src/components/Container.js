import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import './Style.css';

function Container() {
  return (
    <div className="container">
      <nav>
        <h1>Math Magicians</h1>
        <ul className="link-container">
          <li>
            <NavLink to="/" activeclassname="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/calculator" activeclassname="active-link">
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/quote" activeclassname="active-link">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default Container;
