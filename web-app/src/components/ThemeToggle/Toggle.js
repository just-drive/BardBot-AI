// Toggle.js
import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from "../../images/moon.svg";
import { ReactComponent as SunIcon } from "../../images/sun.svg";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <button onClick={toggleTheme}>
      <Classic duration={750} reversed />
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
