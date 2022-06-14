import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: auto;
    border-bottom: none;
  }
`;

export default Nav;
