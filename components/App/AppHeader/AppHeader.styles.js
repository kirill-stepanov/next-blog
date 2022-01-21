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
  padding: 0 25px;
  height: 65px;

  ${props => props.isHidden && `
    top: -65px;
  `}
`

export const HeaderMenu = styled.nav`
  margin-left: auto;
`

export const HeaderMenuList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`

export const HeaderMenuListItem = styled.li`
  font-family: 'Poppins';
  font-size: 14px;
  position: relative;
  transition: all .1s ease-in-out;

  :not(:last-child) {
    margin-right: 20px;
  }

  :hover {
    color: #B3063D;
  }
`