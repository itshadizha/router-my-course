import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Courses = () => {
  return (
    <StyledContainer>
      <StyledNav>
        <NavLink to="/courses/materials">Materials</NavLink>
        <NavLink to="/courses/students">students</NavLink>
        <NavLink to="/courses/ratings">ratings</NavLink>
      </StyledNav>

      <Outlet />
    </StyledContainer>
  );
};

export default Courses;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;
