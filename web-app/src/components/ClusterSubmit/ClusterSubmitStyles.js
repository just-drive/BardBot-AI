import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const MenuDiv = styled.div`
  background-color: #90ee90;
`;

export const Div1 = styled.div`
  width: 100px;
  position: absolute;
  top: 100px;
  left: 50px;
  bottom: 100px;
`;
export const Div2 = styled.div`
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50px;
  bottom: 100px;
`;
export const Div3 = styled.div`
  max-width: 100px;
  align-content: center;
  justify-content: space-around;
  margin: auto;
  position: absolute;
  float: right;
  top: 0px;
  text-align: right;
  right: -500%;
  z-index: 100;
  bottom: 100px;
  padding: 20px;
  transform: translateX(-50%);
`;

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

export const ClusterWrapper = styled.div`
  position: fixed;
  right: 10%;
`;
