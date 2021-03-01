import React from 'react'
import {StyleSheet, View} from 'react-native'

const DefaultScreen=({children})=>{
    return (
        <View style={styles.ViewStyle}>
            <View style={styles.topLineStyle}></View>
            {children}

        </View>
    )
};

const styles= StyleSheet.create({
    ViewStyle: {
        backgroundColor:'#142432',
        flex:1   
    },  
    topLineStyle:{
        borderTopWidth:2,
        borderColor: '#29a6dd',
        paddingBottom:5,
    },
});

export default DefaultScreen;