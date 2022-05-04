import React, { useRef } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { RiPinDistanceFill } from "react-icons/ri";
import {
  BsFillPeopleFill,
  BsCalendarMinusFill,
  BsThreeDots,
} from "react-icons/bs";
export default function Navbar({ logo }) {
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
          <div className="parameters-option">
            <GoIssueOpened className="parameter-icon" />
            Issues
          </div>
          <div className="parameters-option">
            <BsFillPeopleFill className="parameter-icon" />
            Size
          </div>
          <div className="parameters-option">
            <RiPinDistanceFill className="parameter-icon" />
            Distance
          </div>
          <div className="parameters-option">
            <BsCalendarMinusFill className="parameter-icon" />
            Date/Time
          </div>
          <div className="parameters-option">
            <BsThreeDots className="parameter-icon" />
            More
          </div>
          <div className="showfiltermenu-button parameters-option">
            <BsThreeDots className="parameter-icon" />
            Show Filters
          </div>
        </div>
        <div className="account-settings"></div>
      </div>
    </>
  );
}
