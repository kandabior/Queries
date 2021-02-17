import React,{useState} from 'react'
import {View, Text,StyleSheet,TextInput} from 'react-native'

const getByTime= ()=>{
    const [time,setInput] =useState("");

    return <View style={styles.viewStyle}>
        <Text>Insert time to search</Text>
        <TextInput 
            style={styles.textInputStyle}
            value={time}
            onChangeText={(text)=>setInput(text)}/>
        <Text>Search for records at time: {time}</Text>
    </View>
};

const styles= StyleSheet.create({
    viewStyle:{
        marginHorizontal:5,
    },
    textInputStyle:{
        width:200,
        padding:5,
        borderWidth:1,
        borderColor: 'black'
    }});

export default getByTime;