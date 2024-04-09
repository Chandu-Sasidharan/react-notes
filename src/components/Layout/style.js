import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px;
`;

export const Nav = styled.nav`
  background-color: aqua;
`;

export const Link = styled.ul`
  display: flex;
  justify-content: space-around;
  color: rgb(68, 0, 255);
  padding: 10px;
  font-size: 15px;
`;

export const Footer = styled.div`
  margin-top: 10px;
`;

export const ExtList = styled(Link)`
  font-size: 20px;
  color: red;

  li:hover {
    color: yellow;
  }
`;
