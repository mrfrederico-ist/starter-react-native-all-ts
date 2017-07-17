import * as React from 'react'
import { AppRegistry } from 'react-native'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const renderApp = () =>
  <AppContainer>
    <App />
  </AppContainer>

AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderApp)

if (module.hot) {
  module.hot.accept()

  const renderHotApp = () =>
    <AppContainer>
      <App />
    </AppContainer>

  AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderHotApp)
}

AppRegistry.runApplication('ReactNativeWebBoilerplate', {
  rootTag: document.getElementById('root'),
})
