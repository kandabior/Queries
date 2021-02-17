import React from 'react'
import {View, Text,StyleSheet,FlatList} from 'react-native'


const items=[
    'assualt','robbery','traffic'
]
const getByCategory= ()=>{
    return <View>
        <Text>Category List:</Text>
        <Text>  {items[0]}</Text>
        <Text>  {items[1]}</Text>
        <Text>  {items[2]}</Text>
        
        </View>
};

const styles= StyleSheet.create({
    
});

export default getByCategory;