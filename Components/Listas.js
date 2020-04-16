import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
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
//esto es un item xd :V 
//esto si sirvio asi perro
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
            </Text>
          </View>


          <SafeAreaView style={Styles.containerr}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>


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
    //margin:10
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
export default Add