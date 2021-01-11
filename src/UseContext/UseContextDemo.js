import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContextCode";

export default function UseContextDemo() {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3rem"
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div style={themeStyles}></div>
        </div>
      </div>
    </>
  );
}
