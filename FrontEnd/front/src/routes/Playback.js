
import React from 'react'
import {useWindowDimensions,FlatList} from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer'
import getByCategoryStackScreen from './CategoryStackScreen'
import getByTimeStackScreen from './TimeStackScreen'
import VideoLibraryStackScreen from './VideoPlayerStackScreen'

const Drawer= createDrawerNavigator();

const tags=[
  {
    name: 'By Category',
    component: getByCategoryStackScreen
  },
  {
    name: 'By Time',
    component: getByTimeStackScreen
  },
  {
    name: 'Library',
    component: VideoLibraryStackScreen
  },

];

export default function Playback(){
  const dimensions= useWindowDimensions();

  return (
      <Drawer.Navigator 
                        drawerType={dimensions.width >= 480 ? 'permanent' : 'front'}
                        drawerStyle={{backgroundColor:'#445060',
                                      width:200}}
                        drawerContentOptions={{activeBackgroundColor:'#132737',
                                               activeTintColor:'white',
                                               inactiveTintColor:'#c9ccd1' }} >
        {tags.map((item)=>{
          return <Drawer.Screen name={item.name} component={item.component}/>       
        })}
      </Drawer.Navigator>
    
  )
}