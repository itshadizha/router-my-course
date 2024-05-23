import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <StyledNav>
        <NavLink  to="/courses"> Courses</NavLink>
        <NavLink  to="/announcements"> announcements</NavLink>
        <NavLink to="/notifications"> notifications</NavLink>
        <NavLink to="/schedule"> schedule</NavLink>
      </StyledNav>

      <Outlet />
    </Container>
  );
};

export default Menu;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
`