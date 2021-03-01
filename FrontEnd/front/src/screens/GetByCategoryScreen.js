import React ,{useState} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import {Picker } from '@react-native-picker/picker'
import DefaultScreen from './DefaultScreen'

const categories= [
    {key:1, value:'Arrest'},
    {key:2, value:'Robbery'},
    {key:3, value:'Traffic'} ]//Get this from the DB

const getByCategory= ()=>{
    const [state,setState] =useState({category: 'Arrest'})
    const categoryItems= categories.map((cat)=> {
        return <Picker.Item label={cat.value} value={cat.value}/>
    })
    return <DefaultScreen>
        <Picker
            style={{height: 50, width: 200,color:'black',fontSize:20,backgroundColor:'#e9ebec'}}
            selectedValue={state.category}
            onValueChange={(value, index)=>setState({category:value})}>
            {categoryItems}
        </Picker>

    </DefaultScreen> 

};

const styles= StyleSheet.create({
    textStyle:{
        paddingTop:10,
        color:'#e9ebec',
        fontWeight: 'bold',
        fontSize: 20
    },
  
});

export default getByCategory;