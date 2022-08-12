// Toggle.js
import { func, string } from "prop-types";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

const Toggle = ({ toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      <Classic duration={750} reversed />
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
