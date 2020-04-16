import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements' 

class Welcome extends Component{

  inicio = () => {
    this.props.navigation.navigate('Add')
  }

    render(){
      return(
        <View style={Styles.container}>


          <View style = {Styles.header}>
            <Text style= {Styles.paragraph}> 
              BIENVENIDO
            </Text>
            <Icon name='home' />
          </View>

           
          
          <View style = {Styles.finish}>
            <TouchableOpacity onPress={this.inicio}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>
                  COMENZAR
                </Text>
              </View>
            </TouchableOpacity>
          </View>


        </View>
      )
    }
}
const Styles = StyleSheet.create({

  container :{
    flex : 1,
    backgroundColor : '#E4F2F8'
  },


  header: {
    flex: 2,
    paddingVertical:'20%',
    alignItems : 'center',
    justifyContent: 'center'
  },


  paragraph :{
    fontSize : 43,
    color : 'black',
    textAlign : 'center',
    color: 'rgb(20,10,50)' 
   },


  finish:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'column',
    margin : 30
  },


  button: {
    borderWidth : 0.5,
    borderColor: '#626AE5',
    width: 234,
    height: 57,
    backgroundColor: 'white',
    borderRadius: 21
  },


  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontSize: 23
  }
  
})
export default Welcome