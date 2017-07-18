import * as RX from 'reactxp'

const platformText = { ios: 'iOS', android: 'Android', web: 'Web' }

export default class ExampleApp extends RX.Component<{}, null> {
  render() {
    return (
      <RX.View style={styles.container}>
        <RX.Text style={styles.welcome}>
          Welcome to React Native! ({platformText[RX.Platform.getType()]})
        </RX.Text>
        <RX.Text>Open up src/App.tsx to start working on your app!</RX.Text>
        <RX.Text>Changes you make will automatically reload.</RX.Text>
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }),
  welcome: RX.Styles.createTextStyle({
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }),
}
