import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Main from './app/container/Main';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={Main} initial={true} />
        </Scene>
      </Router>
    );
  }
}
