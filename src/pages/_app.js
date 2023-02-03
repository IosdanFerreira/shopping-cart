import '@/scss/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { Provider } from 'react-redux';
import store from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Global container
import GlobalContainer from '@/components/layout/GlobalContainer'

// Global loader
import Loader from '../components/Loader'

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
        <GlobalContainer>
          <Component {...pageProps} />
        </GlobalContainer>
      {/* </PersistGate> */}

    </Provider>
  )
}
