import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Add extends Component{
  agregar = () =>{
    this.props.navigation.navigate('Form')
  }
  cancelar = () =>{
    this.props.navigation.navigate('Welcome')
  }
  render(){
    return(
      <View style={Styles.container}>
        <View style = {Styles.header}>
          <Text style= {Styles.paragraph}> Añade los cuartos que posees y los cuales quieres controlar. 
          </Text>
        </View>
        <View style = {Styles.finish}>
        <TouchableOpacity onPress={this.agregar}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Añadir +</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.cancelar}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Eliminar -</Text>
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
    flex: 0.5,
    alignItems : 'center',
    justifyContent: 'flex-end'
  },
  paragraph :{
    fontSize : 30,
    color : 'black',
    textAlign : 'center'
    //fontFamily: "Arial"
   },
  finish:{
    flex: 1,
    margin: 50,
    justifyContent: 'space-around',
    flexDirection : 'row',
    alignItems: 'flex-end',
    marginBottom: 50
  },
  button: {
    borderWidth : 1,
    borderColor: '#626AE5',
    width: 234,
    height: 57,
    backgroundColor: 'white',
    borderRadius: 29
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontSize: 23
  }
  
})
export default Add