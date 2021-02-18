import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useIsDrawerOpen} from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import VideoLibraryScreen from '../screens/VideoLibraryScreen'
import { View } from 'react-native'

const VideoLibraryStackScreen=({navigation})=>{
    const getByTimeStack= createStackNavigator();

    return (<getByTimeStack.Navigator>
      <getByTimeStack.Screen name='getByTime' component={VideoLibraryScreen}
          options={{
            title: 'Get By Time',
            headerStyle:{
              backgroundColor:'#142432',
              
            },
            headerTintColor: '#e9ebec',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: ()=>(
              <Feather.Button color={'#e9ebec'} backgroundColor={'#142432'} name='menu' size={30} onPress={()=> navigation.openDrawer()} />
              )
          }}/>
    </getByTimeStack.Navigator>
    )
  }
  

export default VideoLibraryStackScreen;