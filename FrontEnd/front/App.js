
import {Text} from 'react-native'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import getByCategory from './src/screens/GetByCategoryScreen'
import getByTime from './src/screens/GetByTimeScreen'
import Feather from 'react-native-vector-icons/Feather'
import getByCategoryStackScreen from './src/routes/CategoryStackScreen'
import getByTimeStackScreen from './src/routes/TimeStackScreen'

const Drawer= createDrawerNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='getByTime' >
        <Drawer.Screen name='getByCategory' component={getByCategoryStackScreen}/>
        <Drawer.Screen name='getByTime' component={getByTimeStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}