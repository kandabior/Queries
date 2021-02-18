import React from 'react'
import {View ,Text,StyleSheet} from 'react-native'
import Video from 'react-native-video'

const VideoLibraryScreen= ()=> {
    return <View style={styles.ViewStyle}>
        <View style={styles.topLineStyle}></View>
        <View style={styles.videoViewStyle}>
            <Video 
                source={{uri:'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'}}
                style={styles.VideoStyle}
                muted={true}
                controls={true}
                resizeMode={'stretch'}
            />
        </View>

            
    </View>
};

const styles= StyleSheet.create({
    ViewStyle: {
        padding: 5,
        backgroundColor:'#142432',
        flex:1
        
    },  
    VideoStyle:{
        width: 400,
        height: 300,
        flex:1
        
    },
    topLineStyle:{
        borderTopWidth:2,
        borderColor: '#29a6dd',
        paddingBottom:5,
    },
    videoViewStyle:{
        padding:10,
        alignSelf:'center',
        
        position:'absolute'
    }
});

export default VideoLibraryScreen;