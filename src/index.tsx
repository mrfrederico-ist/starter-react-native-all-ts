import * as RX from 'reactxp'

import App from './App'

declare const module: any

RX.App.initialize(true, true)
RX.UserInterface.setMainView(<App />)

if (module.hot) {
  module.hot.accept()

  RX.App.initialize(true, true)
  RX.UserInterface.setMainView(<App />)
}
