import React from 'react';

import { AppRegistry } from 'react-native';

import App from './App';

import { AppContainer } from 'react-hot-loader';

const renderApp = () => <AppContainer>
  <App />
</AppContainer>;

AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderApp);

if (module.hot) {
  module.hot.accept();

  const renderHotApp = () => <AppContainer>
    <App />
  </AppContainer>;

  AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderHotApp);
}

AppRegistry.runApplication('ReactNativeWebBoilerplate', {
  rootTag: document.getElementById('root')
});
