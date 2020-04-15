import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
<<<<<<< HEAD
import Form from './Components/Form'
import Welcome from './Components/Welcome'
import Add from './Components/Iniciar'
import Datos from './Components/Datos'
=======
import Form from './App/Components/Form'
import Welcome from './App/Components/Welcome'
import Add from './App/Components/Iniciar'
import Datos from './App/Components/Datos'
>>>>>>> f517e58f1937df83e63f330d250296db214fcf47

const App = createStackNavigator(
  { 
    Welcome: Welcome ,
    Add : Add,
    Form: Form,
<<<<<<< HEAD
    Datos: Datos
=======
    Datos : Datos
>>>>>>> f517e58f1937df83e63f330d250296db214fcf47
  },

  {
    initialRouteName: 'Welcome'
  }
  
)
export default createAppContainer(App) 
  
