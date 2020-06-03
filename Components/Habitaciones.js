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
  TouchableHighlight,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native'
import { Icon } from 'react-native-elements'

import style from './Styles'
import DATA from './data/data.json'
import im from '../media/Batman1.jpg'
import { ListItem } from 'react-native-elements';



var i=0;
var j=0;

class Habitaciones extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      vectid:0,
      SliderInfo:'',
      ButtonState:'Off',
      ButtonValue: 0,
      Val:'',
    };
  }



  HabitationList = (title) =>{

    return(

      
        <View style={style.item}>
          
            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
              <Text style={style.title}>{title}</Text> 
              <TouchableHighlight  onLongPress={()=>this.editar()}  onPress={()=>this.OnOff()} >
                <Image style={Styles.image} source={im}  />
              </TouchableHighlight>
            </View>
              
            <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
              step={1}
              maximumValue={100}
              onValueChange={ value => {this.setState({value: value}), 
                              this.setState({SliderInfo: title.toString() + ":" + value})} } // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
              value={65}
            />
          
        </View>
      

    )
  }



  List = () => {
    return(
      DATA.map((x,i) => {
        if(i){
          let b='off';
          return(
            <View style={style.item} key={i} >
              <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                <Text style={{fontSize:12,alignSelf:'center'}}>{x.title}</Text> 
                <TouchableHighlight  onLongPress={()=>this.editar()}  onPress={()=>this.OnOff()} >
                  <Image style={Styles.image} source={im}  />
                </TouchableHighlight>
              </View>
              <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
                step={1}
                maximumValue={100}
                onValueChange={ value => {this.setState({value: value}), 
                                this.setState({
                                              SliderInfo: x.title.toString() + ":" + value,
                                              val:value
                                              })
                                          }
                              } // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
                value={65}
              />
              <View style={{width:'17%',height:'5%',paddingVertical:'0%',justifyContent:'center'}} >
                <Button
                  key={i}
                  title={this.state.ButtonState}  //title={this.state.ButtonState}
                  onPress={
                    ()=>{
                      if(j){
                        this.setState({ButtonState: 'Off',SliderInfo: x.title.toString() + ':0'})
                        j=!j
                      }else{
                        this.setState({ButtonState: 'ON',SliderInfo: x.title.toString() + ':100'})
                        j=!j
                      }
                    }
                  } //onPress={i?this.setState({value:0}):this.setState({value:100})}  //onPress={()=>this.OnOff(x.title)}
                >
                </Button>
              </View>

            </View>
          )
      }
      })
    )
  }

  agregar = () =>{
    this.props.navigation.navigate('Agregar')
    //Alert.alert('Agregar')
  }

  cancelar = () =>{
    this.props.navigation.navigate('Welcome')
  }

  editar = () =>{
    Alert.alert('Editar')
  }

  OnOff (room) {
    
    if(i){
      this.setState({ButtonState: 'Off',SliderInfo: room.toString() + ':0'})
      //this.setState({SliderInfo: room.toString() + '0'})
      i=!i
      
    }else{
      this.setState({ButtonState: 'On', SliderInfo: room.toString() + ':100'})
      //this.setState({SliderInfo: room.toString() + '100'})
      i=!i
    }

    //Alert.alert('OnOFF')
  }


    render(){
      const {navigation}= this.props;
      const {value} = this.state;
      const { params } = this.props.navigation.state
      const {SliderInfo} = this.state;


      
        return(
          
          <View style={Styles.container}>


              <View style = {Styles.header}>


                <View style={{paddingLeft:'3%', 
                              paddingRight:'10%',
                              backgroundColor: 'rgba(5,5,15,0.1)',
                              borderColor:'black',
                              borderWidth:0.5,}} >
                  <Text style= {Styles.paragraph}   > 
                    Habitaciones: {navigation.getParam('id',0)} 
                  </Text>
                </View>

                <View style={{paddingHorizontal:'3%',paddingStart:'9%'}}>
                  <TouchableOpacity  style={{
                      borderWidth:1,
                      borderColor:'black', //rgba(0,0,0,0.2)
                      alignItems:'center',
                      justifyContent:'center',
                      width:55,
                      height:55,
                      backgroundColor:'#fff',
                      borderRadius:50,
                      backgroundColor: 'rgba(5,5,15,0.1)',
                      
                    }}
                    onPress={()=>this.agregar()}
                  >
                    <Icon name={"add"}  size={30} color="#01a699" />
                  </TouchableOpacity>
                </View>


              </View>


              <View style={Styles.containerr}>
                <ScrollView>
                  {this.List()}
                </ScrollView>
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



/* 
<FlatList
                  data={DATA}
                  //renderItem={({ item }) => <Item title={item.title} />}
                  renderItem={({ item }) => this.HabitationList(item.title)

                         <View style={style.item}>
                          
                            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                              <Text style={style.title}>{item.title}</Text> 
                              <TouchableHighlight  onLongPress={()=>this.editar()}  onPress={()=>this.OnOff()} >
                                <Image style={Styles.image} source={im}  />
                              </TouchableHighlight>
                            </View>
                             
                            <Slider style={{alignItems:'center', flex:1, paddingVertical:'5%'}}
                              step={1}
                              maximumValue={100}
                              onValueChange={ value => {this.setState({value: value}), 
                                              this.setState({SliderInfo: item.title.toString() + ":" + value})} } // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
                              value={65}
                            />

                        </View> 

                      }
                      keyExtractor={item => item.id}
                    />
 */



const Styles = StyleSheet.create({

  containerr: {
    flex: 4.7,
    marginHorizontal:'4%',
    marginVertical:'1%'
    //marginTop: Constants.statusBarHeight,
  },

  image:{
    width:35,
    height:35,
    borderRadius:3,
  },


  container :{
    flex : 1.1,
    backgroundColor : 'white'
  },


  header: {
    flex: 1.5,
    alignItems : 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    //backgroundColor: 'rgba(5,5,15,0.1)',
    //borderColor:'black',
    //borderWidth:1,
    marginHorizontal:'3%',
    //paddingTop:'6%'
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
    paddingVertical:'2%',
    margin: 1,
    justifyContent: 'space-around',
    flexDirection : 'row',
    alignItems: 'flex-end',
    marginBottom: 5
  },
  
})
export default Habitaciones





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