import * as React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

const platformText = { ios: 'iOS', android: 'Android', web: 'Web' }

export default class ExampleApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! ({platformText[Platform.OS]})
        </Text>
        <Text>Open up src/App.tsx to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
