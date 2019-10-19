/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/homeScreen'

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
})

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer

