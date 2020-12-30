import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const favicon = Component.Favicon || '👋'

  return (
    <Layout favicon={favicon}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
