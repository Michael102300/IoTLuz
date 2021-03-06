
import React, {Component} from 'react'
//import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {  createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack'

//Screens
import Agregar from './Components/Agregar'
import Inicio from './Components/Inicio'
import Habitaciones from './Components/Habitaciones'
import Ajustes from './Components/Ajustes'
import Register from './Components/Register'



const AddStack = createStackNavigator(
  {
  Habitaciones: Habitaciones,
  Agregar:  Agregar,
  },
  {
    headerMode:'none'
  }
  
);

const LoginStack = createStackNavigator(
  {
  Inicio: Inicio,
  Register:  Register,
  },
  {
    headerMode:'none'
  }
);

export default createAppContainer(createBottomTabNavigator(

  {
    Inicio:LoginStack,
    Habitaciones:AddStack,
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
      }

    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },

  }

));






/* {
  "expo": {
    "name": "IoTluz",
    "slug": "IoTluz",
    "platforms": [
      "ios",
      "android",
      "web"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "Iba aqui :v"
    ],
    "ios": {
      "supportsTablet": true
    }
  }
} */


//"**/*"