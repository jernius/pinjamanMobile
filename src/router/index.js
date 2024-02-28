import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/index.js';
import Login from '../pages/login/index.js';
import Waitkonfirmation from '../pages/waitKonfirmation/index.js';
import Apply from '../pages/apply/index.js';
import Borrowing from '../pages/borrowing/index.js';


const Tab = createBottomTabNavigator();
const Appmenunavigation = () => {
    return (
        <Tab.Navigator>
         <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
         <Stack.Screen name="wait" component={Waitkonfirmation} options={{headerShown: false}}/>
         <Stack.Screen name="Apply" component={Apply} options={{headerShown: false}}/>
         <Stack.Screen name="borrowing" component={Borrowing} options={{headerShown: false}}/>
        
      </Tab.Navigator>
    )
  }


const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <Stack.Navigator initialRouteName='Login'> 
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="menu" component={Appmenunavigation} options={{headerShown: false}} />

        
      </Stack.Navigator>
  )
}

export default router

const styles = StyleSheet.create({})