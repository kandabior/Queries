
import React from 'react'
import {useWindowDimensions} from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import getByCategoryStackScreen from './src/routes/CategoryStackScreen'
import getByTimeStackScreen from './src/routes/TimeStackScreen'

const Drawer= createDrawerNavigator();


export default function App(){
  const dimensions= useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator 
                        drawerType={dimensions.width >= 480 ? 'permanent' : 'front'}
                        drawerStyle={{backgroundColor:'#445060',
                                      width:200}}
                        drawerContentOptions={{activeBackgroundColor:'#132737',
                                               activeTintColor:'white',
                                               inactiveTintColor:'#c9ccd1' }} >
        <Drawer.Screen name='By Category' component={getByCategoryStackScreen}/>
        <Drawer.Screen name='By Time' component={getByTimeStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}