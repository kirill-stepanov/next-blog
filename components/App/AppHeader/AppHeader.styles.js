import styled from "styled-components"

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #E8E8E8;
  top: 0;
  transition: all .2s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 65px;

  ${props => props.isHidden && `
    top: -65px;
  `}
`

export const HeaderMenu = styled.nav`
  display: flex;
  margin-left: auto;
`