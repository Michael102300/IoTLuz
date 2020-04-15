import React, {Component} from 'react'
import {View, Text, StyleSheet, Alert, TextInput, TouchableOpacity} from 'react-native'
import Styles from './Styles'

class Form extends Component{
  
  agregar= () =>{
    this.props.navigation.navigate('Add')
    
  }
  datoo = () =>{
    this.props.navigation.navigate('Datos',{itemId: 95,})
  }
  cancelar = () =>{
    this.props.navigation.navigate('Add')
  }
  render(){
    return(
      <View style={Styles.container}>
        <View style = {Styles.header}>
          <View style = {Styles.headerTop}>
            <Text style = {Styles.paragraph}> Nombre: </Text>
            <TextInput
            style={Styles.name} placeholder="NOMBRE" underlineColorAndroid={'transparent'} 
            /*value={this.state.name} onChangeText={name => this.setState({name})} */
            />
          </View>
          <View style = {Styles.headerBottom}>
            <Text style = {Styles.paragraph}> Numero: </Text> 
            <TextInput
            style={Styles.name} placeholder="NUMERO" underlineColorAndroid={'transparent'}
            /*value={this.state.number} onChangeText={number => this.setState({number})} */
            />
          </View>
        </View>
        <View style = {Styles.body}>
          <View style ={Styles.bodyLeft}>

          </View>
          <View style ={Styles.bodyRight}>
           <TouchableOpacity onPress={this.datoo}>
              <View style={Styles.buttonBody}>
                <Text style={Styles.buttonText}>Capturar</Text>
             </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={this.agregar}>
              <View style={Styles.buttonBody}>
               <Text style={Styles.buttonText}>Escoger</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.agregar}>
             <View style={Styles.buttonBody}>
                <Text style={Styles.buttonText}>Eliminar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {Styles.finish}>
          <View style ={Styles.finishLeft}>
          <TouchableOpacity onPress={this.agregar}>
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>Añadir +</Text>
            </View>
          </TouchableOpacity>
          </View>
          <View style ={Styles.finishRight}>
            <TouchableOpacity onPress={this.cancelar}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>Cancelar</Text>
             </View>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    )

  }
}

export default Form