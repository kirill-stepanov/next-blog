import React from "react"

import PostContentGallery from "../PostContentGallery/PostContentGallery"

import {
  ContentHeading2,
  ContentText,
} from "./PostContent.styles"

const PostContent = (props) => {
  const { content } = props

  return (
    <>
      {
        content.map((item) => (
          <div key={item.id + item.__component}>
            {
              item.__component === 'article.h2' && (
                <ContentHeading2>
                  {item.h2}
                </ContentHeading2>
              )
            }

            {
              item.__component === 'article.text' && (
                <ContentText>
                  {item.text}
                </ContentText>
              )
            }

            {
              item.__component === 'article.gallery' && <PostContentGallery images={item.gallery.data} />
            }
          </div>
        ))
      }
      
    </>
  )
}

export default PostContent