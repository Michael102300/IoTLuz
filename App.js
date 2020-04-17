
import React, {Component} from 'react'
//import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
//import {createStackNavigator} from 'react-navigation-stack'

//Screens
import Agregar from './Components/Agregar'
import Inicio from './Components/Inicio'
import Habitaciones from './Components/Habitaciones'
import Ajustes from './Components/Ajustes'




export default createAppContainer(createBottomTabNavigator(

  {
    Inicio:Inicio,
    Habitaciones:Habitaciones,
    Agregar:Agregar,
    Ajustes:Ajustes
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Inicio') {
          iconName =  focused ? 'home' : 'home';
        } else if (routeName === 'Agregar') {
          iconName = focused ? 'library-add' : 'library-add';
        } else if (routeName === 'Habitaciones'){
          iconName = focused ? 'list' : 'list';
        } else if (routeName === 'Ajustes'){
          iconName = focused ? 'settings' : 'settings';
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





