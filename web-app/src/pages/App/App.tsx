import React from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "../../Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import About from "../AboutUs/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  login,
  logout,
  selectUser,
  selectUserStatus,
  API_STATUS,
  selectError,
} from "store/user/userSlice";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const apiError = useAppSelector(selectError);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={App}></Route>
            <Route path="/.sourceCode()" element={App}></Route>{" "}
            {/*Will link to github*/}
            <Route path="/.about()" element={About}></Route>{" "}
            {/*Will link to short about page*/}
          </Routes>
          <Hero />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
