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
    </getByCategoryStack.Navigator>
    )
}

export default getByCategoryStackScreen;