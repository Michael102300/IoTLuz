import React, {Component} from 'react'
import {View, Text, SafeAreaView,FlatList, TouchableOpacity} from 'react-native'
import Styles from './Styles'
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Itemxd',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, 
];

function Item({ title }) {
  return (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
}

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
          <Text style= {Styles.paragraph, {fontSize: 25, textAlign: 'center'}}> Añade los cuartos que posees y los cuales quieres controlar. 
          </Text>
        </View>
        <View style={Styles.body}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style = {Styles.finish}>
          <View style={Styles.finishLeft}>
            <TouchableOpacity onPress={this.agregar}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>Añadir +</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style ={Styles.finishRight}>
            <TouchableOpacity onPress={this.cancelar}>
             <View style={Styles.button}>
               <Text style={Styles.buttonText}>Eliminar -</Text>
             </View>
            </TouchableOpacity>
          </View>
        </View>   
      </View>
    )

  }
}

export default Add