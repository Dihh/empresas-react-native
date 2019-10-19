/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import LoginComponent from './components/LoginComponent'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'


class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <LoginComponent></LoginComponent>
    )
  };
};

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  }
})

const App = createAppContainer(MainNavigator, {
  header: null
})

export default App

