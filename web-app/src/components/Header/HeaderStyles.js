import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  height: 80px;
  width: 30%;
  display: flex;
  align-items: center;
  position: absolute;
  margin-bottom: 10px;
  margin-right: 50px;
  border-style: solid;
  border-radius: 20px;
  border-width: 2px;
  border-color: #ff3d00;
  left: 700px;
`;

export const NavLink = styled(Link)`
  color: #f5deb3;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f5deb3;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  flex: right;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex: center;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
