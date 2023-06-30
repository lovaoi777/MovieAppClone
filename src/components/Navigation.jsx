import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Nav = styled.div`
  z-index: 1;
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
`;
const Tag = styled.div`
  text-decoration: none;
  color: #0008fc;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  margin: 10px 0px;
`;
const Navigation = () => {
  return (
    <Nav>
      <Tag>
        <Link
          to="/"
          style={{ textDecoration: "none", textTransform: "Uppercase" }}
        >
          Home
        </Link>
      </Tag>
      <Tag>
        <Link to="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
      </Tag>
    </Nav>
  );
};

export default Navigation;
