import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const TitleGeneratorWrapper = styled.div`
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
export const TitleGeneratorDisplayWrapper = styled.div`
  background: #000;
  background-color: rgba(0, 0, 0, 0.7);
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
  margin-bottom: 150%;
  margin-left: 150%;
  margin-right: 150%;
  margin-top: 150%;
  padding: 20px;
  transform: translateX(-50%);
  border-style: solid;
  border-radius: 20px;
  border-width: 2px;
  border-color: #ff3d00;
`;

export const Input = styled.input``;
