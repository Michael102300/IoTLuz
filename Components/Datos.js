import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

class Datos extends Component{


    form = () =>{
        this.props.navigation.navigate('Form')
    }

    render(){
        return(

            <View style={Style.container, Style.header}>
                <View>
                    <Button title="Volver al Form" onPress={this.form}>
                    </Button>
                </View>

                <View>
                    <Text>
                        itemIdxd: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
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
        padding: 10
      },
    
    
      header: {
        flex: 2,
        flexDirection:'column',
        alignItems : 'flex-start',
        justifyContent: 'space-between'
    
      },


})
export default Datos