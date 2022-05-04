import React, { useRef } from "react";

export default function Navbar({ logo }) {
  const dropdownRef = useRef(null);

  return (
    <>
      <div className="navbar-wrapper">
        <img src={logo} alt="Logo" className="logo" />
        <div className="navbar-options-wrapper">
          <div className="navbar-option">
            <h2>Learn More</h2>
          </div>
          <div className="navbar-option">
            <h2>Contact</h2>
          </div>
          <div className="join-button">
            <h2>Get Started</h2>
          </div>
          <div
            className="dropdown-toggle"
            onClick={() => {
              if (dropdownRef.current.style.display != "none") {
                dropdownRef.current.style.display = "none";
              } else {
                dropdownRef.current.style.display = "flex";
              }
            }}
          >
            ≡
          </div>
        </div>
      </div>
      <div className="dropdown-wrapper" ref={dropdownRef}>
        <div className="dropdown-option">Learn More</div>
        <div className="dropdown-option">Contact</div>
        <div className="dropdown-option">Get Started</div>
      </div>
    </>
  );
}
