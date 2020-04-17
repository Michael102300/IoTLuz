
import React, {Component} from 'react'
//import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
//import {createStackNavigator} from 'react-navigation-stack'

//Screens
import Form from './Components/Form'
import Welcome from './Components/Welcome'
import Lista from './Components/Listas'
import Datos from './Components/Datos'




export default createAppContainer(createBottomTabNavigator(

  {
    Welcome:Welcome,
    Lista:Lista,
    Form:Form,
    Datos:Datos
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Welcome') {
          iconName =  focused ? 'home' : 'home';
        } else if (routeName === 'Form') {
          iconName = focused ? 'library-add' : 'library-add';
        } else if (routeName === 'Lista'){
          iconName = focused ? 'list' : 'list';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },

    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },

  }

));





