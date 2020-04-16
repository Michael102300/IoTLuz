import React, {Component} from 'react'
import {View, 
  Text, 
  StyleSheet, 
  Button, 
  Alert, 
  TextInput
} from 'react-native'
import data from './data/data.json'

var id=0

class Form extends Component{
  constructor(props){
    super(props)

    this.state={
      nombre:''
    }
  }
  _onPressButton() {Alert.alert('Sirve el boton')}

  agregar=()=>{
    id = id +1
    data.push({
      "title" : this.state.nombre
    })
    this.props.navigation.navigate('Lista'),
    this.setState({
      nombre: ''
    })
  }

  render(){
    return(
      <View style={Styles.container}>

        
        <View style = {Styles.header}>

            <View style={Styles.headerLeft}>
              <Text style= {Styles.paragraph}>
                  Nombre: 
              </Text>
              <TextInput style={Styles.name} placeholder="NOMBRE" 
                value={this.state.nombre} onChangeText={(nombre)=>{this.setState({nombre})}}/>   

              <Text style= {Styles.paragraph}>
                  Numero: 
              </Text>
              <TextInput style={Styles.name} placeholder="NUMERO"/>
            </View>

            <View style={Styles.headerRight}>

              <View style={Styles.button_Space}>
                <Button title ={"CAPTURAR"}  style={Styles.boton} onPress={this._onPressButton} />
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
            <Button title ={"AGREGAR"} onPress={this.agregar} />
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
    paddingVertical:'15%',
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
    padding:'3%',
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