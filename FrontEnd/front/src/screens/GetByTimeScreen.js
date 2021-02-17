import React,{useState} from 'react'
import {View, Text,StyleSheet,TextInput} from 'react-native'
import { color } from 'react-native-reanimated';

const getByTime= ()=>{
    const [time,setInput] =useState("");

    return <View style={styles.ViewStyle}>
        <View style={styles.topLineStyle}></View>
        <Text style={styles.textStyle}>Insert time to search</Text>
        <TextInput 
            style={styles.textInputStyle}
            value={time}
            onChangeText={(text)=>setInput(text)}/>
        <Text style={styles.textStyle}>Search for records at time: {time}</Text>
    </View>
};

const styles= StyleSheet.create({
    ViewStyle: {
        padding: 5,
        backgroundColor:'#142432',
        flex:1
        
    },
    textInputStyle:{
        width:200,
        padding:5,
        borderWidth:1,
        borderColor: 'black',
        
    },
    textStyle:{
        paddingTop:10,
        color:'#e9ebec',
        fontWeight: 'bold',
        fontSize: 20
    },
    topLineStyle:{
        borderTopWidth:2,
        borderColor: '#29a6dd',
        paddingBottom:5
    }});

export default getByTime;