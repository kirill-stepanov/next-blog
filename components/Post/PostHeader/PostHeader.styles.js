import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  margin: 65px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`

export const ContainerImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 1320px;
  object-fit: cover;
`

export const ContainerDescription = styled.div`
  margin: auto;
`

export const ContainerDescriptionDate = styled.p`
  font-size: 14px;
  color: #000000;
  font-family: "Poppins", Helvetica, sans-serif;
  margin: 0 auto;
  margin-bottom: 20px;
`

export const ContainerDescriptionTitle = styled.h1`
  font-size: 35px;
  line-height: 1.65;
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 300;
  color: #000000;
  margin-bottom: 16px;
`

export const ContainerDescriptionText = styled.p`
  font-family: "Cormorant Garamond", Times, serif;
  font-size: 24px;
  line-height: 1.45;
`