import "./App.css";
import { Layout } from "../../Layout/Layout";
import Hero from "../../components/Hero/Hero";
import About from "../AboutUs/About";
import SourceCode from "../SourceCode/SourceCode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./global";

const StyledApp = styled.div``; //<StyledApp></StyledApp> replaces div classname=app

function App(): JSX.Element {
  return (
    <Router>
      <StyledApp>
        <Layout>
          <Routes>
            <Route path="/" element={App}></Route>
            <Route path="/SourceCode()" element={SourceCode}></Route>{" "}
            {/*Will link to github*/}
            <Route path="/about()" element={About}></Route>{" "}
            {/*Will link to short about page*/}
          </Routes>
          <Hero />
        </Layout>
      </StyledApp>
    </Router>
  );
}

export default App;
