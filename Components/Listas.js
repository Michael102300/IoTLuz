import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native'

import DATA from './data/data.json'

function Item({ title }) {
  return (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
      
    </View>
  );
}

class Lista extends Component{
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
            <Text style= {Styles.paragraph}> 
              Añade los cuartos que posees y los cuales quieres controlar. 
              Datos:
            </Text>
          </View>
          <View style={Styles.containerr}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style = {Styles.footer}>    
            <TouchableOpacity onPress={this.agregar}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>
                  Añadir +
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.cancelar}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>
                  Eliminar -
                </Text>
              </View>
            </TouchableOpacity>
    
          </View>
          



        </View>



      )

    }
}
const Styles = StyleSheet.create({

  containerr: {
    flex: 0.4,
    margin:'5%',
    marginTop: Constants.statusBarHeight,
  },


  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 5,
  },


  title: {
    fontSize: 25,
  },


  container :{
    flex : 1,
    backgroundColor : '#E4F2F8'
  },


  header: {
    flex: 0.3,
    alignItems : 'center',
    justifyContent: 'flex-end'
  },


  paragraph :{
    fontSize : 18,
    color : 'black',
    textAlign : 'center',
   },


  footer:{
    flex: 0.3,
    paddingVertical:'3%',
    margin: 1,
    justifyContent: 'space-around',
    flexDirection : 'row',
    alignItems: 'flex-end',
    marginBottom: 5
  },


  button: {
    flex:0.5,
    borderWidth : 1.2,
    borderColor: '#626AE5',
    alignContent:'flex-end',
    backgroundColor: 'white',
    borderRadius: 11,
    margin:15
  },


  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontSize: 24
  },

  añdir_button:{
    //alignItems:'',

  },


  eliminar_button:{
    textAlign:'right',
  }





  
})
export default Lista