import * as ReactDOM from 'react-dom'
import React, { useContext, useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import App from '@/app'
import { client } from '@/app/config/apollo'
import { ModalProvider } from '@/context/confirmModal'
import { ErrorhandleProvider } from '@/context/error'
import { StartGameProvider } from '@/context/startGame'

const rootNode = document.getElementById('root')
const component = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ModalProvider>
        <ErrorhandleProvider>
          <StartGameProvider>
            <App />
          </StartGameProvider>
        </ErrorhandleProvider>
      </ModalProvider>
    </BrowserRouter>
  </ApolloProvider>
)

ReactDOM.render(component, rootNode)
rootNode.dispatchEvent(new Event('rendered'))
