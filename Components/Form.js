import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert, TextInput} from 'react-native'

class Form extends Component{_onPressButton() {Alert.alert('Sirve el boton')}
  render(){
    return(
      <View style={Styles.container}>
        <View style = {Styles.header}>
         <Text style= {Styles.paragraph}> Nombre: </Text>
         <TextInput
            style={Styles.name} placeholder="NOMBRE"
            />
        </View>
        <View style ={Styles.header}> 
           <Text style= {Styles.paragraph}> Numero: </Text>
           <TextInput
            style={Styles.name} placeholder="NUMERO"
            />
        </View>
        <View style = {Styles.body}>
          <Button title ={"CAPTURAR"}  style={Styles.boton} onPress={this._onPressButton}/>
          <Button title ={"ESCOGER"} onPress={this._onPressButton}/>
          <Button title ={"ELIMINAR"} onPress={this._onPressButton}/>
        </View>
        <View style = {Styles.finish}>
          <Button title ={"AGREGAR"} onPress={this._onPressButton}/>
          <Button title ={"CANCELAR"} onPress={this._onPressButton}/>
        </View>
        
        
      </View>
    )

  }
}
const Styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : '#E4F2F8',
    padding: 20
  },
  header: {
    flex: 0.5,
    alignItems : 'flex-start',
    justifyContent: 'center'
  },
  body:{
   flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    //margin: 20,
  },
  paragraph :{
    fontSize : 20,
    color : 'black',
    textAlign : 'center',
   },
   name:{
     borderWidth: 1,
     borderColor: 'gray',
     padding: 2
   },
  finish:{
    flex: 0.5,
    margin: 5,
    justifyContent: 'space-between',
    flexDirection : 'row',
    alignItems: 'center',
  },
  boton:{
    borderRadius: 20
  }
})
export default Form