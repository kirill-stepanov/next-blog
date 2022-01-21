import React from "react"

import {
  Container,
  ContainerImage,
  ContainerDescription,
  ContainerTitle,
  ContainerText
} from "./HomeMainSection.styles"

const HomeMainSection = () => {

  return (
    <Container>
      <ContainerDescription>
        <ContainerText>Breakfast</ContainerText>

        <ContainerTitle>Autumn Barn Gathering with gluten-free Pumpkin Waffles</ContainerTitle>
      </ContainerDescription>
      
      <ContainerImage
        src='https://ourfoodstories.com/wp-content/uploads/2016/10/HI5A0365-3-1.jpg'
        alt='heheh'
      />
    </Container>
  )
}

export default HomeMainSection