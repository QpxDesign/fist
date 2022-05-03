import React from "react";

export default function Navbar({ logo }) {
  return (
    <div className="navbar-wrapper">
      <img src={logo} alt="Logo" className="logo" />
      <div className="navbar-options-wrapper">
        <div className="navbar-option">
          <h2>Home</h2>
        </div>
        <div className="navbar-option">
          <h2>Contact</h2>
        </div>
        <div className="join-button">
          <h2>Get Started</h2>
        </div>
      </div>
    </div>
  );
}
