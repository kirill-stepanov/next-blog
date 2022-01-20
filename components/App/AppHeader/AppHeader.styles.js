import styled from "styled-components"

export const Header = styled.header`
  height: 65px;
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #E8E8E8;
  top: 0;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0 30px;

  ${props => props.isActive && `
    height: 0;
    opacity: 0;
  `}
`

export const HeaderLink = styled.div``
