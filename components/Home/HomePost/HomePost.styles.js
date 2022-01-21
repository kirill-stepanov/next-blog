import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 65px auto;
  padding: 0 25px;
`

export const ContainerPost = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  :not(:last-child) {
    border-bottom: 1px solid #E4E4E4;
    padding-bottom: 65px;
    margin-bottom: 65px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


export const PostImage = styled.img`
  cursor: pointer;
  height: 718px;
  width: 100%;
  object-fit: cover;
  transition: all .2s ease-in-out;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0);
  }
`

export const PostDescription = styled.div`
  margin: auto;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const PostDescriptionDate = styled.p`
  font-family: "Poppins", Helvetica, sans-serif;
  font-size: 13px;
  color: #000000;
  margin-bottom: 4px;
`

export const PostDescriptionTitle = styled.h2`
  font-family: "Cormorant Garamond", Times, serif;
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 4px;
  transition: all .1s ease-in-out;

  a:hover {
    color: #B3063D;
  }
`

export const PostDescriptionText = styled.p`
  font-family: "Cormorant Garamond", Times, serif;
  font-size: 18px;
  line-height: 1.45;
`

export const PostDescriptionButton = styled.button`
  margin-top: 16px;
  padding: 0 30px;
  border: 1px solid #000000;
  background: #FFFFFF;
  height: 40px;
  display: flex;
  align-items: center;
  font-family: "Poppins", Helvetica, sans-serif;
  font-size: 13px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  :hover {
    background: #000000;
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    margin: 16px auto 0;
  }
`
