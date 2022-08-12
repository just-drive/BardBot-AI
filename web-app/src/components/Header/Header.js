import { useDarkMode } from "components/ThemeToggle/userDarkMode";
import { ThemeProvider } from "styled-components";
import bbai from "../../images/smaller.png";
import Toggle from "../ThemeToggle/Toggle";
import { NavLink } from "./HeaderStyles";
import { GlobalStyles } from "global";
import {
  AppBar,
  makeStyles, Toolbar, Typography
} from "@material-ui/core";
import { darkTheme, lightTheme } from "components/ThemeToggle/themes";
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
            <div className="left">
              <NavLink to="/">
                <img src={bbai} alt="Logo" />
              </NavLink>
            </div>
          </Typography>
          <Typography variant="h6">
            <NavLink to="/about">
              <code>.about()</code>
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <NavLink to="https://github.com/just-drive/BardBot-AI">
              <code>.contactUs()</code>
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <a href="https://github.com/just-drive/BardBot-AI">
              <code>.sourceCode()</code>
            </a>
          </Typography>
          <Typography variant="h6">
            {/* <div class="right"> */}
            <ThemeProvider theme={themeMode}>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              <GlobalStyles />
            </ThemeProvider>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
