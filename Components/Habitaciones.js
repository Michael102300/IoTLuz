import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  FlatList,
  Slider,
  Button
} from 'react-native'

import style from './Styles'
import DATA from './data/data.json'
import { ListItem } from 'react-native-elements';



/* 

function Item({ title }) {
  return (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text> 
      <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
        step={1}
        maximumValue={100}
        onValueChange={this.change.bind(this)}
        value={60}
      />
      <Button style={{height:0.1, marginTop:2,padding:'2%'}} title={"Off"}  />

    <View>
      <Text>
       P: {value}
      </Text>
    </View>        
      
    </View>

  );    
}
 */

class Habitaciones extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  agregar = () =>{
    this.props.navigation.navigate('Form')
  }

  cancelar = () =>{
    this.props.navigation.navigate('Welcome')
  }


    render(){

      const {value} = this.state;
      
        return(
          <View style={Styles.container}>


              <View style = {Styles.header}>
                <Text style= {Styles.paragraph}> 
                  Ajusta el nivel de luz de las habitaciones.
                </Text>
              </View>

              <View style={Styles.containerr}>

                <FlatList
                  data={DATA}
                  //renderItem={({ item }) => <Item title={item.title} />}
                  renderItem={({ item }) => (
                        <View style={style.item}>

                          <Text style={style.title}>{item.title}</Text> 
                          <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
                            step={1}
                            maximumValue={100}
                            onValueChange={this.change.bind(this)}
                            value={value}
                          />
                          <Button style={{height:0.1, marginTop:2,padding:'2%'}} title={"Off"}  />
                          <View>
                            <Text>
                             {value}
                            </Text>
                          </View>        
                        </View>

                      )}
                  keyExtractor={item => item.id}
                />

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
    flex : 1.1,
    backgroundColor : 'white'
  },


  header: {
    flex: 1.1,
    alignItems : 'center',
    justifyContent: 'flex-end',
    //backgroundColor: 'rgba(5,5,15,0.1)',
    //borderColor:'black',
    //borderWidth:1,
    marginHorizontal:'7%',
    //marginVertical:'1%'
  },


  paragraph :{
    fontSize : 19,
    color : 'rgba(90,40,130,0.9))',
    textAlign : 'center',
    textDecorationColor:'rgba(2,20,202,1)',
    textDecorationStyle:'solid'
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