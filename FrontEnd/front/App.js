
import React from 'react';
import {View,Text} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import getByCategory from './src/screens/GetByCategoryScreen'
import getByTime from './src/screens/GetByTimeScreen'


const navigator= createStackNavigator({
  Home: HomeScreen,
  getByCategory: getByCategory,
  getByTime: getByTime
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title:'Home Screen'
  }
})

export default createAppContainer(navigator);
