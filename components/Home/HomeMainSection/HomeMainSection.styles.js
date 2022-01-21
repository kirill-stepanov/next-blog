import styled from "styled-components"

export const Container = styled.div`
  position: relative;
`

export const ContainerImage = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`

export const ContainerDescription = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  max-width: 600px;
`

export const ContainerTitle = styled.h1`
  font-weight: 500;
  font-size: 35px;
  font-family: "Cormorant Garamond", Times, serif;
  color: #ffffff;
`

export const ContainerText = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: "Cormorant Garamond", Times, serif;
  color: #ffffff;
`