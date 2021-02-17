import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import getByTime from '../screens/GetByTimeScreen'
import Feather from 'react-native-vector-icons/Feather'

const getByTimeStackScreen=({navigation})=>{
    const getByTimeStack= createStackNavigator();

    return (<getByTimeStack.Navigator>
      <getByTimeStack.Screen name='getByTime' component={getByTime}
          options={{
            title: 'Get By Time',
            headerLeft: ()=>(
              <Feather.Button name='menu'  color={'black'} backgroundColor={'white'} size={30} onPress={()=> navigation.openDrawer()} />
            )
          }}/>
    </getByTimeStack.Navigator>
    )
  }
  

export default getByTimeStackScreen;