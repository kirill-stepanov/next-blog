import React from "react"

import Link from "next/link"

import moment from "moment"

import {
  Container,
  ContainerPost,
  PostImage,
  PostDescription,
  PostDescriptionDate,
  PostDescriptionTitle,
  PostDescriptionText,
  PostDescriptionButton,
} from "./HomePost.styles"

const HomePost = (props) => {
  const { articles } = props

  return (
    <Container>
      {
        articles.data.map((article) => (
          <ContainerPost key={article.id}>
            <Link href={`/blog/${article.attributes.slug}`}>
              <PostImage
                src={`https://strapi-n-blog.herokuapp.com${article.attributes.image.data.attributes.formats.large.url}`}
                alt={article.attributes.image.data.attributes.alternativeText}
              />
            </Link>

            <PostDescription>
              <PostDescriptionDate>
                {moment(article.attributes.publishedAt).format("MMM DD YYYY")}
              </PostDescriptionDate>

              <PostDescriptionTitle>
                <Link href={`/blog/${article.attributes.slug}`}>
                  {article.attributes.title}
                </Link>
              </PostDescriptionTitle>

              <PostDescriptionText>
                {article.attributes.description}
              </PostDescriptionText>

              <PostDescriptionButton>
                <Link href={`/blog/${article.attributes.slug}`}>
                  Read more
                </Link>
              </PostDescriptionButton>
            </PostDescription>
          </ContainerPost>
        ))
      }
      {/* <ContainerPost>
        <PostImage
          src='https://ourfoodstories.com/wp-content/uploads/2021/11/Kenwood-09.jpg'
          alt='Nine wonderful Wines from the Ribera del Duero Region'
        />

        <PostDescription>
          <PostDescriptionTitle>
            Nine wonderful Wines from the Ribera del Duero Region
          </PostDescriptionTitle>

          <PostDescriptionText>
            For most people, a good meal goes hand in hand with good wine. And since we love to cook, bake and decorate a beautiful table, we were delighted when the Ribera del Duero wine region sent us 9 of their wonderful wines to taste.
          </PostDescriptionText>

          <PostDescriptionButton>
            Read more
          </PostDescriptionButton>
        </PostDescription>
      </ContainerPost>

      <ContainerPost>
        <PostImage
          src='https://ourfoodstories.com/wp-content/uploads/2021/12/Christmas-Decoration-Cloud.jpg'
          alt='Nine wonderful Wines from the Ribera del Duero Region'
        />

        <PostDescription>
          <PostDescriptionTitle>
            Nine wonderful Wines from the Ribera del Duero Region
          </PostDescriptionTitle>

          <PostDescriptionText>
            For most people, a good meal goes hand in hand with good wine. And since we love to cook, bake and decorate a beautiful table, we were delighted when the Ribera del Duero wine region sent us 9 of their wonderful wines to taste.
          </PostDescriptionText>

          <PostDescriptionButton>
            Read more
          </PostDescriptionButton>
        </PostDescription>
      </ContainerPost> */}
    </Container>
  )
}

export default HomePost