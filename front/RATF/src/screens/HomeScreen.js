import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

const HomeScreen =({navigation})=>{
    return (
        <View>
            <Button title={'Initilize DB'} onPress={()=>console.log('tap init button')}/>
            <Button title={'Get Events By Category'}/>
            <Button title={'Get Events By Date'}/>
        </View>
    )
};

const styles= StyleSheet.create({});

export default HomeScreen;