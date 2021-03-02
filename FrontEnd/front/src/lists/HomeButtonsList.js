import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const buttons=[
    {
        name: 'Playback',
        destination: 'Playback',
        Icon: <FontAwesome name='play' size={80} style={{color:'#5fc6f0',paddingLeft:20,paddingTop:6 }}/>
    },
    {
        name: 'Live View',
        destination: 'Live',
        Icon :<FontAwesome name='tv' size={70} style={{color:'#5fc6f0',paddingLeft:9,paddingTop:15 }}/>
    },
    // {
    //     name: 'Upload',
    //     destination: 'Upload',
    //     Icon :<FontAwesome name='cloud-upload' size={70} style={{color:'#5fc6f0',paddingLeft:9,paddingTop:15 }}/>
    // }
   
];

export default buttons