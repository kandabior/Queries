
import React from 'react'
import {useWindowDimensions} from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import getByCategoryStackScreen from './src/routes/CategoryStackScreen'
import getByTimeStackScreen from './src/routes/TimeStackScreen'
import Playback from './src/routes/Playback'
import HomeScreen from './src/screens/HomeScreen'

const mainStack=createStackNavigator();

export default function App(){
  return <NavigationContainer>
    <mainStack.Navigator >
      <mainStack.Screen 
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#e9ebec',
          headerTitleStyle: {
            fontSize:25,
          }
        }} 
        name="Home" 
        component={HomeScreen}/>
      <mainStack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#e9ebec',
          headerTitleStyle: {
            fontSize:25,
          }
        }} 
        name="Playback"
        component={Playback}/>
    </mainStack.Navigator>
  </NavigationContainer>
}