import '@/scss/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { Provider } from 'react-redux';
import store from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

//hooks
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Global container
import GlobalContainer from '@/components/layout/GlobalContainer'

// Global loader
import Loader from '../components/Loader'

export default function App({ Component, pageProps }) {
  // Loading function
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  function HandleLoading() {
    useEffect(() => {
      const handleStart = (url) => {
        url !== router.asPath && setIsLoading(true)
      }

      const handleComplete = (url) => {
        url === router.asPath && setTimeout(() => { setIsLoading(false) }, 100)
      }

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)

      }
    })

    return isLoading && (
      <Loader />
    )
  }

  // Persistor
  let persistor = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <HandleLoading />
          <GlobalContainer>
            <Component {...pageProps} />
          </GlobalContainer>
        </PersistGate>
      </Provider>
    </>
  )
}
