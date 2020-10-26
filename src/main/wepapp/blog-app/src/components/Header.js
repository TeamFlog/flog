import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
`;

const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
     justify-content: end;
  
  `;
  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    list-style-type: none;
    color: white;
    font-weight: 800;
    
  `;
  

const Header = () => {
  return (
    <HeaderStyle>
    <NavStyle>
      <MenuStyle>
      <li>
       <Link to="/join" style={{ textDecoration: "none", color: "black" }}>
            회원가입
          </Link></li>

      <li>
       <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            로그인
          </Link></li>
          </MenuStyle>
    </NavStyle>
</HeaderStyle>
  );
};

export default Header;
