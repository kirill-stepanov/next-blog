import '../styles/globals.css'

import AppHeader from '../components/App/AppHeader/AppHeader'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
