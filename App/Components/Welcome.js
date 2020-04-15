import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Styles from './Styles'

class Welcome extends Component{
  inicio = () => {
    this.props.navigation.navigate('Add')
  }
  render(){
    return(
      <View style={Styles.container}>
        <View style = { { justifyContent: 'center',alignItems: 'center', flex: 2} }>
          <Text style= {  Styles.paragraph, {fontSize : 45, color : 'black', textAlign : 'center' } }> BIENVENIDOS </Text>
        </View>
        <View style = { { alignItems:'center', flex:2, justifyContent:'center'}}>
          <TouchableOpacity onPress={this.inicio}>
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>COMENZAR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )

  }
}
export default Welcome