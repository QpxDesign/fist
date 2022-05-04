import React, { useRef, useState, useEffect } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { RiPinDistanceFill } from "react-icons/ri";
import {
  BsFillPeopleFill,
  BsCalendarMinusFill,
  BsThreeDots,
} from "react-icons/bs";
export default function Navbar({ logo }) {
  const [ActiveFilterIndex, setActiveFilterIndex] = useState(-1);
  function toggleActiveFilterIndex(index) {
    if (ActiveFilterIndex === index) {
      setActiveFilterIndex(-1);
    } else setActiveFilterIndex(index);
  }
  function setActiveFilter(index) {
    // remove active class from all elements
    // set active element to be "active" class on click
    var newClassName = "parameters-option ";
    if (index === ActiveFilterIndex) {
      return newClassName + "active";
    }
    return newClassName;
  }
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="header-wrapper">
        <div className="searchbar-wrapper">
          <button className="location-button">
            <FaLocationArrow size="1.7em" />
          </button>
          <input className="searchbar" />
          <button className="searchbutton">
            <FaSearch size="1.7em" color="white" />
          </button>
        </div>
        <div className="parameters-wrapper">
          <div
            className={setActiveFilter(0)}
            onClick={() => toggleActiveFilterIndex(0)}
          >
            <GoIssueOpened className="parameter-icon" />
            Issues
          </div>
          <div
            className={setActiveFilter(1)}
            onClick={() => toggleActiveFilterIndex(1)}
          >
            <BsFillPeopleFill className="parameter-icon" />
            Size
          </div>
          <div
            className={setActiveFilter(2)}
            onClick={() => toggleActiveFilterIndex(2)}
          >
            <RiPinDistanceFill className="parameter-icon" />
            Distance
          </div>
          <div
            className={setActiveFilter(3)}
            onClick={() => toggleActiveFilterIndex(3)}
          >
            <BsCalendarMinusFill className="parameter-icon" />
            Date/Time
          </div>
          <div
            className={setActiveFilter(4)}
            onClick={() => toggleActiveFilterIndex(4)}
          >
            <BsThreeDots className="parameter-icon" />
            More
          </div>
          <div
            className={setActiveFilter(5)}
            onClick={() => toggleActiveFilterIndex(5)}
          >
            <BsThreeDots className="parameter-icon" />
            Show Filters
          </div>
        </div>
        <div className="account-settings"></div>
      </div>
    </>
  );
}
