import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "../../Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../AboutUs/About";
import SourceCode from "../SourceCode/SourceCode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js"; //for light and dark theme
import LeftSideMenu from "../../components/LeftSideMenu/LeftSideMenu";
import {
  login,
  logout,
  selectUser,
  selectUserStatus,
  API_STATUS,
  selectError,
} from "store/user/userSlice";

const StyledApp = styled.div``; //<StyledApp></StyledApp> replaces div classname=app

function App(): JSX.Element {
  const [theme, setTheme] = useState("dark"); //changes state based on toggle
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <button onClick={() => themeToggler()}>Theme</button>
          <Layout>
            <Routes>
              <Route path="/" element={App}></Route>
              <Route path="/SourceCode()" element={SourceCode}></Route>{" "}
              {/*Will link to github*/}
              <Route path="/about" element={<About />}></Route>{" "}
              {/*Will link to short about page*/}
            </Routes>

            <LeftSideMenu />
          </Layout>
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
