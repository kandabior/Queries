import React from 'react'
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeScreen =({navigation})=>{
    return(
        <View style={styles.ViewStyle}>
            <View style={styles.topLineStyle}></View>
            <View style={{padding:30}}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('Playback')}}>
                    <FontAwesome name='play' size={80} style={{color:'#5fc6f0',paddingLeft:20,paddingTop:6 }}/>
                </TouchableOpacity> 
                <Text style={styles.titleStyle}>Playback</Text>   
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    buttonStyle:{
        width: 95,
        height: 95,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 50,
        backgroundColor:'#2b4053',    
        borderColor: '#e9ebec'

    },
    ViewStyle:{
        backgroundColor:'#142432',
        flex: 1

    },
    titleStyle:{
        color: '#e9ebec',
        paddingLeft: 7,
        fontSize: 22,
        // fontWeight: 'bold'
        
    },
    topLineStyle:{
        borderTopWidth:2,
        borderColor: '#29a6dd',
        paddingBottom:5
    }
   

});

export default HomeScreen;