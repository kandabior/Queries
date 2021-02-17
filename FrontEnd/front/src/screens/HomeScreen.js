import React from 'react'
import {View, Text,StyleSheet,Button} from 'react-native'


const HomeScreen= ({navigation})=>{
    return (<View >
        <View style={styles.viewStyle}>
            <Button  title={'Initilize DB'} onPress={()=> navigation.navigate('initDB')}/>
            </View>
        <View style={styles.viewStyle}>
            <Button title={'Get records by time'} onPress={()=>navigation.navigate('getByTime')}/>
        </View>
        <View style={styles.viewStyle}>
            <Button title={'Get records by category'} onPress={()=>navigation.navigate('getByCategory')}/>
        </View>

        
        
        
    </View>)
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: 10,
        paddingHorizontal: 10,
        width: 200
        
        
    }
});

export default HomeScreen;