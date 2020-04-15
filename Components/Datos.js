import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

class Datos extends Component{


    form = () =>{
        this.props.navigation.navigate('Form')
    }

    render(){
        const { navigation } = this.props;
        return(

            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Button title="Volver al Form" onPress={this.form}>
                    </Button>
                </View>

                <View style={Styles.header}>
                    <Text >
                        itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
                    </Text>
                </View>
            </View>
            
        )
    }

}


const Styles=StyleSheet.create({

    container :{
        flex : 1,
        backgroundColor : '#E4F2F8',
        padding: 10,
        flexDirection:'column',
        justifyContent:'space-between'
      },
    
    
      header: {
        flex: 1,
        //flexDirection:'column',
        alignItems : 'flex-start',
        //justifyContent: 'space-between'
    
      },


})
export default Datos