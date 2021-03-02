import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import data from '../API/mataDataObj'

const LiveViewMetaData=()=>{
    return <View>
        <View style={styles.firstRowView}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.timeStyle}>{data.time.time}</Text>
                <Text style={styles.dateStyle}>{data.time.date}</Text>
            </View>
            <View>
                <Text style={styles.officerNameStyle}>{data.officerName}</Text>          
            </View>
        </View>
        <View style={styles.secondRowStyle}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.coordsStyle}>{data.coords.lat}</Text>
                <Text style={styles.coordsStyle}>{data.coords.long}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.unitStyle}>{data.UnitName}</Text>
            </View>    
        </View>
        
        
        
    </View>
};

const styles=StyleSheet.create({
    firstRowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    secondRowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    timeStyle:{
        color:'white',
        paddingLeft:5,
        fontSize:30,
        fontWeight:'bold'
    },
    dateStyle:{
        color:'white',
        paddingLeft:5,
        fontSize:20,
        paddingTop:14
    },
    
    coordsStyle:{
        color:'white',
        paddingLeft:5,
        fontSize:20,
        
    },
    unitStyle:{
        color:'white',
        fontSize:25,
        // fontWeight:'bold'
    },
    officerNameStyle:{
        color:'white',
        padding:5,
        fontSize:25,
        fontWeight:'bold'
    },
    

});

export default LiveViewMetaData;