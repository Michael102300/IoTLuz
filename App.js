import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Form from './App/Components/Form'
import Welcome from './App/Components/Welcome'
import Add from './App/Components/Iniciar'
import Datos from './App/Components/Datos'

const App = createStackNavigator(
  { Welcome: Welcome ,
    Add : Add,
    Form: Form,
    Datos : Datos
  },
  {
    initialRouteName: 'Welcome'
  }
)
export default createAppContainer(App) 
  
