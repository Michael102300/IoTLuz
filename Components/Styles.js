import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container :{
      flex : 1,
      backgroundColor : '#E4F2F8',
     // padding: 20
    },
    header: {
      flex: 2,
    },
    headerTop: {
      flex: 1
    },
    headerBottom: {
      flex: 1
    },
    body:{
      flex: 4,
      flexDirection: 'row'
    },
    bodyRight:{
      flex: 2,
      alignItems: 'center',
      paddingTop: 10
    },
    bodyLeft:{
      flex: 2
    },
    paragraph :{
      fontSize : 20,
      color : 'black'
      //textAlign : 'start'
     },
    name:{
       padding: 2,
       height: 30,
       borderColor: 'gray',
       borderWidth: 1,
       fontSize: 20,
       borderRadius: 20
     },
    finish:{
      flex: 2,
      margin: 5,
      flexDirection : 'row',
      justifyContent:'center'
    },
    finishRight:{
      flex: 1,
      alignItems: 'center'
    },
    finishLeft:{
      flex: 1,
      alignItems: 'center'
    },
    button: {
      borderWidth : 1,
      borderColor: '#626AE5',
      width: 150,
      height: 57,
      backgroundColor: 'white',
      borderRadius: 29
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'black',
      fontSize: 20
    },
    buttonBody:{
      borderWidth : 1,
      borderColor: '#626AE5',
      width: 200,
      height: 57,
      backgroundColor: 'white',
      borderRadius: 29,
      marginBottom: 10
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    }
  })
  export default Styles 