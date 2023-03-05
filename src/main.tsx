import 'assets/global.scss'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import App from './App'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: ''
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider resetCSS={false} theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
