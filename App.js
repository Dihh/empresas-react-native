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
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import empresaReducer from './screens/redux/reducers'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/homeScreen'
import DetailsScreen from './screens/details'


const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
})

const AppContainer = createAppContainer(MainNavigator)

const reducers = combineReducers({
  empresa: empresaReducer
})

const App = () => (
  <Provider store={createStore(reducers)}>
    <AppContainer></AppContainer>
  </Provider>
)

export default App

