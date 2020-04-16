import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert, TextInput} from 'react-native'

class Form extends Component{
  
  _onPressButton() {Alert.alert('Sirve el boton')}

  datoo = () =>{
    this.props.navigation.navigate('Datos', {NumeroLista: 13, UsuarioLista:'Kevin Guzmán',})
  }


  render(){
    return(
      <View style={Styles.container}>

        
        <View style = {Styles.header}>

            <View style={Styles.headerLeft}>
              <Text style= {Styles.paragraph}>
                  Nombre: 
              </Text>
              <TextInput style={Styles.name} placeholder="NOMBRE"/>   

              <Text style= {Styles.paragraph}>
                  Numero: 
              </Text>
              <TextInput style={Styles.name} placeholder="NUMERO"/>
            </View>

            <View style={Styles.headerRight}>

              <View style={Styles.button_Space}>
                <Button title ={"CAPTURAR"}  style={Styles.boton} onPress={this.datoo}/>
              </View>

              <View style={Styles.button_Space}>
                <Button title ={"ESCOGER"} onPress={this._onPressButton}/>
              </View>

              <View style={Styles.button_Space}>
                <Button title ={"ELIMINAR"}  onPress={this._onPressButton}/>
              </View>
            
          </View>

        </View>


        <View style = {Styles.footer}>
          <View style={Styles.footerLeft}>
            <Button title ={"AGREGAR"} onPress={this._onPressButton}/>
          </View>

          <View style={Styles.footerRight}>
            <Button title ={"CANCELAR"} onPress={this._onPressButton}/>
          </View>

        </View>
        
        
      </View>
    )

  }
}
const Styles = StyleSheet.create({

  container :{
    flex : 1,
    backgroundColor : '#E4F2F8',
    padding: 10
  },


  header: {
    flex: 2,
    flexDirection:'row',
    alignItems : 'flex-start',
    justifyContent: 'space-between'

  },


  headerLeft:{
    flex:1,
    margin:2
  },


  headerRight:{
    flex:1,
    paddingLeft:10,
    flexDirection:'column',
    justifyContent:'space-between',
  },


  button_Space:{
    margin:2,
    paddingVertical:3
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


  footer:{
    flex: 1,
    justifyContent: 'space-between',
    flexDirection : 'row',
    alignItems: 'flex-end',
  },


  footerLeft:{
    flex:1,
    margin:5
  },


  footerRight:{
    flex:1,
    margin:5
  },


  boton:{
    borderRadius: 20
  }

})
export default Form