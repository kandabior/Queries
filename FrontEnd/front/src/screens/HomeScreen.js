import React from 'react'
import {View, Text,StyleSheet,TouchableOpacity, FlatList} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeButton from '../components/HomeButton'
import buttons from '../lists/HomeButtonsList'


const HomeScreen =()=>{
    return(
        <View style={styles.ViewStyle}>
            <View style={styles.topLineStyle}></View>
            <FlatList 
                horizontal={true}
                data={buttons}
                keyExtractor={item=>item.name}
                renderItem={({item})=>{
                    return <HomeButton destination={item.destination} Icon={item.Icon} name={item.name}/>
                }}/>
        </View>
    )
}

const styles=StyleSheet.create({
    ViewStyle:{
        backgroundColor:'#142432',
        flex: 1
    },
    topLineStyle:{
        borderTopWidth:2,
        borderColor: '#29a6dd',
        paddingBottom:5
    }
});

export default HomeScreen;