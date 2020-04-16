import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
//import {createStackNavigator} from 'react-navigation-stack'

//Screens
import Form from './Components/Form'
import Welcome from './Components/Welcome'
import Add from './Components/Iniciar'
import Datos from './Components/Datos'


const App = createBottomTabNavigator(
  { 
    Welcome: Welcome ,
    Add : Add,
    Form: Form,
    Datos: Datos
  },

  {
    initialRouteName: 'Welcome'
  },

  
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Welcome') {
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Add') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
         return <Ionicons name={iconName} size={25} color={tintColor} />;; //size={25} color={tintColor}
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
  
  
)
export default createAppContainer(App) 
  
