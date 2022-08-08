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
import {
  AppBar,
  makeStyles,
  Typography,
  Toolbar,
  InputBase,
} from "@material-ui/core";
const useStyles = makeStyles((Theme) => ({
  appbar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-evenly",
    background: "#000",
    color: "#000",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderStyle: "solid",
    borderRadius: "20px",
    borderWidth: "2px",
    borderColor: "#ff3d00",
  },
  logoLg: {
    display: "none",
    [Theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [Theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div></div>;
  }

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            <div class="left">
              <NavLink to="/">
                <img src={bbai} alt="Logo" exact />
              </NavLink>
            </div>
          </Typography>
          <Typography variant="h6">
            <NavLink to="/about" activestyle>
              .about()
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <NavLink to="/" activestyle>
              .contactUs()
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <a href="https://github.com/just-drive/BardBot-AI" activestyle>
              .sourceCode()
            </a>
          </Typography>
          <Typography variant="h6">
            {/* <div class="right"> */}
            <ThemeProvider theme={themeMode}>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              <GlobalStyles />
            </ThemeProvider>
          </Typography>
          {/* <Typography variant="h6" className={classes.logoSm}>
            Not Hello
          </Typography> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
