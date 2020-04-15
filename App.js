import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Form from './Components/Form'
import Welcome from './Components/Welcome'
import Add from './Components/Iniciar'
import Datos from './Components/Datos'

const App = createStackNavigator(
  { 
    Welcome: Welcome ,
    Add : Add,
    Form: Form,
    Datos: Datos
  },

  {
    initialRouteName: 'Welcome'
  }
  
)
export default createAppContainer(App) 
 
