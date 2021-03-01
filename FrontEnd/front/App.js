
import React from 'react'
import {useWindowDimensions} from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import getByCategoryStackScreen from './src/routes/CategoryStackScreen'
import getByTimeStackScreen from './src/routes/TimeStackScreen'
import Playback from './src/routes/Playback'
import HomeScreen from './src/screens/HomeScreen'
import LiveViewScreen from './src/screens/LiveViewScreen'


const mainStack=createStackNavigator();

const mainScreens=[
  {
    name: 'Home',
    component: HomeScreen
  },
  {
    name: 'Playback',
    component : Playback
  },
  {
    name: 'Live',
    component: LiveViewScreen
  }

];

export default function App(){
  return <NavigationContainer>
    <mainStack.Navigator >
      {mainScreens.map((item)=>{
        return <mainStack.Screen 
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#e9ebec',
            headerTitleStyle: {
              fontSize:25,
            }
          }} 
          name={item.name}
          component={item.component}/>
      })}
    </mainStack.Navigator>
  </NavigationContainer>
}