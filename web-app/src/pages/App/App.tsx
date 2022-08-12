import "./App.css";
import { Layout } from "../../Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../AboutUs/About";
import SourceCode from "../SourceCode/SourceCode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import LeftSideMenu from "../../components/LeftSideMenu/LeftSideMenu";
const StyledApp = styled.div`
  width: 100%;
`; //<StyledApp></StyledApp> replaces div classname=app
const Container = styled.div`
width: 100%:
`;
function App(): JSX.Element {
  return (
    <Container>
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
            <LeftSideMenu />
          </Layout>
        </StyledApp>
      </Router>
    </Container>
  );
}

export default App;
