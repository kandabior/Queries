import React from 'react'
import {View ,Text,StyleSheet} from 'react-native'
import Video from 'react-native-video'
import DefaultScreen from './DefaultScreen'


const VideoLibraryScreen= ()=> {
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

const styles= StyleSheet.create({
  
    VideoStyle:{
        width: 400,
        height: 300,
        flex:1
        
    },
   
    videoViewStyle:{
        padding:10,
        alignSelf:'center',
        
        position:'absolute'
    }
});

export default VideoLibraryScreen;