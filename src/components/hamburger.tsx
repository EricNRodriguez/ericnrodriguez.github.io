import React, {useState} from "react";
import Burger from "hamburger-react";
import {Navigation} from "./navigation";

export const Hamburger = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return <div className="hamburger-wrapper" >
      <Burger toggled={isExpanded} onToggle={setIsExpanded} />
      <Navigation
          className={`side-nav mobile-only ${isExpanded ? "" : "hidden"}`}
          onDirect={() => setIsExpanded(false)}
      />
    </div>
};
