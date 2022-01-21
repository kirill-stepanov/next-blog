import React from "react"

import {
  Gallery,
  GalleryImage,
} from "./PostContentGallery.styles"

const PostContentGallery = (props) => {
  const { images } = props

  return (
    <Gallery>
      {
        images.map((image) => (
          <GalleryImage
            key={image.id}
            src={`https://strapi-n-blog.herokuapp.com${image.attributes.formats.large.url}`}
          />
        ))
      }
    </Gallery>
  )
}

export default PostContentGallery