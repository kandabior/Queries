import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import DefaultScreen from './DefaultScreen'
import Video from 'react-native-video'
 
const LiveView=()=>{
    return <DefaultScreen>
        <View style={styles.videoViewStyle}>
            <Video 
                source={{uri:'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'}}
                style={styles.VideoStyle}
                muted={true}
                controls={true}
                resizeMode={'stretch'}
            />
        </View>
    </DefaultScreen>
};

const styles=StyleSheet.create({
    VideoStyle:{
        width: 600,
        height: 500,
        flex:1
        
    },
   
    videoViewStyle:{
        padding:10,
        alignSelf:'center',
        
        position:'absolute'
    }
});

export default LiveView;