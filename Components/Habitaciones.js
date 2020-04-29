import React, {Component} from 'react'
import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  FlatList,
  Slider,
  Button,
  Alert,
  TouchableHighlight
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

  editar = () =>{
    Alert.alert('Editar')
  }


    render(){
      const {navigation}= this.props;
      const {value} = this.state;
      const { params } = this.props.navigation.state
      const {SliderInfo} = this.state;


      
        return(
          
          <View style={Styles.container}>


              <View style = {Styles.header}>


                <View>
                  <Text style= {Styles.paragraph}   > 
                    Numero de habitaciones: {navigation.getParam('id',0)} 
                  </Text>
                </View>

                <View>
                  <TouchableHighlight  style={{
                      borderWidth:1,
                      borderColor:'rgba(0,0,0,0.2)',
                      alignItems:'center',
                      justifyContent:'center',
                      width:100,
                      height:100,
                      backgroundColor:'#fff',
                      borderRadius:50,
                    }}
                    onPress={this.agregar()}
                  >
                    <Icon name={"chevron-right"}  size={30} color="#01a699" />
                  </TouchableHighlight>
                </View>


              </View>
              

              <View style={Styles.containerr}>

                <FlatList
                  data={DATA}
                  //renderItem={({ item }) => <Item title={item.title} />}
                  renderItem={({ item }) => (
                        <View style={style.item}>

                          <TouchableHighlight onLongPress={this.editar()} >
                            <Text style={style.title}>{item.title}</Text> 
                            <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
                              step={1}
                              maximumValue={100}
                              onValueChange={ value => {this.setState({value: value}), 
                                              this.setState({SliderInfo: item.title.toString() + ":" + value})} } // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
                              
                              value={65}
                            />

                            
                          </TouchableHighlight>

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
    flex: 4,
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
    flexDirection:'row',
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