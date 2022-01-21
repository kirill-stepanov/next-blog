import React from "react"

import moment from "moment"

import {
  Container,
  ContainerImage,
  ContainerDescription,
  ContainerDescriptionDate,
  ContainerDescriptionTitle,
  ContainerDescriptionText,
} from "./PostHeader.styles"

const PostHeader = (props) => {
  const { post } = props

  return (
    <Container>
      <ContainerImage 
        src={`https://strapi-n-blog.herokuapp.com${post.attributes.image.data.attributes.formats.large.url}`}
        alt={post.attributes.image.data.attributes.alternativeText}
      />

      <ContainerDescription>
        <ContainerDescriptionDate>
          {moment(post.attributes.publishedAt).format("MMM DD YYYY")}
        </ContainerDescriptionDate>

        <ContainerDescriptionTitle>
          {post.attributes.title}
        </ContainerDescriptionTitle>
          
        <ContainerDescriptionText>
          {post.attributes.description}
        </ContainerDescriptionText>
      </ContainerDescription>
    </Container>
  )
}

export default PostHeader