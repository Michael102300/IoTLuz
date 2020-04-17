import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container :{
      flex : 1,
      backgroundColor : '#E4F2F8',
     // padding: 20
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

    buttonPrimary: {
      backgroundColor: '#2196f3',
      borderRadius: 11,
      //paddingHorizontal:'2%',
    },

    buttonTextPrimary: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      //fontSize: 'medium'
    },

    buttonSecondary: {
      borderWidth : 1.2,
      borderColor: '#2196f3',
      backgroundColor: 'white',
      borderRadius: 11,
      margin: 15,
      marginBottom: 1,
      marginHorizontal:'15%',
    },

    buttonTextSecondary: {
      textAlign: 'center',
      padding: 10,
      color: '#2196f3',
      //fontSize: 'medium'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 25,
    }
  })
  export default Styles 