import React from "react"

import Head from "next/head"

import axios from 'axios'

import PostHeader from "../../../components/Post/PostHeader/PostHeader"

const PostPage = (props) => {
  const { post } = props
  
  return (
    <div>
      <Head>
        <title>{post.attributes.title}</title>
        <meta name="description" content={post.attributes.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostHeader post={post} />
    </div>
  )
}


export const getServerSideProps = async ({ query }) => {
  let articles = null
  let post = null

  try {
    await axios.get(`https://strapi-n-blog.herokuapp.com/api/articles?populate=image,content`)
    .then(res => articles = res.data.data)
  } catch (error) {
    console.log(error)
  }

  post = articles.find((post) => post.attributes.slug === query.postId)

  return {
    props: {
      post
    }
  }
}



export default PostPage