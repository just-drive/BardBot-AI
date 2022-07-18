import bbai from "../../images/smaller.png";

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
            <img src={bbai} alt="Logo" />
          </NavLink>
        </div>
        <Bars />
        <NavMenu>
          <div class="middle">
            <NavLink class="item" to="/" activestyle>
              .about()
            </NavLink>
            <NavLink class="item" to="/" activestyle>
              .contactUs()
            </NavLink>
            <NavLink class="item" to="/SourceCode" activestyle>
              .sourceCode()
            </NavLink>
          </div>
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
