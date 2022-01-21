import Head from 'next/head'

import HomePost from '../components/Home/HomePost'
import HomeMainSection from '../components/Home/HomeMainSection'

import axios from 'axios'

const HomePage = (props) => {
  const { articles } = props

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Blog application next.js + strapi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMainSection />
      <HomePost articles={articles} />
    </>
  )
}

export const getServerSideProps = async () => {
  let articles = null

  try {
    await axios.get(`https://strapi-n-blog.herokuapp.com/api/articles?populate=image`)
    .then(res => articles = res.data)
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      articles
    }
  }
}


export default HomePage