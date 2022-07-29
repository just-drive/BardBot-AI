import bbai from "../../images/smaller.png";
import { Link } from "react-router-dom";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { Nav, NavLink, Bars, NavMenu } from "./HeaderStyles";
import { ThemeProvider } from "styled-components";
import Toggle from "../ThemeToggle/Toggle";
import { useDarkMode } from "components/ThemeToggle/userDarkMode";
import { GlobalStyles } from "pages/App/global";
import { darkTheme, lightTheme } from "components/ThemeToggle/themes";

const Header = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div></div>;
  }
  return (
    <>
      <Nav>
        <div class="left">
          <NavLink to="/">
            <img src={bbai} alt="Logo" exact />
          </NavLink>
        </div>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activestyle>
            .about()
          </NavLink>
          <NavLink to="/" activestyle>
            .contactUs()
          </NavLink>
          <a href="https://github.com/just-drive/BardBot-AI" activestyle>
            .sourceCode()
          </a>
          <div class="right">
            <ThemeProvider theme={themeMode}>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              <GlobalStyles />
            </ThemeProvider>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
