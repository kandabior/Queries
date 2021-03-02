import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeButton=({destination, Icon, name})=>{
    const navigation=useNavigation();
    return (
    <View style={{padding:30}}>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate(destination,{url:'../../assets/sample.mp4'})}}>
            {Icon}
        </TouchableOpacity> 
        <Text style={styles.titleStyle}>{name}</Text>   
    </View>
    )
};

const styles= StyleSheet.create({
    buttonStyle:{
        width: 95,
        height: 95,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 50,
        backgroundColor:'#2b4053',    
        borderColor: '#e9ebec'

    },
    titleStyle:{
        color: '#e9ebec',
        paddingLeft: 7,
        fontSize: 22,        
    },
});

export default HomeButton;
