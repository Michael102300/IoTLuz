import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  FlatList
} from 'react-native'
import style from './Styles'
import DATA from './data/data.json'

function Item({ title }) {
  return (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text>
      
    </View>
  );
}

class Habitaciones extends Component{
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
            
    
          </View>
          



        </View>



      )

    }
}
const Styles = StyleSheet.create({

  containerr: {
    flex: 5,
    marginHorizontal:'5%',
    marginTop: Constants.statusBarHeight,
  },


  container :{
    flex : 1,
    backgroundColor : 'white'
  },


  header: {
    flex: 1.2,
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
  
})
export default Habitaciones