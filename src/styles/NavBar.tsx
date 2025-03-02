import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #007bff;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const NavBarItem = styled.div`
  flex: 1;
  padding: 10px;
`;

    