import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Cities,RestaurantInfo,RestaurantList} from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Router=()=>{
  return(
  <NavigationContainer>
    <Stack.Navigator
     initialRouteName="cities"
     screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
      name="cities"
      component={Cities}
      
      />
      <Stack.Screen
      name="RestaurantList"
      component={RestaurantList}
      
      />
       <Stack.Screen
      name="RestaurantInfo"
      component={RestaurantInfo}
      
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
    
}
export default Router