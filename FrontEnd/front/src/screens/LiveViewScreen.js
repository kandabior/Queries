import React from 'react'
import {View,Text, StyleSheet, Dimensions} from 'react-native'
import DefaultScreen from './DefaultScreen'
import Video from 'react-native-video'
import LiveViewMetaData from '../components/LiveViewMetaData'

const LiveView=()=>{
    const url= '../../assets/sample1.mp4'
    return <DefaultScreen>
        <View style={styles.videoViewStyle}>
            <Video 
                source={require(url)}
                style={styles.VideoStyle}
                muted={true}
                controls={true}
                resizeMode={'stretch'}
            />
        </View>
        <View>
            <LiveViewMetaData/>
        </View>
    </DefaultScreen>
};

const windowWidth= Dimensions.get('window').width;
const styles=StyleSheet.create({
    VideoStyle:{
        width: windowWidth,
        height: (9*windowWidth/16),
        flex:1
        
    },
   
    videoViewStyle:{
        padding:10,
        alignSelf:'center',
        position:'absolute',
        flex:1
    }
});

export default LiveView;