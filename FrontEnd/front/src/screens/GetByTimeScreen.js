import React,{useState} from 'react'
import {View, Text,StyleSheet,TextInput} from 'react-native'
import DefaultScreen from './DefaultScreen'
const getByTime= ()=>{
    const [time,setInput] =useState("");

    return <DefaultScreen>
        <Text style={styles.textStyle}>Insert time to search</Text>
        <TextInput 
            style={styles.textInputStyle}
            value={time}
            onChangeText={(text)=>setInput(text)}/>
        <Text style={styles.textStyle}>Search for records at time: {time}</Text>
    </DefaultScreen>
};

const styles= StyleSheet.create({
    textInputStyle:{
        width:200,
        padding:5,
        borderWidth:1,
        borderColor: '#e9ebec',
        color: 'black',
        borderRadius:5
    },
    textStyle:{
        paddingTop:10,
        color:'#e9ebec',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default getByTime;