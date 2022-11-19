import {Link} from "react-router-dom";
import React from "react";

export type NavigationProps = {
  className?: string;
  onDirect?: () => void;
};

export const Navigation = (props: NavigationProps) => {
  return (
    <div className={props.className}>
      <ul>
        <li>
          <Link to={"/about"} onClick={props.onDirect}> About </Link>
        </li>
        <li>
          <Link to={require("../assets/resume.pdf")} target={"_blank"} onClick={props.onDirect}> Resume </Link>
        </li>
        <li>
          <Link to={"/blog"} onClick={props.onDirect}> Blog </Link>
        </li>
        <li>
          <Link to={"/contact"} onClick={props.onDirect}> Contact </Link>
        </li>
      </ul>
    </div>
  );
};
