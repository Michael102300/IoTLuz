import React, {Component} from 'react'
import {StyleSheet, 
        Text, 
        View, 
        Slider,
        Button,
        TextInput,
        Alert, 
        FlatList,
        Image,

      } from 'react-native';

import im from '../media/Batman1.jpg'
import { Icon } from 'react-native-elements' 

//import DATA from './data/data.json'
//import style from './Styles'


 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre:'',
      Contraseña:'',

    };
  }


  login = () =>{

  }

  longp = () =>{

  }
  

  render() {
    const {value} = this.state;
    const {Nombre} = this.state;
    const {Contraseña} = this.state;

    return (
      <View style={Styles.container}>


          <View style={Styles.header}>

            <View style={Styles.headerLeft} >
              <Image 
                style={Styles.image} 
                source={im} >
              </Image>
            </View>

            <View style={Styles.headerRight} >
              <Button 
                style={Styles.button}
                onPress={()=>this.login()}
                onLongPress={()=>this.longp()} >
              </Button>
            </View>

          </View>


          <View style={Styles.body} >

            <View style={Styles.bodyUp} >
              <Icon
                style={Styles.icon} 
                name='Security' />
              <TextInput 
                style={Styles.TextInputUp}
                placeholder="Nombre"
                value={Nombre}
                onChangeText={(Nombre)=>{this.setState({Nombre})}} >
              </TextInput>
            </View>

            <View style={Styles.bodyDown} >
              <Icon
                style={Styles.icon} 
                name='Person'/>
              <TextInput 
                style={Styles.TextInputDown}
                placeholder="Contraseña"
                value={Contraseña}
                onChangeText={(Contraseña)=>{this.setState({Contraseña})}} >
              </TextInput>
            </View>

          </View>


          <View style={Styles.leg} >

            <View style={Styles.c1} >
            </View>

            <View style={Styles.c2} >
            </View>

            <View style={Styles.c3} >
            </View>

          </View>


          <View style={Styles.footer} >

            <View style={Styles.c1} >
            </View>

            <View style={Styles.c2} >
            </View>

            <View style={Styles.c3} >
            </View>

          </View>


      </View>
    );
  }
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    paddingHorizontal:'3%'
  },

  text: {
    fontSize: 50,
    textAlign: 'center',
  },

  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  headerLeft:{
    margin:'3%',
    flex:1,
  },

  image:{
    width:10,
    height:10,
    borderColor:'purple',
    borderWidth:2,
    borderRadius:10,
  },

  headerRight:{
    margin:'3%',
    flex:2,
  },

  button:{
    width:10,
    height:20,
  },

  body:{
    flex:1,
    flexDirection:'column',
  },

  bodyUp:{
    flexDirection:'row',
  },

  icon:{
    width:2,
    height:2,
    margin:'1%'
  },

  TextInputUp:{
    borderWidth:1,
    borderColor:'gray',
  },

  TextInputDown:{
    borderWidth:1,
    borderColor:'gray',
  },

  bodyDown:{
    flexDirection:'row',
  },

  leg:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignContent:'center'
  },

  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
  },

  c1:{
    width:3,
    height:3,
    backgroundColor:'blue'
  },

  c2:{
    width:3,
    height:3,
    backgroundColor:'green'
  },

  c3:{
    width:3,
    height:3,
    backgroundColor:'yellow'
  },



});


export default App


/* 

export default class App extends React.Component {
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

  render() {
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{String(value)}</Text>
        <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal:'10%'
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});

  */