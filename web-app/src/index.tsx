import React from 'react';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import App from "pages/app/app";
import About from "pages/aboutUs/about";
import SourceCode from "pages/sourceCode/sourceCode";

import './index.css';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";


const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
`;
//// ReactDOM.render(
////   <React.StrictMode>
////     <Container>
////       <Header />
////       <main>
////         <Router>
////           <Routes>
////             <Route path="/" element={App}></Route>
////             <Route path="/source_code" element={SourceCode}></Route>{" "}
////             {/*Will link to github*/}
////             <Route path="/about" element={About}></Route>{" "}
////             {/*Will link to short about page*/}
////           </Routes>
////         </Router>
////       </main>
////       <Footer />
////     </Container>
////   </React.StrictMode>,
////   document.getElementById('root'),
//// );

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/about" element={<About />}></Route>{" "}
            {/*Will link to short about page*/}
            <Route path="/source_code" element={<SourceCode />}></Route>{" "}
            {/*Will link to github*/}
          </Routes>
          <Footer />
        </main>
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
