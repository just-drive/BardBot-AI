import styled from "styled-components";

export const MenuDiv = styled.div`
  background-color: "transparent";
  width: 15%;
  justify-content: left;
  align-items: left;
  dock: left;
  top: 0px;
  bottom: 0px;
`;

export const ServiceGroupDiv = styled.div`
  background-color: transparent;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-top: 15px;
`;
export const ServiceDiv = styled.div`
  background-color: transparent;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #c8ee90;
  font-size: 120%;
  color: white;
  left: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgrey;
  text-align: center;
  margin-left: 15px;
  &:hover {
    background-color: #65a765;
  }
`;

export const SectionLabel = styled.h1`
  color: White;
  font-size: 1.7em;
  border: 2px solid;
  background: #98fb98;
  border-radius: 5px;
  margin-left: 5px;
  padding-right: 1rem;
`;
export const ServicesLabel = styled.h1`
  color: White;
  font-size: 1.7em;
  border: 2px solid white;
  background: #008000;
  border-radius: 5px;
  margin-left: 5px;
  padding-right: 1rem;
  margin-bottom: 5px;
`;

export const PanelWrapper = styled.div`
  max-width: 100px;
  justify-content: space-around;
  margin: auto;
  float: left;
`;

export const PanelContentOutputWrapper = styled.div`
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
  margin-bottom: 500%;
  margin-left: 500%;
  margin-right: 500%;
  margin-top: 500%;
  padding: 20px;
  transform: translateX(-50%);
  border-style: solid;
  border-radius: 20px;
  border-width: 2px;
  border-color: #ff3d00;
`;