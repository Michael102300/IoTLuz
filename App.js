import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Form from './App/Components/Form'
import Welcome from './App/Components/Welcome'
import Add from './App/Components/Iniciar'

const App = createStackNavigator(
  { Welcome: Welcome ,
    Add : Add,
    Form: Form
  },
  {
    initialRouteName: 'Welcome'
  }
)
export default createAppContainer(App) 
  
