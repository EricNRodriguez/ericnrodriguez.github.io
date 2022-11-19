import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";
import {Hamburger} from "../components/hamburger";
import {Navigation} from "../components/navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="separated-header">
        <div className="left-aligned-row">
          <Link to={"/"} className="text-logo-wrapper">
            <h1 className="text-logo">
              <span className="bold-text"> Eric </span> Rodriguez
            </h1>
          </Link>
        </div>
        <div className="right-aligned-row">
          <Navigation className="hz-nav desktop-only"/>
          <div className="mobile-only">
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  )
};
