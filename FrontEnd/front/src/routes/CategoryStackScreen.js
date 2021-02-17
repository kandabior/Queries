import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import getByCategory from '../screens/GetByCategoryScreen'
import Feather from 'react-native-vector-icons/Feather'

const getByCategoryStackScreen=({navigation})=>{
    const getByCategoryStack=createStackNavigator();
    
    return (<getByCategoryStack.Navigator>
      <getByCategoryStack.Screen name='getByCategory' component={getByCategory}
          options={{
            title: 'Get By Category',
            headerLeft: ()=>(
              <Feather.Button color={'black'} backgroundColor={'white'} name='menu' size={30} onPress={()=> navigation.openDrawer()} />
            )
          }}/>
    </getByCategoryStack.Navigator>
    )
}

export default getByCategoryStackScreen;