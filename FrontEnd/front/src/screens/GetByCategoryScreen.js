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
            <Picker
                    style={{height: 50, width: 200}}
                    selectedValue={state.category}
                    onValueChange={(value, index)=>setState({category:value})}>
                {categoryItems}
            </Picker>
            <Text>Search events of category: {state.category}</Text>
        </View>
};

const styles= StyleSheet.create({
    ViewStyle: {
        padding: 5
    }
});

export default getByCategory;