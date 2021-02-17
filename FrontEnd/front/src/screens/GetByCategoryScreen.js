import React ,{useState} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import {Picker } from '@react-native-picker/picker'

const categories= [
    {key:1, value:'Arrest'},
    {key:2, value:'Robbery'},
    {key:3, value:'Traffic'} ]//Get this from the DB

const getByCategory= ()=>{
    const [state,setState] =useState({category: 'Arrest'})
    const categoryItems= categories.map((cat)=> {
        return <Picker.Item label={cat.value} value={cat.value}/>
    })
    return <View style={styles.ViewStyle}>
            <View style={styles.topLineStyle}></View>
            <Picker
                    style={{height: 50, width: 200,color:'#e9ebec'}}
                    selectedValue={state.category}
                    onValueChange={(value, index)=>setState({category:value})}>
                {categoryItems}
            </Picker>
            <Text style={styles.textStyle}>Search events of category: {state.category}</Text>
        </View>
};

const styles= StyleSheet.create({
    ViewStyle: {
        padding: 5,
        backgroundColor:'#142432',
        flex:1
        
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
    }
});

export default getByCategory;