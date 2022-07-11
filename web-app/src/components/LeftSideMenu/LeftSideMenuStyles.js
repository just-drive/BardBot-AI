import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
//#90ee90;
export const MenuDiv = styled.div`
  background-color: #90ee90;
  min-height: 100vh;
  positon: absolute;
  padding-top: 2rem;
  padding-bottom: 2.5rem;
  width: 25%;
  bottom: 10px;
  margin-bottom: 100px;
  left: 100px;
`;

export const Div1 = styled.div`
  background-color: grey;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;
export const Div2 = styled.div``;

export const Button = styled.button`
  background-color: #c8ee90;
  color: white;
  left: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgrey;
  &:hover {
    background-color: #65a765;
  }
`;

// import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// //#90ee90;
// export const MenuDiv = styled.div`
//   background-color: green;
//   positon: relative;
//   padding-top: 2.5rem;
//   padding-bottom: 2.5rem;
// `;

// export const Div1 = styled.div`
//   width: 100px;
//   position: fixed;
//   top: 100px;
//   left: 50px;
//   bottom: 100px;
// `;
// export const Div2 = styled.div`
//   width: 100px;
//   position: absolute;
//   top: 50%;
//   left: 50px;
//   bottom: 100px;
// `;

// export const Button = styled.button`
//   background-color: #c8ee90;
//   color: white;
//   left: 10px;
//   padding: 5px 15px;
//   border-radius: 5px;
//   outline: 0;
//   text-transform: uppercase;
//   cursor: pointer;
//   box-shadow: 0px 2px 2px lightgrey;
//   &:hover {
//     background-color: #65a765;
//   }
// `;

////////////////////////////////////////////////////////////////////////
// export const Nav = styled.nav`
//   background:'transparent';
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem calc((100vw - 1000px ) /2);
//   z-index: 10;

// `

// export const NavLink = styled(Link)`
//   color: #F5DEB3;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active{
//     color: #F5DEB3;
//   }

// `

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 760px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `
// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   @media screen and (max-width: 768px) {
//     display:none;
//   }
// `
