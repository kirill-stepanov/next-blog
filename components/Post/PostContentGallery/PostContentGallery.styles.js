import styled from "styled-components"

export const Gallery = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: block;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 1100px;

  :nth-child(3n+1) {
    grid-column: span 2;
  }
`