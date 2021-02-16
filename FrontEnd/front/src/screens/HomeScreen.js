import React from 'react'
import {View, Text,StyleSheet,Button} from 'react-native'
import runAllFunctions from '../server/interface/initDB'

const db= require('sqlite3')

const HomeScreen= ({navigation})=>{
    return (<View >
        <View style={styles.viewStyle}>
            <Button  title={'initilize DB'}/>
            </View>
        <View style={styles.viewStyle}>
            <Button title={'navigate to "GetRecordsByCategory" screen '} onPress={()=>navigation.navigate('getByCategory')}/>
        </View>
        <View style={styles.viewStyle}>
            <Button title={'navigate to "GetRecordsByTime" screen '} onPress={()=>navigation.navigate('getByTime')}/>
        </View>
        
        
    </View>)
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: 10,
        paddingHorizontal: 10
        
    }
});

export default HomeScreen;