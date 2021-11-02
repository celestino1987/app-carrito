import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import "../css/AddIconSopping.css";

export const BackArrow = () => {
  return (
    <div className="icon ">
      <Link to="/">
        {" "}
        <KeyboardBackspaceIcon color="action" fontSize="large" />{" "}
      </Link>
    </div>
  );
};
