import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  FlatList,
  Slider,
  Button,
  Alert
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
      vectid:0,
      SliderInfo: ''
      
    };
  }

  agregar = () =>{
    this.props.navigation.navigate('Form')
  }

  cancelar = () =>{
    this.props.navigation.navigate('Welcome')
  }


    render(){
      
      const {value} = this.state;
      const { params } = this.props.navigation.state
      const {SliderInfo} = this.state;


      
        return(
          
          <View style={Styles.container}>


              <View style = {Styles.header}>
                <Text style= {Styles.paragraph}  /* {JSON.stringify(navigation.getParam('id', 0))} */ > 
                  Ajusta el nivel de luz de las habitaciones.
                  {params.id} 
                  
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
                            onValueChange={ value => {this.setState({value: value}), 
                                            this.setState({SliderInfo: item.title.toString() + ":" + value})} } // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
                            
                            value={65}
                          />

                          <Button style={{height:0.1, marginTop:2,padding:'2%'}} 
                            title={"Off"} 
                            //onPress={}
                          />

       
                        </View>

                      )}
                  keyExtractor={item => item.id}
                />



              </View>

              <View /* Se imprime el valor de la informacion del slider ej: sala:15*/>
                <Text >
                  {SliderInfo}
                </Text>
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