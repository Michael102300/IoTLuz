import React, {Component} from 'react'
import { Icon } from 'react-native-elements' 
import {View,
   Text, 
   StyleSheet, 
   TouchableOpacity,
   TextInput,
   Button
} from 'react-native'

class Welcome extends Component{

  inicio = () => {
    this.props.navigation.navigate('Lista')
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


          <View style={Styles.login}>
              <View style={Styles.icnonInput}>
                <Icon name='person' />
                <TextInput style={Styles.textin} placeholder={"Nombre de usuario"} />
              </View>

              <View style={Styles.icnonInput}>
                <Icon name='security' />
                <TextInput style={Styles.textin} placeholder={"      Contraseña      "} />
              </View>
          </View>


          <View style={Styles.buttonS} >
            <Button title={"Entrar"} />
          </View>


        </View>
      )
    }
}
const Styles = StyleSheet.create({

  container :{
    flex : 1,
    backgroundColor : '#E4F2F8',
    paddingVertical:'10%',
  },

  header: {
    flex: 1,
    
    alignItems : 'center',
    justifyContent: 'center',
  },

  paragraph :{
    fontSize : 43,
    color : 'black',
    textAlign : 'center',
    color: 'rgb(20,10,50)',
   },

  finish:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'column',
    margin : 30,
  },

  button: {
    borderWidth : 0.5,
    borderColor: '#626AE5',
    width: 234,
    height: 57,
    backgroundColor: 'white',
    borderRadius: 21,
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontSize: 23,
  },

  textin:{
    fontSize:15,
    alignSelf:'flex-start',
  },

  icnonInput:{
    flexDirection:'row',
    padding:'2%',
    alignSelf:'center',
  },

  login:{
    marginVertical:'30%',
    flex:1.1,
    alignItems:'center',
    flexDirection:'column',
  },

  buttonS:{
    padding:'4%',
    paddingHorizontal:'15%',
    flex:1,
    alignContent:'center'
  },
  
})
export default Welcome