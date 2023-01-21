import '@/scss/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// Global container
import GlobalContainer from '@/components/layout/GlobalContainer'

export default function App({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <Component {...pageProps} />
    </GlobalContainer>
  )
}
